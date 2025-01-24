import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import slider1 from './images/esp32.jpg';
import slider2 from './images/esp32-s2-banner-new-1.jpg';
import slider3 from './images/esp32-c3-banner-small.jpg';
import slider4 from './images/esp32-c2-banner.jpg';
import slider5 from './images/ESP32-S3-banner-new-1.jpg';
import slider6 from './images/esp32-c6-banner.png';
import slider7 from './images/ESP32-H2-home-banner.jpg';
import slider8 from './images/esp-matter-home-banner.jpg';
import { Link } from 'react-router-dom';


const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide "
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="6"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="7"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={slider1} class="d-block w-100" alt="..." />
          <div class="carousel-caption   d-md-block">
            <h3>ESP32</h3>
            <p>
              A feature-rich MCU with integrated Wi-Fi and Bluetooth
              connectivity for a wide-range of applications
            </p>
            <Link to="/moduleEsp">
            <button class="btn btn-light text-black fw-bolder">
              Learn more
            </button></Link>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slider2} class="d-block w-100" alt="..." />
          <div class="carousel-caption   d-md-block">
            <h3 class="text-white">ESP32-S2</h3>
            <p class="text-white">
              A Secure and Powerful Wi-Fi MCU with Numerous I/O Capabilities
            </p>
            <Link to="/esp32-s2">
            <button class="btn btn-light  fw-bolder">Learn more</button>
            </Link>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slider3} class="d-block w-100" alt="..." />
          <div class="carousel-caption   d-md-block">
            <h3>ESP-S3</h3>
            <p>
              Designed for AIoT applications 2.4 GHz Wi-Fi and Bluetooth 5 (LE)
              Powerful AI acceleration Reliable security features.
            </p>
            <Link to="/esp32-s3">
            <button class="btn btn-light text-black fw-bolder">
              Learn more
            </button></Link>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slider4} class="d-block w-100" alt="..." />
          <div class="carousel-caption   d-md-block">
            <h3>ESP-C2</h3>
            <p>
              Small-sized, cost-effective SoC Equip your device with easy and
              robust wireless connectivity
            </p>
            <Link to="/esp32-c2">
            <button class="btn btn-light text-black fw-bolder">
              Learn more
            </button></Link>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slider5} class="d-block w-100" alt="..." />
          <div class="carousel-caption   d-md-block">
            <h3>ESP-C3</h3>
            <p>
              A cost-effective RISC-V MCU with Wi-Fi and Bluetooth 5 (LE)
              connectivity for secure IoT applications
            </p>
            <Link to="/esp32-c3">
            <button class="btn btn-light text-black fw-bolder">
              Learn more
            </button></Link>
          </div>
        </div>
        <div class="carousel-item ">
          <img src={slider6} class="d-block w-100" alt="..." />
          <div class="carousel-caption   d-md-block carousel-captionwifi spatail">
            <h3 class="text-white">ESP32-C6</h3>
            <p class="text-white">
              A low-power and cost-effective 2.4 GHz Wi-Fi 6 + Bluetooth 5 (LE)
              + Thread/Zigbee SoC, with a 32-bit RISC-V core, for securely
              connected devices.
            </p>
            <Link to="/esp32-c6">
            <button class="btn btn-light text-black fw-bolder btn-wifi">
              Learn more
            </button></Link>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slider7} class="d-block w-100" alt="..." />
          <div class="carousel-caption   d-md-block">
            <h3>ESP32-H2</h3>
            <p>
              IEEE 802.15.4 + Bluetooth 5 (LE) SoC, with a 32-bit RISC-V core,
              for low power consumption and securely connected devices
            </p>
            <Link to="/Esp32-CH">
            <button class="btn btn-light text-black fw-bolder">
              Learn more
            </button></Link>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slider8} class="d-block w-100" alt="..." />
          <div class="carousel-caption   d-md-block matter">
            <h3 class="text-white">Matter</h3>
            <p class="text-white">
              Build Matter-enabled smart-home devices with ease
            </p>
            <button class="btn btn-light text-black fw-bolder">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider