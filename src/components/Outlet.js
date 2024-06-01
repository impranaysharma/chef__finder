import React from 'react'
import ot from "../assests/outlet.png"
import "./Outlet.css"
const Outlet = () => {
  return (
    <div className='outlet'>
<div id='ot1'>  Outlet Types</div>
<div id='ot2'>Built for all type of food business</div>
<div id='ot3'>The all-in-one Restaurant Management System for all types of restaurant formats and food outlets</div>
<br/>
<img src={ot} id='ot'/>

    </div>
  )
}

export default Outlet