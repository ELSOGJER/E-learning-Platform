import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import img1 from './images/Robust.png';
import img2 from './images/ultra.png';
import img3 from './images/high.png';
import img4 from './images/wifi_0_1.png';
import img5 from './images/ble_0_0.png';
import img6 from './images/about.jpg';

import img7 from "./images/modules.png";
import img8 from "./images/courses.png";
import img9 from "./images/books.png";
import img10 from "./images/certificates_0.png";

const OverviewWhoWeAre = () => {
  return (
<div>
    <div className="container padding">
          <div className="fw-bold text-center mt-5 col-12">
            <h2>Overview</h2>
          </div>
          <div  className="row justify-content-evenly">
          <div className="card col-5 mt-4">
            <img src={img1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Robust Design</h5>
              <p className="card-text h6">ESP32 is capable of functioning reliably in industrial
                environments, with an operating temperature ranging from
                 –40°C to +125°C. Powered by advanced calibration circuitries,
                 ESP32 can dynamically remove external circuit imperfections
                and adapt to changes in external conditions.
                .</p>
            </div>
          </div>
          <div className="card col-5 mt-4">
            <img src={img2} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title fw-bold">Ultra-Low Power Consumption</h5>
              <p className="card-text h6">Engineered for mobile devices, wearable electronics and IoT
                applications, ESP32 achieves ultra-low power consumption with
                a combination of several types of proprietary software. ESP32
                also includes state-of-the-art features, such as fine-grained
                clock gating, various power modes and dynamic power scaling.
                .</p>
            </div>
          </div>
          </div>
          <div  className="row justify-content-evenly">
          <div className="card col-5 mt-4">
            <img src={img3} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title fw-bold">High Level of Integration</h5>
              <p className="card-text h6">ESP32 is highly-integrated with in-built antenna switches,
                RF balun, power amplifier, low-noise receive amplifier, filters,
                and power management modules. ESP32 adds priceless
                functionality and versatility to your applications with minimal
                Printed Circuit Board (PCB) requirements.                
                .</p>
            </div>
          </div>
          <div className="card row col-5 mt-4">
             <div className="row">
                <img src={img4} class="card-img-top wifi" alt="..."/>
                <img src={img5} class="card-img-top belto" alt="..."/>
             </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Hybrid Wi-Fi & Bluetooth Chip</h5>
              <p className="card-text h6" >ESP32 can perform as a complete standalone system or as
                a slave device to a host MCU, reducing communication stack
                overhead on the main application processor. ESP32 can
                interface with other systems to provide Wi-Fi and Bluetooth
                functionality through its SPI / SDIO or I2C / UART interfaces.</p>
            </div>
          </div>
          </div>
    </div>
    {/* who i am */}
    <div className="padding">
             <div className="whoWeAre">
                <img src={img6} alt="" className="w-100 mt-5"/>
                <div className="whoWeAre-content">
                    <h3>Who We Are</h3>
                    <p className="h6">We are a team specialized in explaining the various ESP32 systems
                        and how to operate it and use it in various projects</p>
                 </div>
             </div>

    </div>

    {/*Guidelines  */}
    <div className="container padding">
            <div className="fw-bold text-center mt-5 col-12 heading">
             <h2>Guidelines</h2>
            </div>

            <div className="d-flex container justify-content-center mt-3 mobil">
        
              <div className="d-flex p-3  rounded-2 col-3 me-2 guidelines-content">
                  <div>
                  <img src={img7} alt="" className="w-75 mobile"/>
                  </div>
                    <div className="align-self-center link">
                      <Link to=""><p className="fw-bolder mt-2">esp32 modules</p></Link>
                    </div>
              </div>
          
          
          
                  <div className="d-flex p-3 rounded-2 col-3 me-2 guidelines-content">
                    <div>
                        <img src={img8} alt="" className="w-75 mobile"/>
                    </div>
                    <div className="align-self-center link">
                        <Link to=""><p className="fw-bolder mt-2">Courses</p></Link>
                    </div>
                  </div>
          
          
          
          
                  <div className="d-flex p-3  rounded-2 col-3 me-2 guidelines-content">
                  <div>
                     <img src={img9} alt="" class="w-75 mobile"/>
                  </div>
                    <div className="align-self-center link">
                      <Link to=""><p className="fw-bolder mt-2">Books</p></Link>
                    </div>
              </div>
          
          
          
          
                  <div className="d-flex p-3 rounded-2 col-3 me-2 guidelines-content">
                  <div>
                     <img src={img10} alt="" className="w-75 mobile"/>
                  </div>
                    <div className="align-self-center link">
                      <Link to=""><p className="fw-bolder mt-2">Certifications</p></Link>
                    </div>
              </div>
            </div>
         </div>

</div>

  )
}

export default OverviewWhoWeAre