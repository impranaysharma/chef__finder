import React from 'react'
import logo from "../assests/favicon.ico"
import cook from "../assests/main.jpg"
import "./Flip.css"
const Flip = () => {
  return (
    <div className='flip-box'>
        <div className='flip-box-inner'><img src={cook} className='flip-box-front'/>
        <img src={logo} className='flip-box-back'/></div></div>
  )
}

export default Flip