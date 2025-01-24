import React, { useState } from 'react';
import './style.css'
import img2 from "./images/Picture2.jpg";
import img1 from "./images/Picture1.png";
import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const Session3 = () => {
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

          <h3>ESP32 Specifications</h3>
          <div class="d-flex">
            <div>
              <ul style={{fontSize:"18px" , margin:" 10px 0 20px ", lineHeight:"1.9"}}>
                <li>
                  {" "}
                  <span class="fw-bolder">
                    Wireless connectivity WiFi:
                  </span>{" "}
                  150.0 Mbps data rate with HT40
                  <ul>
                    <li>
                      <span class="fw-bolder">Bluetooth:</span>BLE (Bluetooth
                      Low Energy) and Bluetooth Classic
                    </li>
                    <li>
                      <span class="fw-bolder">Processor: </span>Tensilica Xtensa
                      Dual-Core 32-bit LX6 microprocessor, running at 160 or 240
                      MHz
                    </li>
                  </ul>
                </li>

                <li>
                  {" "}
                  <span class="fw-bolder">Memory:</span>
                  <ul>
                    <li>
                      <span class="fw-bolder">ROM:</span>448 KB (for booting and
                      core functions)
                    </li>
                    <li>
                      <span class="fw-bolder">SRAM: </span>520 KB (for data and
                      instructions)
                    </li>
                    <li>
                      <span class="fw-bolder">RTC fas SRAM:</span> 8 KB (for
                      data storage and main CPU during RTC Boot from the
                      deep-sleep mode)
                    </li>
                    <li>
                      <span class="fw-bolder">RTC slow SRAM: </span>8KB (for
                      co-processor accessing during deep-sleep mode)
                    </li>
                    <li>
                      <span class="fw-bolder">eFuse: </span>1 Kbit (of which 256
                      bits are used for the system (MAC address and chip
                      configuration) and the remaining 768 bits are reserved for
                      customer applications, including Flash-Encryption and
                      Chip-ID)
                    </li>
                    <li>
                      <span class="fw-bolder">Embedded flash:</span>flash
                      connected internally via IO16, IO17, SD_CMD, SD_CLK,
                      SD_DATA_0 and SD_DATA_1 on ESP32-D2WD and ESP32-PICO-D4.
                      <ul>
                        <li>
                          0 MiB (ESP32-D0WDQ6, ESP32-D0WD, and ESP32-S0WD chips)
                        </li>
                        <li>2 MiB (ESP32-D2WD chip)</li>
                        <li>4 MiB (ESP32-PICO-D4 SiP module)</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <span class="fw-bolder">Low Power: </span>ensures that you can
                  still use ADC conversions, for example, during deep sleep.
                </li>
                <li>
                  <span class="fw-bolder">Peripheral Input/Output:</span>
                  <ul>
                    <li>
                      peripheral interface with DMA that includes capacitive
                      touch
                    </li>
                    <li>ADCs (Analog-to-Digital Converter)</li>
                    <li>DACs (Digital-to-Analog Converter)</li>
                    <li>I²C (Inter-Integrated Circuit)</li>
                    <li>UART (Universal Asynchronous Receiver/Transmitter)</li>
                    <li>SPI (Serial Peripheral Interface)</li>
                    <li>I²S (Integrated Interchip Sound)</li>
                    <li>RMII (Reduced Media-Independent Interface)</li>
                    <li>PWM (Pulse-Width Modulation)</li>
                  </ul>
                </li>
                <li>
                  <span class="fw-bolder">Security:</span>hardware accelerators
                  for AES and SSL/TLS
                </li>
              </ul>
            </div>
            <div>
              <img src={img1} alt="" className="noning" />
            </div>
          </div>

          <h3 style={{ margin:" 30px 0 20px"}}>Main Differences Between ESP32 and ESP8266</h3>
          <img src={img2} alt="" class="w-50 ms-5" />
          <p class="mt-3" style={{fontSize:"18px" , margin:" 10px 20px 20px ", lineHeight:"1.9"}}>
            Previously, we mentioned that the ESP32 is the ESP8266 successor.{" "}
            <span class="fw-bolder">
              What are the main differences between ESP32 and ESP8266 boards?
            </span>
            The ESP32 adds an extra CPU core, faster Wi-Fi, more GPIOs, and
            supports Bluetooth 4.2 and Bluetooth low energy. Additionally, the
            ESP32 comes with touch-sensitive pins that can be used to wake up
            the ESP32 from deep sleep, and built-in hall effect sensor. Both
            boards are cheap, but the ESP32 costs slightly more. While the ESP32
            can cost around $6 to $12, the ESP8266 can cost $4 to $6 (but it
            really depends on where you get them and what model you’re buying).
          </p>

          <p style={{fontSize:"18px" , margin:" 10px 0 20px ", lineHeight:"1.9"}}>
            <span class="fw-bolder">So, in summary:</span>
            <ul>
              <li>The ESP32 is faster than the ESP8266;</li>
              <li>The ESP32 comes with more GPIOs with multiple functions;</li>
              <li>
                The ESP32 supports analog measurements on 18 channels
                (analog-enabled pins) versus just one 10-bit ADC pin on the
                ESP8266;
              </li>
              <li>The ESP32 supports Bluetooth while the ESP8266 doesn’t;</li>
              <li>
                The ESP32 is dual-core (most models), and the ESP8266 is single
                core;
              </li>
              <li>The ESP32 is a bit more expensive than the ESP8266.</li>
            </ul>
          </p>
          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session3;