import React, { useState } from 'react';
// import './style.css'
import img1 from "./images/Picture1.png";
import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession7 = () => {
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
          <h3>Overview:</h3>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>
          ESP32-S3 is a low-power MCU-based system on a chip (SoC) with integrated 2.4 GHz Wi-Fi and Bluetooth Low Energy (Bluetooth LE).<br/>
          It consists of high-performance dual-core microprocessor , a low power coprocessor, a Wi-Fi baseband, a Bluetooth LE baseband, RF module, and numerous peripherals.<br/>
          The functional block diagram of the SoC is shown below.<br/>
          </p>
          <img src={img1} alt="" />

          <h3>Features:</h3>
          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>Wi-Fi</p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
            •	EEE 802.11 b/g/n-compliant.<br/>
            •	Supports 20 MHz, 40 MHz bandwidth in 2.4 GHz band.<br/>
            •	1T1R mode with data rate up to 150 Mbps.<br/>
            •	WMM.<br/>
            •	Wi-Fi Multimedia (WMM)<br/>
            •	 TX/RX A-MPDU, TX/RX A-MSDU<br/>
            •	 Immediate Block ACK<br/>
            •	 Fragmentation and defragmentation<br/>
            •	 Automatic Beacon monitoring (hardware TSF)<br/>
            •	 4 × virtual Wi-Fi interfaces<br/>
            •	 Simultaneous support for Infrastructure BSS in Station, SoftAP, or Station + SoftAP modes    Note    hat when ESP32-S3 scans in Station
            •	mode, the SoftAP channel will change along with the Station channel.<br/>
            •	Antenna diversity<br/>
            •	802.11mc FTM<br/>
            • 2 cores at 240 MHz: 1181.60 CoreMark; 4.92 CoreMark/MHz<br/>
            •	 128-bit data bus and SIMD commands<br/>
            •	384 KB ROM<br/>
            •	 512 KB SRAM<br/>
            •	16 KB SRAM in RTC<br/>
            •	SPI, Dual SPI, Quad SPI, Octal SPI, QPI and OPI interfaces thatallow connection to multiple flash and external RAM <br/>
            • Flash controller with cache is supported<br/>
            • Flash in-Circuit Programming (ICP) is supported<br/>

          </p>
          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}> 	Rich Set of IO Peripherals</p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
            ESP32-S3 has 45 programmable GPIOs, SPI, I2S, I2C, PWM, RMT, ADC and UART, SD/MMC host and TWAITM. In total, 14 GPIOs can be configured as capacitive touch input for HMI applications. Apart from all these peripherals, however, ESP32-S3 is also equipped with an ultra-low-power (ULP) core that supports multiple low-power modes in a variety of such use-cases.
          </p>

          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>Bluetooth </p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
          • Bluetooth LE: Bluetooth 5, Bluetooth mesh
          • High power mode (20 dBm)<br/>
          • Speed: 125 Kbps, 500 Kbps, 1 Mbps, 2 Mbps<br/>
          • Advertising extensions<br/>
          • Multiple advertisement sets<br/>
          • Channel selection algorithm #2<br/>
          • Internal co-existence mechanism between Wi-Fi and Bluetooth to share the same antenna .<br/>
          </p>

          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}> 	CPU and Memory  </p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
          • Xtensa dual-core 32-bit LX7 microprocessor, up to 240 MHz<br/>
          • CoreMark score:<br/>
          <p style={{fontSize:'20px' , margin:"0 50px" , lineHeight:"1.9"}}>
            – 1 core at 240 MHz: 613.86 CoreMark; 2.56 CoreMark/MHz .<br/>
            – 1 × TWAI controller, compatible with ISO 11898-1 (CAN Specification 2.0)<br/>
            </p>
          • Analog interfaces:<br/>
          <p style={{fontSize:'20px' , margin:"0 50px" , lineHeight:"1.9"}}>
            – 2 × 12-bit SAR ADCs, up to 20 channels<br/>
            – 1 × temperature sensor<br/>
            – 14 × touch sensing IOs<br/></p>
          • Timers:<br/>
          <p style={{fontSize:'20px' , margin:"0 50px" , lineHeight:"1.9"}}>
            – 4 × 54-bit general-purpose timers<br/>
            – 1 × 52-bit system timer<br/>
            – 3 × watchdog timers <br/></p>
          </p>
          
          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>Security</p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
          • Secure boot<br/>
          • Flash encryption<br/>
          • 4-Kbit OTP, up to 1792 bits for users<br/>
          • Cryptographic hardware acceleration:<br/>
          <p style={{fontSize:'20px' , margin:"0 50px" , lineHeight:"1.9"}}>
          – AES-128/256 (FIPS PUB 197)<br/>
          – Hash (FIPS PUB 180-4)<br/>
          – RSA<br/>
          – Random Number Generator (RNG)<br/>
          – HMAC<br/>
          – Digital signature.<br/>
          </p>
          </p>

          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}> 	Low Power Management </p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
          • Power Management Unit with five power modes<br/>
          • Ultra-Low-Power (ULP) coprocessors.<br/>
          </p>

          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}> 	Mature Software Support</p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
          ESP32-S3 is supported through Espressif’s popular ESP-IDF platform that already powers millions of devices on the market. ESP-IDF comes with rigorous testing, regular updates and an unparalleled support policy. Based on ESP-IDF’s mature software architecture, developers can easily build applications anew or migrate their own applications to the ESP32-S3 platform, and continue working with the trusted ESP-IDF tools and APIs.
          </p>

          <p class="fw-bolder" style={{fontSize:'20px' , margin:"10px 20px" , lineHeight:"1.9"}}>Applications: </p>
          <p style={{fontSize:'20px' , margin:"0 40px" , lineHeight:"1.9"}}>
          With low power consumption, ESP32-S3 is an ideal choice for IoT devices in the following areas:<br/>
            • Smart Home<br/>
            • Industrial Automation<br/>
            • Health Care<br/>
            • Consumer Electronics<br/>
            • Smart Agriculture<br/>
            • POS machines<br/>
            • Service robot<br/>
            • Audio Devices<br/>
            • Generic Low-power IoT Sensor Hubs<br/>
            • Generic Low-power IoT Data Loggers<br/>
            • Cameras for Video Streaming<br/>
            • USB Devices<br/>
            • Speech Recognition<br/>
            • Image Recognition<br/>
            • Wi-Fi + Bluetooth Networking Card<br/>
            • Touch and Proximity Sensing<br/>
          </p>

          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession7;