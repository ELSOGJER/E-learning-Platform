import React from 'react'
import Header from '../../../header'
import Footer from '../../../footer'
import './style.css'
import img1 from "./images/pic1.jpg"
import img2 from "./images/pic2.png"
// import img3 from "./images/pic3.png"
// import img4 from "./images/pic4.png"
import { Link } from 'react-router-dom'

const Esp3S3 = () => {
  return (
    <div>
        <div className="Headering">
            <Header/>
        </div>
        <img src={img1} alt="" className='editing__imging'/>
        <div className="container esp32s2">
            <h2>ESP32-S3: </h2>
            <p> is a dual-core XTensa LX7 MCU, capable of running at 240 MHz. Apart from its 512 KB of internal SRAM, it also comes with integrated 2.4 GHz, 802.11 b/g/n Wi-Fi and Bluetooth 5 (LE) connectivity that provides long-range support. It has 45 programmable GPIOs and supports a rich set of peripherals. ESP32-S3 supports larger, high-speed octal SPI flash, and PSRAM with configurable data and instruction cache.</p>

            <div className="all__cards_esp">
            <div className="upper__flex">
                <div className="upper_card">
                    <div className="item_support">
                    <div className="container_esp_img">
                        <img src={img2} alt="" />
                    </div>
                    <h3>AI Acceleration Support</h3>
                    <p>ESP32-S3 has additional support for vector instructions in the MCU, which provides acceleration for neural network computing and signal processing workloads. Developers can take advantage of these vector instructions through ESP-DSP and ESP-NN libraries to optimize their applications. ESP-WHO and ESP-Skainet SDKs will also support this acceleration.</p>
                    </div>
                </div>
                <div className="upper_card">
                    <div className="left_card mmmm">
                    <h3>Wi-Fi + Bluetooth 5 (LE)</h3>
                    <p>ESP32-S3 supports a 2.4 GHz Wi-Fi (802.11 b/g/n) with 40 MHz of bandwidth support. The Bluetooth Low Energy subsystem supports long range through Coded PHY and advertisement extension. It also supports higher transmission speed and data throughput, with 2 Mbps PHY. Both Wi-Fi and Bluetooth LE have superior RF performance that is maintained even at high temperatures.</p>
                    </div>
                    <div className="left_card">
                    <h3>AI Acceleration Support</h3>
                    <p>ESP32-S3 has 45 programmable GPIOs, SPI, I2S, I2C, PWM, RMT, ADC and UART, SD/MMC host and TWAITM. In total, 14 GPIOs can be configured as capacitive touch input for HMI applications. Apart from all these peripherals, however, ESP32-S3 is also equipped with an ultra-low-power (ULP) core that supports multiple low-power modes in a variety of such use-cases.</p>
                    </div>
                </div>
            </div>
            <div className="lower__flex">
            
                    <div className="left_card">
                    <h3>Security</h3>
                    <p>ESP32-S3 provides all the necessary security requirements for building securely connected devices, without requiring any external components. It supports AES-XTS-based flash encryption, RSA-based secure boot, digital signature and HMAC. ESP32-S3 also has a “World Controller” peripheral that provides two fully-isolated execution environments, which enables the implementation of a trusted-execution environment or a privilege-separation scheme.</p>
                    </div>
                    <div className="left_card">
                    <h3>Mature Software Support</h3>
                    <p>ESP32-S3 is supported through Espressif’s popular ESP-IDF platform that already powers millions of devices on the market. ESP-IDF comes with rigorous testing, regular updates and an unparalleled support policy. Based on ESP-IDF’s mature software architecture, developers can easily build applications anew or migrate their own applications to the ESP32-S3 platform, and continue working with the trusted ESP-IDF tools and APIs.</p>
                    </div>
            </div>
        </div>
        </div>
        

        <div className="footer__session">
            <Footer/>
        </div>
    </div>
  )
}

export default Esp3S3