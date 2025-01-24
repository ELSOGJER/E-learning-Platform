import React, { useState } from 'react';
// import './style.css'
import img1 from "./images/pic1.png";
import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession3 = () => {
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


        <div class=" content offset-3">
          <h3>Strapping Pins</h3>
          <p style={{fontSize:'20px' , margin:"30px 20px" , lineHeight:"1.9"}}>ESP32 has 6 strapping pins. Software can read the value of these 6 bits from register ”GPIO_STRAPPING”. During the chip power-on reset, the latches of the strapping pins sample the voltage level as strapping bits of ”0”or ”1”, and hold these bits until the chip is powered down or shut down. The strapping bits configure the device boot mode, the operating voltage of VDD_SDIO and other system initial settings.</p>

          <p style={{fontSize:'20px' , margin:"10px 20px", lineHeight:"1.9"}}>
          Each strapping pin is connected with its internal pull-up/pull-down during the chip reset. Consequently, if a strapping pin is unconnected or the connected external circuit is high impendence, the internal weak pull-up/pull-down will determine the default input level of the strapping pins.
          </p>

          <p style={{fontSize:'20px' , margin:"10px 20px", lineHeight:"1.9"}}>
          To change the strapping bit values, users can apply the external pull-down/pull-up resistances, or apply the host MCU’s GPIOs to control the voltage level of these pins when powering on ESP32.
          </p>

          <p style={{fontSize:'20px' , margin:"10px 20px", lineHeight:"1.9"}}>
          After reset, the strapping pins work as the normal functions pins.
          </p>
          
          <h3>Refer to Table for detailed boot modes configuration by strapping pins.</h3>

          <img src={img1} alt="" style={{width:'100%', margin:"50px 0"}}/>
          
          <h3>Note:</h3>
          <p style={{fontSize:'20px' , margin:"10px 20px", lineHeight:"1.9"}}>
          Firmware can configure register bits to change the settings of ”Voltage of Internal LDO (VDD_SDIO)”and ”Timing of SDIO Slave” after booting.
          </p>
          

          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession3;