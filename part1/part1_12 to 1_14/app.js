
import './App.css';
import {useState} from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allvotes,setVote] =useState(Array.from({ length: anecdotes.length }, () => 0))



  const randomnum =(max)=> (
    Math.floor(Math.random() * (max  + 1)) 
  )

  const changeanecdote =()=> {
    const rand = randomnum(anecdotes.length-1)
    setSelected(rand)
    console.log(rand)
    

  }
  const voteup =()=>{
    console.log(selected)
    const copy= [...allvotes]
    copy[selected]+=1
    console.log(copy)
    setVote(copy)
  }

 
    const maxval = Math.max(...allvotes)
    const maxind = [...allvotes].indexOf(maxval)

   

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} </p>
      <button onClick={changeanecdote}>Next Anecdotes</button>
      <button onClick={voteup}>Vote</button>
      <h1>Anecdote with the most votes!</h1>
      <p>{anecdotes[maxind]}</p>
      <p> has {maxval} votes</p>

    </div>
  )
}

export default App;
