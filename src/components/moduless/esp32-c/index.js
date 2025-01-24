import React from 'react'
import Header from '../../header';

import img0 from "../images/esp32-c2.jpg";
import img1 from "../images/esp32-c3.jpg";
import img2 from "../images/esp32-c6.png";
import { Link } from 'react-router-dom';
import './style.css'
import Footer from '../../footer';

const ModuleEsp32C = () => {
return (
    <div>
        <Header/>
        <div className='container big big-c'>
            <div className='card-esp'>
                <Link to="/esp32-c2">
                    <div className='image esp-c'>
                        <img src={img0}/>
                    </div>
                    <div className='text'>
                        <h2>Esp32-C2</h2>
                        <p>Small-sized, cost-effective SoC Equip your device with easy and robust wireless connectivity robust wireless connectivity</p>
                    </div>
                </Link>

            </div>
            <div className='card-esp'>
                <Link to="/esp32-c3">
                    <div className='image esp-c '>
                        <img src={img1} />
                    </div>
                    <div className='text'>
                        <h2>Esp32-C3</h2>
                        <p>A cost-effective RISC-V MCU with Wi-Fi and Bluetooth 5 (LE) connectivity for secure IoT applications</p>
                    </div>
                </Link>
            </div>
            <div className='card-esp'>
                <Link to="/esp32-c6">
                    <div className='image esp-c'>
                        <img src={img2}/>
                    </div>
                    <div className='text'>
                        <h2>Esp32-C6</h2>
                        <p>A low-power and cost-effective 2.4 GHz Wi-Fi 6 + Bluetooth 5 (LE) + Thread/Zigbee SoC, for securely connected devices.</p>
                    </div>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
)
}

export default ModuleEsp32C;