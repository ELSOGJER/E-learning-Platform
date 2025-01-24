import React, { useState } from 'react';
import './style.css'
import Header from '../../header';
import img5 from "./images/Picture5.jpg";
import img6 from "./images/Picture6.jpg";
import img__ from "./images/Picture.jpg";
import img7 from "./images/Picture7.jpg";
import img8 from "./images/Picture8.jpg";
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const Session5 = () => {
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


        <div class=" content offset-3 session5">
            <h3>ESP32 DEVKIT DOIT</h3>  
                <img src={img5} alt="" /> 
            <p style={{fontSize:"18px" , margin:" 30px 20px 20px "}}>we’ll be using the ESP32 DEVKIT DOIT board as a reference. If you have a different board, don’t worry. The information on this page is also compatible with other ESP32 development boards.</p>

            <p style={{fontSize:"18px" , margin:" 10px 20px 20px "}}>
            The picture below shows the ESP32 DEVKIT DOIT V1 board, version with 36 GPIO pins.
            </p>
            <img src={img6} alt="" />

            <h3>Specifications – ESP32 DEVKIT V1 DOIT</h3>
            <p style={{fontSize:"18px" , margin:" 10px 20px 20px "}}>The following table shows a summary of the ESP32 DEVKIT V1 DOIT board features and specifications:</p>

            <table>
                <tr>
                    <th className='one'>Number of cores</th>
                    <th>2 (dual core)</th>
                </tr>
                <tr>
                <th className='one'>Wi-Fi</th>
                    <th>2.4 GHz up to 150 Mbits/s</th>
                </tr>
                <tr>
                <th className='one'>Wi-Fi</th>
                    <th>2.4 GHz up to 150 Mbits/s</th>
                </tr>
                <tr>
                <th className='one'>Bluetooth</th>
                    <th>BLE (Bluetooth Low Energy) and legacy Bluetooth</th>
                </tr>
                <tr>
                <th className='one'>Architecture</th>
                    <th>32 bits</th>
                </tr>
                <tr>
                <th className='one'>Clock frequency</th>
                    <th>Up to 240 MHz</th>
                </tr>
                <tr>
                <th className='one'>RAM</th>
                    <th>512 KB</th>
                </tr>
                <tr>
                <th className='one'>Pins</th>
                    <th>30, 36, or 38 (depending on the model)</th>
                </tr>
                <tr>
                <th className='one'>Peripherals</th>
                    <th>Capacitive touch, ADC (analog to digital converter), DAC (digital to analog converter), I2C (Inter-Integrated Circuit), UART (universal asynchronous receiver/transmitter), CAN 2.0 (Controller Area Netwokr), SPI (Serial Peripheral Interface), I2S (Integrated Inter-IC Sound), RMII (Reduced Media-Independent Interface), PWM (pulse width modulation), and more.</th>
                </tr>
                <tr>
                <th className='one'>Built-in buttons</th>
                    <th>RESET and BOOT buttons</th>
                </tr>
                <tr>
                <th className='one'>Built-in LEDs</th>
                    <th>built-in blue LED connected to GPIO2; built-in red LED that shows the board is being powered</th>
                </tr>
                <tr>
                <th className='one'>USB to UART bridge</th>
                    <th>CP2102</th>
                </tr>
            </table>

            <p style={{fontSize:"18px" , margin:" 40px 20px 20px "}}>This particular ESP32 board comes with 36 pins, 18 on each side. The number of available GPIOs depends on your board model.</p>
            <img src={img__} alt="" />
            <div style={{fontSize:"18px" , margin:" 10px 20px 20px"}}>
                <p>It comes with a microUSB interface that you can use to connect the board to your computer to upload code or apply power.</p>
            
                <p>It uses the CP2102 chip (USB to UART) to communicate with your computer via a COM port using a serial interface. Another popular chip is the CH340. Check what’s the USB to UART chip converter on your board because you’ll need to install the required drivers so that your computer can communicate with the board (more information about this later in this guide).</p>

                <p>This board also comes with a RESET button (may be labeled EN) to restart the board and a BOOT button to put the board in flashing mode (available to receive code). Note that some boards may not have a BOOT button.</p>

                <p>It also comes with a built-in blue LED that is internally connected to GPIO 2. This LED is useful for debugging to give some sort of visual physical output. There’s also a red LED that lights up when you provide power to the board.</p>
            </div>
            <img src={img7} alt="" />
            <h3>ESP32 GPIOs Pinout Guide</h3>

            <p>The ESP32 chip comes with 48 pins with multiple functions. Not all pins are exposed in all ESP32 development boards, and some pins should not be used. The ESP32 DEVKIT V1 DOIT board usually comes with 36 exposed GPIOs that you can use to connect peripherals.</p>

            <p>Power Pins</p>
            <p>Usually, all boards come with power pins: 3V3, GND, and VIN. You can use these pins to power the board (if you’re not providing power through the USB port), or to get power for other peripherals (if you’re powering the board using the USB port).</p>

            <p>General Purpose Input Output Pins (GPIOS)</p>
            <p>Almost all GPIOs have a number assigned and that’s how you should refer to them—by their number.</p>

            <p>With the ESP32 you can decide which pins are UART, I2C, or SPI – you just need to set that on the code. This is possible due to the ESP32 chip’s multiplexing feature that allows to assign multiple functions to the same pin.
            If you don’t set them on the code, the pins will be configured by default as shown in the figure below (the pin location can change depending on the manufacturer). Additionally, there are pins with specific features that make them suitable or not for a particular project.
            </p>
            <img src={img8} alt="" />


          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session5;