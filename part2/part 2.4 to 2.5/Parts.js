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

export default Parts
