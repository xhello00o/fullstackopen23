
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
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
 

  
  return(
    <p style={{ fontWeight: 'bold' }} >Total of {totalExercises} exercises.</p>
  )

}

const Course=({courses})=>{
  console.log("courses",courses)
    const fullcourses = courses.map(course =>
      <div>
      <h1>
      {course.name}
    </h1>
    <Parts parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>)

  
  return ( 
    fullcourses
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Course courses={courses} />
    </div>
     )
}

export default App;
