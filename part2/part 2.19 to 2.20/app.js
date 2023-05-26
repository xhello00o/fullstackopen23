
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

const Weather = ({weatherdata,location}) => {
  console.log('Weather',weatherdata)
  if (weatherdata===null) {
    return null
  }
  else {
    return (
      <div>
        <h2>Weather in {location} </h2>
        <p>Current Temperature: {weatherdata.main.temp} degC</p>
        <p>Feels like: {weatherdata.main.feels_like} degC</p>
        <img src={`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`} alt='Weather Icon'/>
        <p>Wind: {weatherdata.wind.speed} m/s</p>
      </div> )
  }

  
    


}

const ListCountries =({countries,setShow,weather}) => {
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
            <li key={Object.values(countries[0].languages).indexOf(language)}>{language}</li>
          ))}
        </ul>
        <img src={countries[0].flags.png} alt='flag'/>
        <Weather weatherdata={weather} location={countries[0].capital[0]}/>
      </div>
      
      

    )
  }
  else {
  const fulllist = countries.map (country => 
    <p key={countries.indexOf(country)}>
      {country.name.common} ({country.idd.root}) {""}
      <button onClick={()=>setShow(country.name.common)}>Show</button></p>)
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
  const [newWeather, setNewWeather] = useState(null)

  const API_KEY = '28b78bfb6e33c023d50bfd853ded627f'
  console.log("API",API_KEY)

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
    
    let filteredCountries = [];
    const copyofnewfilter = newFilter.trim().toLowerCase();
    if (newFilter.trim() === "") {
      filteredCountries = [];
    } else {
      const fullmatch = Countries.find(
        (country) =>
          country.name.common.trim().toLowerCase() === copyofnewfilter
      );
      console.log(fullmatch);
      if (fullmatch) {
        filteredCountries.push(fullmatch);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${fullmatch.latlng[0]}&lon=${fullmatch.latlng[1]}&appid=${API_KEY}&units=metric`;
        console.log("url", url);
      

        if ((newWeather=== null)){
          axios.get(url).then((response) => {
            console.log('Weather API call')
            const weather = response.data;
            console.log("weather", weather.sys.country);
            console.log("test",fullmatch.cca2)
            
            setNewWeather(weather)
            console.log("weather loaded");
          });
        }else if((newWeather.sys.country!== fullmatch.cca2)) {
          axios.get(url).then((response) => {
            console.log('Weather API call')
            const weather = response.data;
            console.log("weather", weather.sys.country);
            console.log("test",fullmatch.cca2)
            
            setNewWeather(weather)
            console.log("weather loaded");
          });

        }



        
      } else {
        for (let country of Countries) {
          if (
            country.name.common.trim().toLowerCase().includes(copyofnewfilter)
          ) {
            filteredCountries.push(country);
          }
        }
      }
    }

  
  console.log('filtered',filteredCountries)

  const ShowView =(name) => {
    console.log(name)
    setNewFilter(name)
  }
  
  

  


  
  return (
    <div >
      <Filter input={newFilter} filterchange={handlefilterchange}/>
      <ListCountries countries={filteredCountries} setShow={ShowView} weather={newWeather}/>      
    </div>
  );
}

export default App;
