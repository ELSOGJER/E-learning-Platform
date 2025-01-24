import React from 'react'
import Header from '../../../header'
import Footer from '../../../footer'
import './style.css'
import img1 from "./images/pic1.jpg"
import img2 from "./images/pic2.png"
import img3 from "./images/pic3.png"
import img4 from "./images/pic4.png"
import img5 from "./images/pic5.png"
import img6 from "./images/pic6.png"
import { Link } from 'react-router-dom'

const Esp3C6 = () => {
  return (
    <div>
        <div className="Headering">
            <Header/>
        </div>
        <img src={img1} alt="" className='editing__imging'/>
        <div className="container esp32s2">
            <div className="upper__esp23c2 deffirent_c6">
                <img src={img2} alt=""/>
                <p>
                ESP32-C2 is a low-cost, Wi-Fi 4 & Bluetooth 5 (LE) chip. Its unique design makes the chip smaller and yet more powerful than ESP8266. ESP32-C2 is built around a RISC-V 32-bit, single-core processor, with 272 KB of SRAM (16 KB dedicated to cache) and 576 KB of ROM. ESP32-C2 has been designed to target simple, high-volume, and low-data-rate IoT applications, such as smart plugs and smart light bulbs. ESP32-C2 offers easy and robust wireless connectivity, which makes it the go-to solution for developing simple, user-friendly and reliable smart-home devices. Besides, ESP32-C2 continues the tradition of Espressif’s excellent security standards, having such features as secure boot and flash encryption, while also providing hardware root-of-trust for any application.
                </p>
            </div>

            <div className="flex_container_esp32_c2">
            <div className="esp32_c3_card">
                    <div className="img_info">
                        <img src={img3} alt="" className='border_red_img'/>
                        <h3>USmall Size, Low Cost</h3>
                    </div>
                    <p>
                    SP32-C2 has a reduced silicon area, as it comes in a 4mm x 4mm QFN package which is smaller than that of ESP8266. Additionally, the ROM code of ESP32-C2 is optimized which -clubbed with 272 KB of built-in SRAM- reduces the need for flash capacity. ESP32-C2 is powered by Espressif's RISC-V 32-bit single-core processor, which enables the use of RISC-V-based open-source toolchains while also reducing any related costs.
                    </p>
            </div>

            <div className="esp32_c3_card">
                    <div className="img_info">
                        <img src={img4} alt="" className='border_red_img'/>
                        <h3>Enhanced RF Performance</h3>
                    </div>
                    <p>
                    ESP32-C2’s unique design and small package have resulted in reduced parasitics and enhanced RF performance. Thus, ESP32-C2 transmits 802.11n MC7 packets (72.2 Mbps) with 18 dBm of output power. Furthermore, ESP32-C2 transmits at the full 20 dBm FCC limit for low data-rates, which maximizes the distance of the device from its connection point. The typical receiver sensitivity of ESP32-C2 is between -97 to -100 dBm for 1 Mbps 802.11b packets, while the receive current is 58 mA.
                    </p>
            </div>

            <div className="esp32_c3_card">
                    <div className="img_info">
                        <img src={img5} alt="" className='border_red_img'/>
                        <h3>Mature Software Support</h3>
                    </div>
                    <p>
                    ESP32-C2 is supported by Espressif's mature, open-source, real-time operating system for embedded IoT devices, ESP-IDF, which has been trusted by users across the whole wide world. Our field-proven ESP-IDF facilitates users to quickly migrate their own original projects to the ESP32-C2 platform. ESP32-C2 also supports working in slave mode, providing Wi-Fi and Bluetooth LE connectivity to other master MCUs through ESP-AT and ESP-Hosted SDK. This mode is especially suitable for developing IoT devices based on a master MCU that requires solid wireless connectivity.
                    </p>
                </div>
                <div className="esp32_c3_card">
                    <div className="img_info">
                        <img src={img6} alt="" className='border_red_img'/>
                        <h3>ESP RainMaker® and Matter</h3>
                    </div>
                    <p>
                    ESP32-C2 is also supported by Espressif’s AIoT Private Cloud platform, ESP RainMaker®, which enables users to easily build their own, cost-effective, Cloud-connected, AIoT products, while also accelerating time-to-market. Moreover, ESP32-C2 supports Matter, a smart-home connectivity protocol that runs on any IP-supporting network stack. With Matter, customers can achieve interoperability among devices from different providers. This way, developers of ESP32-C2-based products will be able to take advantage of the Matter protocol.
                    </p>
                </div>
            </div>
        

        </div>
        

        <div className="footer__session">
            <Footer/>
        </div>
    </div>
  )
}

export default Esp3C6