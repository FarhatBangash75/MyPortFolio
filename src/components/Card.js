import React from 'react'

import '../components/Card.css'
function Card(props) {
  return (
    <div className='main-div'>
      <img src={props.img} className='img'/>
      <p className='name'>{props.name}</p>
      <p className='quotes'>{props.quotes}</p>
    </div>
  )
}

export default Card
