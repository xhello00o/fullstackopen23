
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'


const ListCountries =({countries}) => {
  if (countries.length > 10){
    return (
      <p>Too many matches. Pls specify another filter.</p>
    )
  }
  else if (countries.length ===1) {
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <p>Capital: {countries[0].capital[0]}</p>
        <p>Area: {countries[0].area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(countries[0].languages).map( language =>(
            <li>{language}</li>
          ))}
        </ul>
        <img src={countries[0].flags.png} alt='flag'/>
      </div>
      

    )
  }
  else {
  const fulllist = countries.map (country => 
    <p key={countries.indexOf(country)}>
      {country.name.common} ({country.idd.root})</p>)
    return fulllist 
  } }

const Filter = ({input,filterchange}) => {
  return (
    <form>
      Find Countries <input value={input} onChange={filterchange}/>
    </form>
  )
}
    
  
  

function App() {
  const [Countries,SetCountries] = useState([])
  const [newFilter, setNewFilter] =useState('')

  useEffect( ()=> {
    console.log('first effect rendered')
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
  .then(response => {
    const countries = response.data 
    SetCountries (countries)
    console.log('data loaded')
  })

  },[])

  const handlefilterchange =(event) => {
    setNewFilter(event.target.value)
  }

  let filteredCountries =[]
  const copyofnewfilter = newFilter.trim().toLowerCase()
  if (newFilter.trim()==="") {
    filteredCountries = [] }
  else {
    const fullmatch = Countries.find(country=>
      (country.name.common.trim().toLowerCase())===copyofnewfilter)
      if (fullmatch){
        filteredCountries.push(fullmatch) }
      else {
        for (let country of Countries) {
          if ((country.name.common.trim().toLowerCase()).includes(copyofnewfilter)){
            filteredCountries.push(country)}
        }
      }
    
    }
  
  
  console.log('filtered',filteredCountries)
  

  


  
  return (
    <div >
      <Filter input={newFilter} filterchange={handlefilterchange}/>
      <ListCountries countries={filteredCountries}/>      
    </div>
  );
}

export default App;
