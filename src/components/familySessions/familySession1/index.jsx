import React, { useState } from 'react';
// import './style.css'
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession1 = () => {
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
          <h3>ESP32-S, Wi-Fi +Bluetooth Module Based on ESP32</h3>

          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>ESP32-S has a highly competitive package size and ultra-low power technology.</p>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>ESP32-S can be widely used in various of networking, for home automation, industrial wireless control, baby monitors, wearable electronics products, wireless position sensing devices, wireless positioning system signals and other networking applications. ESP32-S suit for IOT applications such as:</p>
          <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
            •	Smart home<br/>
            •	Intelligent building<br/>
            •	Industrial automation<br/>
            •	Wearable devices<br/>
            •	IP camera<br/>
            •	Intelligent agriculture<br/>
        </p>
        <p style={{fontSize:"20px" , margin:'10px 20px 20px', lineHeight:'1.8'}}>Esp32-S is packaged in SMD, through the standard SMT equipment to achieve rapid production of products, to provide customers with High reliability of the connection, especially for Automation, large-scale, low-cost modern production methods, It’s suitable for all kinds of Internet of things hardware terminal occasions.
        </p>
        <h3>Definition of ESP32-S </h3>
        <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>
        The ESP32-S is a wireless module based on ESP32, supports Wi-Fi and Bluetooth 4.2, with built-in 32Mbit Flash, in the SMD38 package. There're also onboard PCB antenna and metal shield. In short, it's a small form factor and fairly high cost effective wireless module .With the pre-flashed AT firmware, you can control the module through UART AT commands easily. The module integrates MCU inside, supports other developments like Lua/Micropython/Arduino to achieve flexible and fast prototyping, make it easy to integrate the module into IoT applications.
        </p>
        <p style={{fontSize:"20px" , margin:'10px 20px 20px', lineHeight:'1.8'}}>
        Another point of view ESP32-S is a powerful, generic WiFi-BT-BLE MCU module that targets a wide variety of applications
        ranging from low power sensor networks to the most demanding tasks such as voice encoding, music
        streaming and MP3 decoding.<br/>
        ESP32-S has AI-Thinker’s long term support — ESP32 will be covered under Espressif’s longevity program and be available for the next 12 years. The design of ESP-32S will be open-source when it has been fully optimized.
        </p>

        <h3>Features</h3>
        <p style={{fontSize:"20px" , margin:'10px 20px 20px', lineHeight:'2'}}>
            •	The smallest 802.11b/g/n Wi-Fi +BT SOC Module.<br/>                            
            •	Low power 32-bit CPU, can also serve theapplication.<br/>
            •	Built-in two 12 bit SAR ADCs, up to 18 channels.<br/>  
            •	Supports UART/SPI/I2C/SDIO/GPIO/ADC/PWM.<br/>  
            •	SMD38 package.<br/>  
            •	Supports OpenOCD debug interface.<br/>  
            •	Supports multi sleep modes, deep sleep current as low as 6.5uA.<br/>  
            •	UART baudrate up to 4Mbps.<br/>  
            •	Embedded Lwip and FreeRTOS.<br/>  
            •	Supports STA/AP/STA+AP operation mode.<br/>  
            •	Supports Smart Config (APP) / AirKiss (WeChat), one key networking.<br/>  
            •	Supports UART local firmware upgrade and/or remote firmware upgrade (FOTA).<br/>  
            •	AT commands for getting started fast.<br/>  
            •	Supports secondary development, integrated Windows / Linux environment.<br/>  
        </p>
        <h3>ESP-32S Specifications</h3>
        <img src={pic1} alt="" style={{width:'100%'}}/>
        <img src={pic2} alt="" style={{width:'100%'}}/>

        <h3>Note:</h3>
        <p style={{fontSize:"20px" , margin:'10px 20px 20px', lineHeight:'1.8'}}>ESP32-S with high temperature range option (-40°C ~ 125°C) is available for custom order.</p>
          
          



          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession1;