

import './App.css';
const Header=(name)=> {
  console.log(name)
  return(
    <h1>
      {name.name}
    </h1>
  )
}
const Part = (words)=> {
  return (
    <p>
      {words.part} {words.exercises}
    </p>
  )
}
const Content = (all) => {
  return (
    <div>
      <Part part={all.part_1} exercises={all.exercises_1}/>
      <Part part={all.part_2} exercises={all.exercises_2}/>
      <Part part={all.part_3} exercises={all.exercises_3}/>
    </div>
  )
}

const Total=(num)=>{
  console.log(num)
  var totalnum = num.ex1 + num.ex2 + num.ex3

  return (
    <p>
      Number of exercises {totalnum}
    </p>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part_1={part1} exercises_1={exercises1} part_2={part2} exercises_2 ={exercises2} part_3={part3} exercises_3={exercises3} />
      
      <Total ex1 = {exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}




export default App;
