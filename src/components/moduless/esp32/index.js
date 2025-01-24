import React from 'react'
import Header from '../../header';
import './style.css'
import img0 from '../images/esp32.jpg'
import img1 from "../images/Robust.png";
import img2 from "../images/ultra.png";
import img3 from "../images/high.png";
import img4 from "../images/wifi_0_1.png";
import img5 from "../images/ble_0_0.png";
import Footer from '../../footer';
import { Link } from 'react-router-dom';

const ModuleEsp32 = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={img0} className="d-block w-100" />
        <div className="container padding">
          <div className="fw-bold text-center mt-5 col-12">
            <h2>Overview</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card col-5 mt-4">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Robust Design</h5>
                <p className="card-text h6">
                  ESP32 is capable of functioning reliably in industrial
                  environments, with an operating temperature ranging from –40°C
                  to +125°C. Powered by advanced calibration circuitries, ESP32
                  can dynamically remove external circuit imperfections and
                  adapt to changes in external conditions. .
                </p>
              </div>
            </div>
            <div className="card col-5 mt-4">
              <img src={img2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Ultra-Low Power Consumption
                </h5>
                <p className="card-text h6">
                  Engineered for mobile devices, wearable electronics and IoT
                  applications, ESP32 achieves ultra-low power consumption with
                  a combination of several types of proprietary software. ESP32
                  also includes state-of-the-art features, such as fine-grained
                  clock gating, various power modes and dynamic power scaling. .
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="card col-5 mt-4">
              <img src={img3} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  High Level of Integration
                </h5>
                <p className="card-text h6">
                  ESP32 is highly-integrated with in-built antenna switches, RF
                  balun, power amplifier, low-noise receive amplifier, filters,
                  and power management modules. ESP32 adds priceless
                  functionality and versatility to your applications with
                  minimal Printed Circuit Board (PCB) requirements. .
                </p>
              </div>
            </div>
            <div className="card row col-5 mt-4">
              <div className="row">
                <img src={img4} class="card-img-top wifi" alt="..." />
                <img src={img5} class="card-img-top belto" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Hybrid Wi-Fi & Bluetooth Chip
                </h5>
                <p className="card-text h6">
                  ESP32 can perform as a complete standalone system or as a
                  slave device to a host MCU, reducing communication stack
                  overhead on the main application processor. ESP32 can
                  interface with other systems to provide Wi-Fi and Bluetooth
                  functionality through its SPI / SDIO or I2C / UART interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='learn-more'>
            <h4>If you need more infomation <Link to="/courses">Click here. . .</Link> </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ModuleEsp32;