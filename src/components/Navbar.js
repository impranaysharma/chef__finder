import React from 'react'
import "./Navbar.css"
import { Outlet, Link } from "react-router-dom";
import Auth from './Auth';
import phone from '../assests/phone.png'
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="nleft">
        <Link to="/"><div className='head'>Chef Finder</div></Link>
            <a href="#carouselExampleIndicators">Testimonials</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="nright">
            <Auth/>
      
        </div>
    </nav>
    <div id='sticky'><img src={phone} id='phone'/>9737826874</div>
    <Outlet/>

    </>
  )
}

export default Navbar