import { useState, useEffect } from 'react'
import BEservice from './BEservice.js'
import './App.css'


const Numbers=({numbers,deleteclick})=> {
  const fullnum = numbers.map(number=>
    <p key={number.id}>
      {number.name} {number.number} .      
      <button onClick={()=>deleteclick(number)}>delete</button>
      </p>
    )
    return(
      fullnum
    )
}



const Filter=({input,change})=>(
  
  <form>
        <div>
          filter shown with <input value={input} onChange={change}/>
        </div>
  </form>
)

const Nameform=({submit, nameinput, namechange, numinput ,numchange} )=>( 

  <form onSubmit={submit}>
        <div>
          name: <input value={nameinput} onChange={namechange}/>
          number: <input value={numinput} onChange={numchange}/>
        </div>
        
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

)

const Notification =({message,effect})=> {
  if (message===null) {
    return null }
  else {
    let cssclass = 'error'
    if (effect){
      cssclass = 'success'
    }
    return (
      <div className={cssclass}>
        {message}
      </div>
    )
  }
  }




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newFilter,setNewFilter] = useState('')
  const [errorMessage,setErrorMessage] = useState(null)
  const [errorEffect, setErrorEffect] = useState(true)

  useEffect(()=>{
    console.log ('effect')
    BEservice.getAll()
    .then(initialnum =>{
      console.log('promise fulfilled')
      setPersons(initialnum)
    })
  },[])
 
  const handlenamechange =(event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlenumchange =(event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handlefilterchange =(event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  
  const addnewname =(event)=> {
    event.preventDefault()
    console.log("new" + newName +" "+ newNumber )
    const repeatedname = persons.find(person => person.name === newName);
    const repeatednum = persons.find(person => person.number === newNumber)
    
    if (newNumber.trim()==="" || newName.trim()===""){
      window.alert('Please do not leave any blanks.')
    }
    else if (repeatedname ) {
      if(window.confirm( `${newName} is already in the phonebook. Replace the old number with a new one?`)){
        const nameobj ={
          name: newName,
          number:newNumber,
         }
         let updatepersonindex = persons.indexOf(repeatedname)
        let updatedpersons = persons.filter(person => person!==repeatedname)
        
        BEservice.update(repeatedname.id,nameobj)
        .then(updatednum => {
          
          console.log(updatednum)
          console.log(updatedpersons)
          updatedpersons.splice(updatepersonindex,0,updatednum)
          console.log(updatedpersons)

          
          setPersons(updatedpersons)
          setErrorMessage(`Updated ${repeatedname.name} with number ${newNumber}`)
          setErrorEffect(true)
          setTimeout(()=> setErrorMessage(null),5000)
        }).catch(error => {
          console.log("err:",error)
          console.log(error.response.statusText)
          if (error.response.statusText === 'Not Found') {
            updatedpersons = persons.filter(person => person!==repeatedname)
            
            setPersons(updatedpersons)
            setErrorMessage(`${repeatedname.name} has already been removed from the server.`)
            setErrorEffect(false)
            setTimeout(()=> setErrorMessage(null),5000)

            
          }
        })

      }
    }
    else if (repeatednum) {
      window.alert( `${newNumber} is already in the phonebook.`)
    }
    else {
      const nameobj ={
        name: newName,
        number:newNumber,
       }
       console.log("nameobj:",nameobj)
       BEservice.create(nameobj)
       .then(newnum => {
        console.log(newnum)
        setPersons(persons.concat(newnum))
        setNewName('')
        setNewNumber('')
        setErrorMessage(`Added ${newName}`)
        setErrorEffect(true)
        setTimeout(()=> setErrorMessage(null),5000)
      })
        
    }
    
  }
  let filterpersons =[]
  if (newFilter.trim() ===""){
    filterpersons=persons
  }
  else{
    const copyofnewfilter = newFilter.toLowerCase()
    for (let person of persons) {
      if ((person.name.toLowerCase()).includes(copyofnewfilter)){
        filterpersons.push(person)
      }
    }

  }

  const deleteuser=(number)=>{ 
    if (window.confirm(`Delete ${number.name} ?`)){
      BEservice.delete(number.id)
      .then(deletereply=> {
        console.log(deletereply)
      })
      const delperson = persons.filter(person=> person!==number)
      setPersons(delperson)
      

    }

  }
    

  
  

  return (
    
    <div>
      <Notification message={errorMessage} effect={errorEffect}/>
      <h2>Phonebook</h2>
      <Filter input={newFilter} change = {handlefilterchange}/>
      
      <h2>Add a new</h2>
      <Nameform submit={addnewname} nameinput={newName} namechange ={handlenamechange}
      numinput = {newNumber} numchange = {handlenumchange} /> 
      <h2>Numbers</h2>
      <Numbers numbers={filterpersons} deleteclick={deleteuser} />
     
    </div>
  )
}

export default App
