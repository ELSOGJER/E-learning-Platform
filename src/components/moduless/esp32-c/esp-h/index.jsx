import React from 'react'
import Header from '../../../header'
import Footer from '../../../footer'
import './style.css'
import img1 from "./images/pic1.png"
import img2 from "./images/pic2.png"
import img3 from "./images/pic3.png"
import img4 from "./images/pic4.png"
import img5 from "./images/pic5.png"
import { Link } from 'react-router-dom'

const Esp3CH= () => {
  return (
    <div>
        <div className="Headering">
            <Header/>
        </div>
        <img src={img1} alt="" className='editing__imging'/>
        <div className="container esp32s2">
            <div className="upper__esp23c2">
                <p>
                ESP32-C2 is a low-cost, Wi-Fi 4 & Bluetooth 5 (LE) chip. Its unique design makes the chip smaller and yet more powerful than ESP8266. ESP32-C2 is built around a RISC-V 32-bit, single-core processor, with 272 KB of SRAM (16 KB dedicated to cache) and 576 KB of ROM. ESP32-C2 has been designed to target simple, high-volume, and low-data-rate IoT applications, such as smart plugs and smart light bulbs. ESP32-C2 offers easy and robust wireless connectivity, which makes it the go-to solution for developing simple, user-friendly and reliable smart-home devices. Besides, ESP32-C2 continues the tradition of Espressif’s excellent security standards, having such features as secure boot and flash encryption, while also providing hardware root-of-trust for any application.
                </p>
            </div>

            <div className="flex_container_esp32_c2">
            <div className="esp32_c3_card">
                    <div className="img_info">
                        <img src={img2} alt="" />
                        <h3>Integrated IEEE 802.15.4</h3>
                    </div>
                    <p>
                    ESP32-H2 combines IEEE 802.15.4 radio connectivity, which is vital to mesh architectures with low power consumption. It also makes the Thread and Zigbee protocols available, thus addressing a variety of cases in application development. ESP32-H2 has been certified as a “Zigbee-Compliant Platform” and has officially become a “Thread-Certified 1.3.0 Component”.
                    </p>
            </div>

            <div className="esp32_c3_card">
                    <div className="img_info">
                        <img src={img3} alt="" />
                        <h3>Enabling Matter</h3>
                    </div>
                    <p>
                    ESP32-H2’s concurrent support for IEEE 802.15.4 and Bluetooth LE enables customers to build Matter-compliant Thread end-point devices which ensure interoperability among smart-home devices from different systems. By combining ESP32-H2 and another Espressif Wi-Fi SoC, a Thread border router or a Matter-Zigbee bridge can be built for connecting Thread or Zigbee devices onto Matter Wi-Fi networks.
                    </p>
            </div>

            <div className="esp32_c3_card">
                    <div className="img_info">
                        <img src={img4} alt="" />
                        <h3>Robust Security</h3>
                    </div>
                    <p>
                    ESP32-H2 can facilitate building securely connected devices through such hardware features as ECC-based secure boot, AES-128/256-XTS-based flash encryption, digital signature with ECDSA support, an HMAC peripheral for identity protection, as well as cryptographic accelerators for improved performance. With such robust security features, all connected devices can be secured at an affordable cost for users' complete peace of mind.
                    </p>
                </div>
                <div className="esp32_c3_card editing__cardh">
                    <div className="img_info">
                        <img src={img5} alt="" />
                        <h3>Software Availability</h3>
                    </div>
                    <p>
                    ESP32-H2 is supported through Espressif’s mature IoT Development Framework (ESP-IDF), so that our customers can benefit from their familiarity with our field-proven platform that already powers millions of connected devices. ESP32-H2 supports a production-ready ESP-Zigbee-SDK to build ready-to-use Standard Home automation devices.
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

export default Esp3CH