import { useState } from 'react'

const Numbers=({numbers})=> {
  const fullnum = numbers.map(number=>
    <p key={number.id}>
      {number.name } {number.number}
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


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newFilter,setNewFilter] = useState('')
 
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
    console.log(newName +" "+ newNumber )
    const repeatedname = persons.find(person => person.name === newName);
    const repeatednum = persons.find(person => person.number === newNumber)
    
    if (newNumber.trim()==="" || newName.trim()===""){
      window.alert('Please do not leave any blanks.')
    }
    else if (repeatedname ) {
      window.alert( `${newName} is already in the phonebook.`)
    }
    else if (repeatednum) {
      window.alert( `${newNumber} is already in the phonebook.`)
    }
    else {
      const nameobj ={
        name: newName,
        number:newNumber,
        id: persons.length +1,
       }
  
        setPersons(persons.concat(nameobj))
        setNewName('')
        setNewNumber('')
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
    

  
  

  return (
    
    <div>
      <h2>Phonebook</h2>
      <Filter input={newFilter} change = {handlefilterchange}/>
      
      <h2>Add a new</h2>
      <Nameform submit={addnewname} nameinput={newName} namechange ={handlenamechange}
      numinput = {newNumber} numchange = {handlenumchange} /> 
      <h2>Numbers</h2>
      <Numbers numbers={filterpersons} />
     
    </div>
  )
}

export default App
