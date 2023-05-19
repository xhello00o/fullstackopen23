
import './App.css';
const Header=(name)=> {
  console.log(name)
  return(
    <h1>
      {name.course}
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
  var alllist = all.partss 
  return (
    <div>
      <Part part={alllist[0].name} exercises={alllist[0].exercises}/>
      <Part part={alllist[1].name} exercises={alllist[1].exercises}/>
      <Part part={alllist[2].name} exercises={alllist[2].exercises}/>
    </div>
  )
}

const Total=(num)=>{
  console.log(num.partss)
  var numlist=num.partss
  var totalnum = numlist[0].exercises + numlist[1].exercises + numlist[2].exercises

  return (
    <p>
      Number of exercises {totalnum}
    </p>
  )
}


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content partss={course.parts} />
      <Total partss={course.parts} />
    </div> )
}




export default App;
