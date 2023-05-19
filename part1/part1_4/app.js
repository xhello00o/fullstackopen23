
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course}/>
      <Content part_1={parts[0].name} exercises_1={parts[0].exercises} part_2={parts[1].name} exercises_2 ={parts[1].exercises} part_3={parts[2].name} exercises_3={parts[2].exercises} />
      
      <Total ex1 = {parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises}/>
    </div>
  )
}




export default App;
