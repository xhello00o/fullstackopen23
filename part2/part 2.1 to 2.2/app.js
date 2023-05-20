
import './App.css';

const Parts = ({parts})=>{
  const fullpart = parts.map(part =>
    <p key={part.id}>
    {part.name} {" "} 
    {part.exercises}
    </p>)
    
  return(
    fullpart
  )
}
const Total =({parts})=> {
  let sum =0
  for (let part of parts){
    sum += part.exercises

  }
  return(
    <p style={{ fontWeight: 'bold' }} >Total of {sum} exercises.</p>
  )

}

const Course=({course})=>{
  
  return (
    <div>
      <h1>
      {course.name}
    </h1>
    <Parts parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>
    
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App;
