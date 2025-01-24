import React, { useState } from 'react';
import './style.css'
import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const Session1 = () => {
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
          
          <h3>Introducing the ESP32</h3>
          <p style={{fontSize:"18px" , margin:"10px 10px 20px"}}>The ESP32 is the name of a micro controller designed by Espressif Systems. Espressif is a Chinese company based out of Shanghai. The ESP32 advertises itself as a self-contained Wi-Fi networking solution offering itself as a bridge from existing microcontrollers to Wi-Fi … and … is also capable of running self-contained applications.</p>
          <p style={{fontSize:"18px" , margin:"10px 10px 20px"}}>
            First, <span class="fw-bolder">what is an ESP32?</span> The ESP32 is
            a series of chip microcontrollers developed by Espressif.
            <span class="fw-bolder">
              Why are they so popular? Mainly because of the following features:
            </span>
          </p>
          <ul style={{fontSize:"18px" , margin:"10px 10px 20px"}}>
            <li>
              <span class="fw-bolder">Low-cost:</span> you can get an ESP32
              starting at $6, which makes it easily accessible to the general
              public;
            </li><br/>
            <li>
              <span class="fw-bolder">Low-power: </span> the ESP32 consumes very
              little power compared with other microcontrollers, and it supports
              low-power mode states like deep sleep to save power;
            </li><br/>
            <li>
              <span class="fw-bolder">Wi-Fi capabilities: </span>the ESP32 can
              easily connect to a Wi-Fi network to connect to the internet
              (station mode), or create its own Wi-Fi wireless network (access
              point mode) so other devices can connect to it—this is essential
              for IoT and Home Automation projects—you can have multiple devices
              communicating with each other using their Wi-Fi capabilities;
            </li><br/>
            <li>
              <span class="fw-bolder">Bluetooth: </span>the ESP32 supports
              Bluetooth classic and Bluetooth Low Energy (BLE)—which is useful
              for a wide variety of IoT applications;
            </li><br/>
            <li>
              <span class="fw-bolder">Dual-core: </span> most ESP32 are
              dual-core— they come with 2 Xtensa 32-bit LX6 microprocessors:
              core 0 and core 1.
            </li><br/>
            <li>
              Rich peripheral input/output interface—the ESP32 supports a wide
              variety of input (read data from the outside world) and output (to
              send commands/signals to the outside world) peripherals like
              capacitive touch, ADCs, DACs, UART, SPI, I2C, PWM, and much more.
            </li><br/>
            <li>
              Compatible with the Arduino “programming language”: those that are
              already familiar with programming the Arduino board, you’ll be
              happy to know that they can program the ESP32 in the Arduino
              style.
            </li><br/>
            <li>
              Compatible with MicroPython: you can program the ESP32 with
              MicroPython firmware, which is a re-implementation of Python 3
              targeted for microcontrollers and embedded systems.
            </li><br/>
          </ul>
          <h3>Featured Solutions</h3>
            <p class="fw-bolder" style={{fontSize:"18px" , margin:"10px 10px 20px"}}>1-	Ultra-Low-Power Solution</p> 
            <p style={{fontSize:"18px" , margin:"10px 30px 20px ", lineHeight:"1.9"}}>ESP32 is designed for mobile, wearable electronics, and Internet-of-Things (IoT) applications. It features all the state-of-the-art characteristics of low-power chips, including fine-grained clock gating, multiple power modes, and dynamic power scaling. For instance, in a low-power IoT sensor hub application scenario, ESP32 is woken up periodically and only when a specified condition is detected. Low duty cycle is used to minimize the amount of energy that the chip expends. The output of the power amplifier is also adjustable, thus contributing to an optimal trade-off between communication range, data rate and power consumption.</p> 
            
            <p class="fw-bolder" style={{fontSize:"18px" , margin:"10px 10px 20px"}}>2- Complete Integration Solution</p> 
            <p style={{fontSize:"18px" , margin:"10px 30px 20px ", lineHeight:"1.9"}}>EESP32 is a highly-integrated solution for Wi-Fi and Bluetooth IoT applications, with around 20 external components. ESP32 integrates an antenna switch, RF balun, power amplifier, low-noise receive amplifier, filters, and power management modules. As such, the entire solution occupies minimal Printed Circuit Board (PCB) area. ESP32 uses CMOS for single-chip fully-integrated radio and baseband, and also integrates advanced calibration circuitries that allow the solution to dynamically adjust itself and remove external circuit imperfections, or adjust to changes in external conditions. As such, the mass production of ESP32 solutions does not require expensive and specialized Wi-Fi testing equipment.</p>  

            <h3>Wi-Fi Key Features</h3>  
            <p style={{fontSize:"18px" , margin:"10px 30px 20px ", lineHeight:"1.9"}}>
            • 802.11 b/g/n <br/>
            • 802.11 n (2.4 GHz), up to 150 Mbps<br/>
            • WMM<br/>
            • Tx/rx A-MPDU, rx A-MSDU<br/>
            • Immediate Block ACK<br/>
            • Defragmentation<br/>
            • Automatic Beacon monitoring (hardware TSF)<br/>
            • 4 × Wi-Fi interfaces<br/>
            • Simultaneous Infrastructure BSS Station mode/SoftAP mode/Promiscuous mode<br/>
            • UMA compliant and certified<br/>
            • Antenna diversity and selection<br/>
            </p>
          
          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session1;