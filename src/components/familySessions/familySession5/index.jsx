import React, { useState } from 'react';
import './style.css'
import img2 from "./images/Picture2.png";
import img1 from "./images/Picture1.png";
import img3 from "./images/Picture3.png";
import img4 from "./images/Picture4.png";
import img5 from "./images/Picture5.png";
import img6 from "./images/pic6.png";
import img7 from "./images/Picture7.png";

import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession5 = () => {
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
          <img src={img1} alt="" />
          <h3>Pin Description</h3>
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <h3>Power Scheme</h3>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>
          Digital pins of ESP32-S2 are divided into four different power domains:
          <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
                • VDD3P3_RTC_IO<br/>
                • VDD3P3_CPU<br/>
                • VDD_SPI<br/>
                • VDD3P3_RTC<br/>
          </p>
          </p>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>VDD3P3_RTC_IO is the input power supply for RTC and CPU.
            VDD3P3_CPU is the input power supply for CPU.
            VDD_SPI can be an input power supply or an output power supply. VDD_SPI connects to the output of an
            internal LDO whose input is VDD3P3_RTC_IO. When VDD_SPI is connected to the same PCB net together with
            VDD3P3_RTC_IO, the internal LDO should be disabled.
            VDD3P3_RTC is the input power supply for RTC analog.
          </p>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>The power scheme diagram is shown in Figure2:</p><img src={img5} alt="" />
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>
          The VDD_SPI voltage can be configured at 1.8 V using an internal LDO, or powered by VDD3P3_RTC_IO via
            RSP I (nominal 3.3 V). Since ESP32-S2FH2, ESP32-S2FH4, ESP32-S2FN4R2, and ESP32-S2R2 come with
            both/either 3.3 V SPI flash and/or PSRAM, the VDD_SPI must be powered by VDD3P3_RTC_IO via RSP I . The
            VDD_SPI can be powered off via software to minimize the current leakage of flash in the Deep-sleep mode.
          </p>
          <h3>Note:</h3>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>The illustration below shows the power-up and reset timing of ESP32-S2. Details about the parameters are listed
            in Table.
          </p>
          <img src={img6} alt="Table : Description of ESP32S2 Power-up and Reset Timing Parameters"/>
          <img src={img7} alt="" />
 
          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession5;