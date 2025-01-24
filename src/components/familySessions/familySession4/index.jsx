import React, { useState } from 'react';
// import './style.css'
// import img1 from "./images/pic1.png";
import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession4 = () => {
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
          <h3>Overview</h3>
          <p style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>ESP32-S2 series of SoC is a highly-integrated, low-power, 2.4 GHz Wi-Fi System-on-Chip (SoC) solution. With its state-of-the-art power and RF performance, this SoC is an ideal choice for a wide variety of application scenarios relating to Internet of Things (IoT), wearable electronics and smart home.
          </p>
          <p style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>
          ESP32-S2 series of SoC includes a Wi-Fi subsystem that integrates a Wi-Fi MAC, Wi-Fi radio and baseband, RF switch, RF balun, power amplifier, low noise amplifier (LNA), etc. The chip is fully compliant with the IEEE 802.11b/g/n protocol and offers a complete Wi-Fi solution.
          </p>

          <p style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>
          ESP32-S2 series of SoC is designed for ultra-low-power applications with its multiple low-power modes. The ULP coprocessor can operate in ultra-low-power mode. The chip’s featured fine-grained clock gating, dynamic voltage and frequency scaling, and adjustable power amplifier output power, contribute to an optimal trade-off between communication range, data rate and power consumption.
          </p>

          <h3>Features:</h3>
          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>Wi-Fi</p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
            •	EEE 802.11 b/g/n-compliant.<br/>
            •	Supports 20 MHz, 40 MHz bandwidth in 2.4 GHz band.<br/>
            •	Single-band 1T1R mode with data rate up to 150 Mbps.<br/>
            •	WMM.<br/>
            •	TX/RX A-MPDU, RX A-MSDU.<br/>
            •	 Immediate Block ACK.<br/>
            •	Fragmentation and defragmentation.<br/>
            •	Automatic Beacon monitoring (hardware TSF)<br/>
            •	 4 × virtual Wi-Fi interfaces<br/>
            •	 Simultaneous support for Infrastructure Station, SoftAP, and Promiscuous modes.<br/>
            •	Antenna diversity<br/>
            •	802.11mc FTM<br/>
          </p>
          <h3>Note:</h3><p style={{fontSize:'20px' , margin:"10px 20px 30px" , lineHeight:"1.9"}}>when ESP32-S2 is in Station mode and
                        performs a scan, the SoftAP channel will change
                        along with the Station channel.
                        </p>
           <h3>CPU and Memory</h3>
           <p style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>
            •	Xtensa® single-core 32-bit LX7 microprocessor, up to 240 MHz.<br/>
            •	 CoreMark® score:<br/>
                   – 1 core at 240 MHz: 472.73 CoreMark; 1.97 CoreMark/MHz.
            •	 128 KB ROM<br/>
            •	 320 KB SRAM<br/>
            •	16 KB SRAM in RTC<br/>
            •	Embedded flash and PSRAM <br/>
            •	SPI/QSPI/OSPI supports multiple flash and external RAM chips<br/>
            •	Access to flash accelerated by cache<br/>
            •	Supports flash in-Circuit Programming (ICP)<br/>

           </p>
           <h3>Advanced Peripheral Interfaces</h3>
           <p style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>
            •	43 × programmable GPIOs<br/>
            •	Digital interfaces <br/>
            •	Analog interfaces<br/>

           </p>
           <h3>Security</h3>
           <p style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>
            •	Secure boot.<br/>
            •	Flash encryption.<br/>
            •	4096-bit OTP, up to 1792 bits for users.<br/>
            •	Cryptographic hardware acceleration:<br/>
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
                – AES-128/192/256 (FIPS PUB 197)<br/>
                – Hash (FIPS PUB 180-4)<br/>
                – RSA<br/>
                – Random Number Generator (RNG)
                – HMAC<br/>
                – Digital signature.<br/>
            </p>
            
           </p>
           <h3>Applications:</h3>
           <p style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>
            • Generic Low-power IoT Sensor Hubs<br/>
            • Generic Low-power IoT Data Loggers<br/>
            • Cameras for Video Streaming<br/>
            • Over-the-top (OTT) Devices<br/>
            • USB Devices<br/>
            • Speech Recognition<br/>
            • Image Recognition<br/>
            • Mesh Networks<br/>
            • Home Automation<br/>
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
                – Light control<br/>
                – Smart plugs<br/>
                – Smart door locks<br/>
            </p>
            • Smart Buildings
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
                – Smart lighting<br/>
                – Energy monitoring<br/>
            </p>
            • Industrial Automation
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
            – Industrial wireless control<br/>
            – Industrial robotics<br/>
            </p>
            • Smart Agriculture
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
            – Smart greenhouses<br/>
            – Smart irrigation<br/>
            – Agriculture robotics<br/>
            </p>
            • Audio Applications
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
            – Internet music players<br/>
            – Live streaming devices<br/>
            – Internet radio players<br/>
            – Audio headsets<br/>

            </p>
            • Health Care Applications
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
            – Health monitoring<br/>
            – Baby monitors<br/>

            </p>
            • Wi-Fi-enabled Toys
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
            – Remote control toys<br/>
            – Proximity sensing toys<br/>
            – Educational toys.<br/>

            </p>
            • Wearable Electronics
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
            – Smart watches<br/>
            – Smart bracelets<br/>

            </p>
            • Retail & Catering Applications
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
            – POS machines<br/>
            – Service robots<br/>

            </p>
            • Touch Sensing Applications
            <p style={{fontSize:'20px' , margin:"10px 30px" , lineHeight:"1.9"}}>
            – Waterproof design<br/>
            – Distance sensing applications<br/>
            – Linear slider, wheel slider designs<br/>

            </p>

            
           </p>
           <h3>Note: </h3><p style={{fontSize:'20px' , margin:"10px 20px 30px" , lineHeight:"1.9"}}>ESP32-S2 Touch Sensor has not passed the Con-
            ducted Susceptibility (CS) test for now, and thus
            has limited application scenarios.
            </p>
                        

          
          

          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession4;