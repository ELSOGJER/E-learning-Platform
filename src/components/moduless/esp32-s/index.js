import React from 'react'
import Header from '../../header';
import "./style.css";
import img0 from "../images/esp32-s2.jpg";
import img1 from "../images/ESP32-S3.jpg";
import { Link } from 'react-router-dom';
import Footer from '../../footer';
const ModuleEsp32S = () => {
  return (
    <div>
        <Header/>
        <div className='container big'>
            <div className='card-esp'>
                <Link to="/esp32-s2">
                    <div className='image'>
                        <img src={img0}/>
                    </div>
                    <div className='text'>
                        <h2>Esp32-S2</h2>
                        <p>A Secure and Powerful Wi-Fi MCU with Numerous I/O Capabilities</p>
                    </div>
                </Link>

            </div>
            <div className='card-esp'>
                <Link to="/esp32-s3">
                    <div className='image'>
                        <img src={img1}/>
                    </div>
                    <div className='text'>
                        <h2>Esp32-S3</h2>
                        <p>Designed for AIoT applications 2.4 GHz Wi-Fi and Bluetooth 5 (LE) Powerful AI</p>
                    </div>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
)
};

export default ModuleEsp32S;