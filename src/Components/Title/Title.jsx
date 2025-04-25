import React from 'react'
import './Title.css'
const Title = (props) => {
  return (
    <div className='title'>
      <p>{props.subTitle}</p>
      <h2>{props.title}</h2>
    </div>
  )
}
import './Title.css'
export default Title
