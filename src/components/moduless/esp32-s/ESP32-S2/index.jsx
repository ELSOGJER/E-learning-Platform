import React from 'react'
import Header from '../../../header'
import Footer from '../../../footer'
import './style.css'
import img1 from "./images/esp32-s2-banner-new-1.jpg"
import img2 from "./images/pic2.png"
import img3 from "./images/pic3.png"
import img4 from "./images/pic4.png"
import { Link } from 'react-router-dom'

const Esp3S2 = () => {
  return (
    <div>
        <div className="Headering">
            <Header/>
        </div>
        <img src={img1} alt="" className='editing__imging'/>
        <div className="container esp32s2">
            <h2>ESP32-S2 Features</h2>
            <p>ESP32-S2 is a highly integrated, low-power, single-core Wi-Fi Microcontroller SoC, designed to be secure and cost-effective, with a high performance and a rich set of IO capabilities.</p>
            <div className="flex_container">
                <div className="esp32_s2_card">
                    <div className="img_info">
                        <img src={img2} alt="" />
                        <h3>Unparalleled Security for Your Connected Devices</h3>
                    </div>
                    <p>
                        RSA-3072-based secure boot <br/>
                        AES-128/192/256-XTS-based flash encryption<br/>
                        Protected private key and device secrets from software access<br/>
                        Cryptographic accelerators for enhanced performance<br/>
                        Protection against physical fault injection attacks<br/>
                    </p>
                </div>

                <div className="esp32_s2_card">
                    <div className="img_info">
                        <img src={img3} alt="" />
                        <h3>Display, Touch Capabilities and Rich IO</h3>
                    </div>
                    <p>
                        ESP32-S2 integrates a rich set of peripherals, with 43 programmable GPIOs which can be flexibly     configured to provide USB OTG, LCD interface, camera interface, SPI, I2S, UART, ADC, DAC and other  common functionality. With LCD interface and 14 configurable capacitive touch GPIOs, ESP32-S2    provides the optimal HMI solution for touchscreen and touchpad-based devices.
                    </p>
                </div>

                <div className="esp32_s2_card">
                    <div className="img_info">
                        <img src={img4} alt="" />
                        <h3>Solid Wi-Fi Performance at Extreme Temperatures</h3>
                    </div>
                    <p>
                    ESP32-S2’s operating temperature ranges from -40 to +105 degrees Celsius, thus facilitating a variety of industrial, consumer and lighting applications.
                    </p>
                </div>
   
            </div>
            <h3 className='last_page_click'>If you need learn more follow this link <Link to="/courses">Click Here</Link></h3>
        </div>

        <div className="footer__session">
            <Footer/>
        </div>
    </div>
  )
}

export default Esp3S2