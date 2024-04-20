import React from 'react'
import img1 from '../assets/person.jpg'



const Card = (props) => {
  

  return (
    <div className="card"> 
    <img src= {img1} className="img1" />
      <h3 className="cardH3">{props.name}</h3>
    </div>
  )

}

export default Card