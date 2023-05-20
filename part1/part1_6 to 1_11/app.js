
import './App.css';
import {useState} from 'react';

const Statisticsline = ({text,value}) => (
  <td>{text} {value} </td>
)

const Statistics =(all)=> {
  var good = all.good
  var neutral = all.neutral
  var bad = all.bad
  if ((good +neutral + bad) ===0){
    return (
      <div>
        
        <p> No Feedback Given</p>
      </div>
    )}

  const average =(good,neutral,bad)=> {
    

    if ((good +neutral + bad) ===0){
      return 0
    }
    else {
      return ((good*1 + bad*-1)/(good+neutral+bad))
    } 
  }

  const positive =(good,neutral,bad) => {
    if ((good+neutral + bad) ===0){
      return ("0%")
    }
    else {
      var value= good*100/(good+neutral+bad)
      return (value + "%" )
    } 
  }

return(
  <div>
    <table>
      <tbody>
      <tr>
        <Statisticsline text ={"Good"} />
        <Statisticsline value ={good} />
      </tr>
      <tr>
        <Statisticsline text ={"Neutral"} />
        <Statisticsline value ={neutral} />
      </tr>
      <tr>
        <Statisticsline text ={"Bad"} />
        <Statisticsline value ={bad} />
      </tr>
      <tr>
        <Statisticsline text ={"All"} />
        <Statisticsline value ={good+neutral+bad} />
      </tr>
      <tr>
        <Statisticsline text ={"Average"} />
        <Statisticsline value ={average(good,neutral,bad)} />
      </tr>
      <tr>
        <Statisticsline text ={"Positive"} />
        <Statisticsline value ={positive(good,neutral,bad)} />
      </tr>
      </tbody>
    </table>
      
  </div>
)
}

const Button =({handleclick,text}) => (
  <button onClick={handleclick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlegood =()=> {
    setGood(good+1)
    console.log(good)
  }

 
  
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleclick={handlegood} text={"Good!"}/>
      <Button handleclick={()=>setNeutral(neutral+1)} text={"Neutral"}/>
      <Button handleclick={()=>setBad(bad+1)} text={"Bad :("}/>
      <h1> Statistics </h1> 
      <Statistics good={good} neutral={neutral} bad={bad}/>
      

    </div>
  
  )
}

export default App;
