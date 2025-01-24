import React, { useState } from 'react';
import './style.css'
import img1 from "./images/pic1.png";
import img2 from "./images/Picture2.png";
import img3 from "./images/Picture3.png";
import img4 from "./images/Picture4.png";
import img5 from "./images/Picture5.png";


import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession9 = () => {
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
          <h3>IO Pin:</h3>

          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}} class="fw-bolder">IO MUX and GPIO Pin Functions</p>

          <p style={{fontSize:"20px" , margin:'10px 40px 10px', lineHeight:'1.8'}} >
          The pins of ESP32-S3 can be assigned any function (F0-F4) from their respective sets of IO MUX functions.<br/>
          Each set of the IO MUX functions has a general purpose input/output (GPIO0, GPIO1, etc.) function. If a pin is assigned a GPIO function, this pin’s signal is routed via the GPIO matrix, which incorporates internal signal routing circuitry for mapping signals programmatically. It gives the pin access to almost any IO MUX function. However, the flexibility of programmatic mapping comes at a cost as it might affect speed and latency of routed signals.

          </p>
          <p style={{fontSize:"20px" , margin:'10px 10px 10px', lineHeight:'1.8'}}>Table Image  2-3. IO MUX Pin Functions</p>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <h3 style={{margin:'20px 0 20px', lineHeight:'1.8'}}>2.3.2  RTC and Analog Pin Functions:</h3>
          <p style={{fontSize:"20px" , margin:'10px 10px 10px', lineHeight:'1.8'}}>
          RTC and Analog pin functions, as well as the hardware behind them, are powered by the same power pin, so
          these pin functions are somewhat related and covered together.
          Function names:
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>
          1-	RTC_GPIO… RTC general purpose input/output connected to the ULP coprocessor.<br/>
          2-	sar_i2c_… RTC I2C peripheral interface.<br/>
          3-	TOUCH… Analog function for capacitive touch sensing.<br/>
          4-	(XTAL_32K_P
                  XTAL_32K_N)<br/>
          32 kHz external clock input/output connected to ESP32-S3’s oscillator.<br/>
          P/N means differential clock positive/negative.
          5-	(ADC1_CH…
                  ADC2_CH…)<br/>
          Analog to digital conversion channel for ADC1 or ADC2.<br/>
          6-	(USB_DUSB_
                    D+)<br/>
          USB OTG and USB Serial/JTAG function. USB signal is a differential signal transmitted over a pair of D+ and D- wires.

          </p>

          </p>

          <h3 style={{margin:'20px 0 20px', lineHeight:'1.8'}}>Analog Pins:</h3>
          <img src={img3} alt="" />
          <h3 style={{margin:'20px 0 20px', lineHeight:'1.8'}}>Power Supply:</h3>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}} class="fw-bolder">2.5.1 Power Pins :</p>
          <img src={img4} alt="" />

          <h3>Strapping Pins:</h3>
          <p style={{fontSize:"20px" , margin:'10px 10px 10px', lineHeight:'1.8'}}>
          At each startup or reset, a chip requires some initial configuration parameters, such as in which boot mode to
          load the chip, voltage of flash memory, etc. These parameters are passed over via the strapping pins. After reset,
          the strapping pins operate as regular IO pins.
          The parameters controlled by the given strapping pins at chip reset are as follows:
          <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
          • Chip boot mode – GPIO0 and GPIO46<br/>
          • VDD_SPI voltage – GPIO45<br/>
          • ROM messages printing – GPIO46<br/>
          • JTAG signal source – GPIO3</p><br/>
          <img src={img5} alt="" />

          </p>


           
      
          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession9;