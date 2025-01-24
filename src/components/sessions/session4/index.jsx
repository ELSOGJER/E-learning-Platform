import React, { useState } from 'react';
import './style.css'
import Header from '../../header';
import img3 from "./images/Picture3.jpg";
import img4 from "./images/Picture4.jpg";
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const Session4 = () => {
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
            <h3>Getting Started with the ESP32 Development Board</h3>
            <div className="img__desgin">
                <p style={{fontSize:"18px" , margin:" 10px 20px 20px ", lineHeight:"1.9"}}>
                    The ESP32 is a series of low-cost and low-power System on a Chip
                    (SoC) microcontrollers developed by Espressif that include Wi-Fi and
                    Bluetooth wireless capabilities and dual-core processor. If you’re
                    familiar with the ESP8266, the ESP32 is its successor, loaded with
                    lots of new features.<br/>
                    
                    ESP32 refers to the bare ESP32 chip. However, the “ESP32” term is also used to refer to ESP32 development boards. Using ESP32 bare chips is not easy or practical, especially when learning, testing, and prototyping. Most of the time, you’ll want to use an ESP32 development board.<br/>

                    These development boards come with all the needed circuitry to power and program the chip, connect it to your computer, pins to connect peripherals, built-in power and control LEDs, an antenna for wi-fi signal, and other useful features. Others even come with extra hardware like specific sensors or modules, displays, or a camera in the case of the ESP32-CAM.
                </p>
                <img src={img3}/><br/>
            </div>
            <h3>How to Choose an ESP32 Development Board?</h3>
            <p style={{fontSize:"18px" , margin:" 10px 20px 0", lineHeight:"1.9"}}>Once you start searching for ESP32 boards online, you’ll find there is a wide variety of boards from different vendors. While they all work in a similar way, some boards may be more suitable for some projects than others. When looking for an ESP32 development board there are several aspects you need to take into account:</p>

            <p style={{fontSize:"18px" , margin:" 10px 40px 0", lineHeight:"1.9"}} class="fw-bolder">• USB-to-UART: </p>
            <p style={{fontSize:"18px" , margin:" 0 60px 0", lineHeight:"1.7"}}>interface and voltage regulator circuit. Most full-featured development boards have these two features. This is important to easily connect the ESP32 to your computer to upload code and apply power</p>

            <p style={{fontSize:"18px" , margin:" 10px 40px 0", lineHeight:"1.9"}} class="fw-bolder">• BOOT and RESET/EN : </p>
            <p style={{fontSize:"18px" , margin:" 0 60px 0", lineHeight:"1.7"}}>buttons to put the board in flashing mode or reset (restart) the board. Some boards don’t have the BOOT button. Usually, these boards go into flashing mode automatically</p>

            <p style={{fontSize:"18px" , margin:" 10px 40px 0", lineHeight:"1.9"}} class="fw-bolder">• Pin configuration and the number of pins : </p>
            <p style={{fontSize:"18px" , margin:" 0 60px 0", lineHeight:"1.7"}}>To properly use the ESP32 in your projects, you need to have access to the board pinout (like a map that shows which pin corresponds to which GPIO and its features). So make sure you have access to the pinout of the board you’re getting. Otherwise, you may end up using the ESP32 incorrectly.
            </p>

            <p style={{fontSize:"18px" , margin:" 10px 40px 0", lineHeight:"1.9"}} class="fw-bolder">• Antenna connector : </p>
            <p style={{fontSize:"18px" , margin:" 0 60px 0", lineHeight:"1.7"}}>Most boards come with an onboard antenna for Wi-Fi signal. Some boards come with an antenna connector to optionally connect an external antenna. Adding an external antenna increases your Wi-Fi range.
            </p>

            <p style={{fontSize:"18px" , margin:" 10px 40px 0", lineHeight:"1.9"}} class="fw-bolder">• Battery connector : </p>
            <p style={{fontSize:"18px" , margin:" 0 60px 0", lineHeight:"1.7"}}>If you want to power your ESP32 using batteries, there are development boards that come with connectors for LiPo batteries—this can be handier. You can also power a “regular” ESP32 with batteries through the power pins.
            </p>

            <p style={{fontSize:"18px" , margin:" 10px 40px 0", lineHeight:"1.9"}} class="fw-bolder">• Extra hardware features : </p>
            <p style={{fontSize:"18px" , margin:" 0 60px 40px", lineHeight:"1.7"}}>There are ESP32 development boards with extra hardware features. For example, some may come with a built-in OLED display, a LoRa module, a SIM800 module (for GSM and GPRS), a battery holder, a camera, or others.
            </p>

            <h3>What is the best ESP32 development board for beginners?</h3>

            <div className="img__desgin spific">
                <div>
                    <p style={{fontSize:"18px" , margin:" 10px 20px 0", lineHeight:"1.9"}}>For beginners, we recommend an ESP32 board with a vast selection of available GPIOs, and without any extra hardware features. It’s also important that it comes with voltage regular and USB input for power and upload code.</p>
                    <p style={{fontSize:"18px" , margin:" 10px 20px 0", lineHeight:"1.9"}}>In most of our ESP32 projects, we use the ESP32 DEVKIT DOIT board, and that’s the one we recommend for beginners. There are different versions of this board with a different number of available pins (30, 36, and 38)—all boards work in a similar way.</p>
                </div>
                <img src={img4} alt="" />
            </div>



            <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session4;