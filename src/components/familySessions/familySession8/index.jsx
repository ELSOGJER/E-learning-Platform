import React, { useState } from 'react';
import './style.css'
import img1 from "./images/pic1.png";
import img2 from "./images/Picture2.png";
import img3 from "./images/Picture3.png";
// import img4 from "./images/Picture4.png";
// import img5 from "./images/Picture5.png";
// import img6 from "./images/pic6.png";
// import img7 from "./images/Picture7.png";

import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession8 = () => {
  const [clickedSession, setClickedSession] = useState(false);
      const handleMenuClicked = () => {
        setClickedSession(!clickedSession);
      };
  return (
    <div>
      <div className="sessions">
        <Header />
      </div>
      <i
        className={
          clickedSession
            ? "fa fa-times bars-session"
            : "fa fa-bars bars-session"
        }
        aria-hidden="true"
        onClick={handleMenuClicked}
      ></i>
      <div class=" fluid" id="session1">
        <div
          className={
            clickedSession
              ? "position-fixed w3-sidebar active"
              : "position-fixed w3-sidebar"
          }
        >
          <ScrollBar/>
        </div>


        <div class=" content offset-3 family_session5">
          <h3>Pin Layout</h3>

          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>Top View of ESP-32S2.</p>
          <img src={img1} alt="" className='imging'/>
          <h3>Pin Overview:</h3>
          <p>The ESP32-S3 chip integrates multiple peripherals that require communication with the outside world. To keep the chip package size reasonably small, the number of available pins has to be limited. So the only way to route all the incoming and outgoing signals is through pin multiplexing. Pin muxing is controlled via software programmable registers.</p>

          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>All in all, the ESP32-S3 chip has the following types of pins:
            <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
            • IO pins with the following predefined sets of functions to choose from:
              <p style={{fontSize:"20px" , margin:'10px 40px 10px', lineHeight:'1.8'}}>
              – Each IO pin has predefined IO MUX and GPIO functions
              – Some IO pins have predefined RTC functions
              – Some IO pins have predefined analog functions

              </p>
            </p>
          </p>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>Predefined functions means that each IO pin has a set of direct connections to  certain on-chip components. During run-time, the user can configure which component from a predefined set to connect to a certain pin at a certain time via memory mapped registers.</p>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>
          • Analog pins that have exclusively-dedicated analog functions<br/>
          • Power pins supply power to the chip components and non-power pins

          </p>

          <h3 style={{margin:'30px 0 20px', lineHeight:'1.8'}}>Pin Description</h3>
          <img src={img2} alt="" />
          <img src={img3} alt="" />

          <h3 style={{margin:'30px 0 20px', lineHeight:'1.8'}}>Notes for Table image 2-1 Pin Overview:</h3>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}> 1)	In column Pin Providing Power, regarding pins powered by VDD_SPI:
            <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
            
            • Power actually comes from the internal power rail supplying power to VDD_SPI.
            </p>
           </p>

           <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}> 2)	Bold marks the pin function set in which a pin has its default function in the default boot mode. </p>
           
           <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}> 3)	In column Pin Providing Power, regarding pins powered by VDD3P3_CPU / VDD_SPI:
            <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
            • Pin Providing Power (either VDD3P3_CPU or VDD_SPI) can be configured via a register.
            </p>
           </p>
           <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}> 4)	Default drive strength for all pins is 20 mA. </p>

           <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}> 5)	Column Pin Settings shows predefined settings at reset and after reset with the following abbreviations:
            <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
            • IE – input enabled
            • WPU – internal weak pull-up resistor enabled
            • WPD – internal weak pull-down resistor enabled

            </p>

            
           </p>
           <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}> 6)	Depends on the value of EFUSE_DIS_PAD_JTAG:
            <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
            • 0 - pin floating
            • 1 - WPU is enabled
            </p>
           </p>

           <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}> 7)	For ESP32-S3R8V chip, as the VDD_SPI voltage has been set to 1.8 V, the working voltage for pins SPICLK_N and SPICLK_P (GPIO47 and GPIO48) would also be 1.8 V, which is different from other GPIOs. </p>
           
           
           
      
          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession8;