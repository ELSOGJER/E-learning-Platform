import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";
import img1 from './images/icons8-google.svg';
import img2 from './images/icons8-facebook.svg';
import img3 from './images/icons8-twitter.svg';
import img4 from './images/icons8-linkedin.svg';
const Footer = () => {
  return (
<div className='footer padding'>
    <div className='container-all container'>
        <div className='container-2'>
            <div className='logo'>
                <h1>ESP32</h1>
            </div>
            <div className='nav-bar' >
                <Link to="" >Services</Link>
                <Link to="" >Products</Link>
                <Link to="" >Modules</Link>
                <Link to="" id='deff'>Contact Us</Link>
                <p class="rights">@ESP32 _ 2022 <span>.All rights reseved</span></p>
            </div>
            
        </div>

        <div className='container-3'>
            <div class="d-flex">
                <div className="me-2 icon"><a href=""><img src={img1} alt=""/></a></div>
                <div className="me-2 icon"><a href=""><img src={img2} alt=""/></a></div>
                <div className="me-2 icon"><a href=""><img src={img3} alt=""/></a></div>
                <div className="me-2 icon"><a href=""><img src={img4} alt=""/></a></div>
            </div>

            <div className="mt-3 email" >
            <a href="" className='email'>support:<span> Esp32.platform@gmail.com</span></a>
           </div>
        </div>
        <p className="mobile-rights">@ESP32 _ 2022 <span>.All rights reseved</span></p>
    </div>
</div>
  )
}

export default Footer