const Total =({parts})=> {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
   
  
    
    return(
      <p style={{ fontWeight: 'bold' }} >Total of {totalExercises} exercises.</p>
    )
  
  }

export default Total
