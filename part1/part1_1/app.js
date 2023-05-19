
import './App.css';
const Header=(name)=> {
  console.log(name)
  return(
    <h1>
      {name.name}
    </h1>
  )
}
const Content=(words)=>{
  console.log()
  return (
    <p>
      {words.part} {words.exercises}
    </p>
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
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total ex1 = {exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}




export default App;
