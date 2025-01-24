import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../footer';
import Header from '../../header';

import img5 from "./images/Picture5.jpg";
import img6 from "./images/Picture6.jpg";
import ScrollBar from '../scrollBar';
const Session2 = () => {
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

        <div class="col-md-9 content offset-3">
          <h3>BT Key Features</h3>
          <p style={{fontSize:"18px" , margin:"10px 30px 20px ", lineHeight:"1.9"}}>
            • Compliant with Bluetooth v4.2 BR/EDR and BLE specification<br/>
            • Class-1, class-2 and class-3 transmitter without external power amplifier<br/>
            • Enhanced power control<br/>
            • +12 dBm transmitting power<br/>
            • NZIF receiver with -97 dBm sensitivity<br/>
            • Adaptive Frequency Hopping (AFH)<br/>
            • Standard HCI based on SDIO/SPI/UART<br/>
            • High-speed UART HCI, up to 4 Mbps<br/>
            • BT 4.2 controller<br/>
            • Synchronous Connection-Oriented/Extended (SCO/eSCO)<br/>
            • CVSD and SBC for audio codec<br/>
            • Bluetooth Piconet and Scatternet<br/>
            • Multi-connections in Classic BT and BLE<br/>
            • Simultaneous advertising and scanning<br/>
          </p>
          <h3>MCU and Advanced Features</h3>
          
            <p class="fw-bolder" style={{fontSize:"18px" , margin:"10px 10px"}}>1-	CPU and Memory</p>

            <p style={{fontSize:"18px" , margin:" 0 30px 20px ", lineHeight:"1.9"}}>
            • Xtensa® single-/dual-core 32-bit LX6 microprocessor(s), up to 600 DMIPS (200 DMIPS for ESP32-S0WD, 400 DMIPS for ESP32-D2WD)<br/>
            • 448 kB ROM<br/>
            • 520 kB SRAM<br/>
            • 16 kB SRAM in RTC<br/>
            • QSPI flash/SRAM, up to 4 x 16 MB<br/>
            • Power supply: 2.3V to 3.6V.<br/>
            </p> 
            
            <p class="fw-bolder" style={{fontSize:"18px" , margin:"10px 10px"}}>1- CPU and Memory</p>

            <p style={{fontSize:"18px" , margin:" 0 30px 20px ", lineHeight:"1.9"}}>
            • Xtensa® single-/dual-core 32-bit LX6 microprocessor(s), up to 600 DMIPS (200 DMIPS for ESP32-S0WD, 400 DMIPS for ESP32-D2WD)<br/>
            • 448 kB ROM<br/>
            • 520 kB SRAM<br/>
            • 16 kB SRAM in RTC<br/>
            • QSPI flash/SRAM, up to 4 x 16 MB<br/>
            • Power supply: 2.3V to 3.6V.<br/>
            </p>   

            <p class="fw-bolder" style={{fontSize:"18px" , margin:"10px 10px"}}>2- Clocks and Timers</p>

            <p style={{fontSize:"18px" , margin:" 0 30px 20px ", lineHeight:"1.9"}}>
            • Internal 8 MHz oscillator with calibration<br/>
            • Internal RC oscillator with calibration<br/>
            • External 2 MHz to 60 MHz crystal oscillator (40 MHz only for Wi-Fi/BT functionality)<br/>
            • External 32 kHz crystal oscillator for RTC with calibration<br/>
            • Two timer groups, including 2 x 64-bit timers and 1 x main watchdog in each group<br/>
            • RTC timer with sub-second accuracy<br/>
            • RTC watchdog.<br/>
            </p> 

            <p class="fw-bolder" style={{fontSize:"18px" , margin:"10px 10px"}}>3- Advanced Peripheral Interfaces</p>

            <p style={{fontSize:"18px" , margin:" 0 30px 20px ", lineHeight:"1.9"}}>
            • 34 × programmable GPIOs<br/>
            • 12-bit SAR ADC up to 18 channels<br/>
            • 2 × 8-bit DAC<br/>
            • 10 × touch sensors<br/>
            • Temperature sensor<br/>
            • 4 × SPI<br/>
            • 2 × I2S<br/>
            • 2 × I2C<br/>
            • 3 × UART<br/>
            • 1 host (SD/eMMC/SDIO)<br/>
            • 1 slave (SDIO/SPI)<br/>
            • Ethernet MAC interface with dedicated DMA and IEEE 1588 support<br/>
            • CAN 2.0<br/>
            • IR (Tx/Rx)<br/>
            • Motor PWM<br/>
            • LED PWM up to 16 channels<br/>
            • Hall sensor<br/>
            </p> 

            <p class="fw-bolder" style={{fontSize:"18px" , margin:"10px 10px"}}>4- Security Interfaces</p>

            <p style={{fontSize:"18px" , margin:" 0 30px 20px ", lineHeight:"1.9"}}>
            • Secure boot<br/>
            • Flash encryption<br/>
            • 1024-bit OTP, up to 768-bit for customers<br/>
            • Cryptographic hardware acceleration:<br/>
            -AES<br/>
            -Hash (SHA-2)<br/>
            -RSA <br/>
            -ECC<br/>
            -Random Number Generator (RNG)<br/>
            </p> 
          
          
            

          
            <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Session2;