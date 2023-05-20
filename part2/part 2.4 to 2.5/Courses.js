import Parts from './Parts.js'
import Total from './Total.js'

const Course=({courses})=>{
    console.log("courses",courses)
      const fullcourses = courses.map(course =>
        <div key={course.id}>
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

export default Course
