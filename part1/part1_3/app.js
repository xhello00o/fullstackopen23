
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course}/>
      <Content part_1={part1.name} exercises_1={part1.exercises} part_2={part2.name} exercises_2 ={part2.exercises} part_3={part3.name} exercises_3={part3.exercises} />
      
      <Total ex1 = {part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
    </div>
  )
}




export default App;
