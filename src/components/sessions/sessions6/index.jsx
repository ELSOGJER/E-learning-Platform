import React, { useState } from 'react';
import './style.css'
import Header from '../../header';
import img1 from "./images/Picture1.png";
import img2 from "./images/Picture2.png";
import img3 from "./images/Picture3.png";
import img4 from "./images/Picture4.png";
import img5 from "./images/Picture5.png";
import img6 from "./images/Picture6.png";
import img7 from "./images/Picture7.png";
import img8 from "./images/Picture8.png";
import img9 from "./images/Picture9.png";
import img10 from "./images/Picture10.png";
import img11 from "./images/Picture11.png";
import img12 from "./images/Picture12.png";
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
import { Link } from 'react-router-dom';
const Session6 = () => {
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


        <div class=" content offset-3 session6" >
            <h3>How to Program the ESP32?</h3>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>The ESP32 can be programmed using different firmware and programming languages. You can use:</p>
            <p style={{fontSize:"18px" , margin:" 10px 30px 20px "}}>
            •	Arduino C/C++ using the Arduino core for the ESP32<br/>
            •	Micropython<br/>
            •	JavaScript<br/>
            •	…<br/>
            Our preferred method to program the ESP32 is with C/C++ “Arduino programming language”
            </p>

            <h3>Programming ESP32 with Arduino IDE</h3>
            <img src={img1} alt="" className='margining__'/>
            <h3>Installing Arduino IDE</h3>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>To run Arduino IDE, you need JAVA installed on your computer. If you don’t, go to the following website to download and install the latest version:<br/> <Link to="http://java.com/download">• http://java.com/download</Link>
            </p>
            <h3>Downloading Arduino IDE</h3>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>To download the Arduino IDE, visit the following URL:<br/>
                <Link to="https://www.arduino.cc/en/Main/Software"> • https://www.arduino.cc/en/Main/Software</Link>
            </p>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>Don’t install the 2.0 version. At the time of writing this tutorial, we recommend using the legacy version (1.8.19) with the ESP32. While version 2 works well with Arduino, there are still some bugs and some features that are not supported yet for the ESP32.
            Scroll down until you find the legacy version section.
            </p>
            <img src={img2} alt="" className='margining__'/>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>Select your operating system and download the software. For Windows, we recommend downloading the “Windows ZIP file“. </p>

            <h3>Running Arduino IDE</h3>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>Grab the folder you’ve just downloaded and unzip it. Run the executable file called arduino.exe (highlighted below).</p>
            <img src={img3} alt="" className='margining__'/>
            <p style={{fontSize:"18px" , margin:" 30px 10px" , lineHeight: "1.8"}}>The Arduino IDE window should open.</p>
            <img src={img4} alt="" className='margining__'/>
            <h3>Installing the ESP32 in Arduino IDE</h3>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>To be able to program the ESP32 using Arduino IDE, you need to add support for the ESP32 boards. Follow the next steps:
                1.	Go to File {">>"} Preferences.
            </p>
            <img src={img5} alt="" className='margining__'/>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>2.	Enter the following into the “Additional Board Manager URLs” field. This will add support for ESP32 and ESP8266 boards as well.

           <Link to=" https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json"> https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json</Link>, <Link to="http://arduino.esp8266.com/stable/package_esp8266com_index.json">http://arduino.esp8266.com/stable/package_esp8266com_index.json </Link> See the figure below. Then, click the “OK” button.
            </p>
            <img src={img6} alt="" className='margining__'/>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>3.	Open the Boards Manager. Go to Tools {'>'} Board {'>'} Boards Manager…
                4.	Search for ESP32 and install the “ESP32 by Espressif Systems“:
                That’s it. It will be installed after a few seconds.
            </p>
            <img src={img7} alt="" className='margining__'/>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>After this, restart your Arduino IDE.
            Then, go to Tools {'>'} Board and check that you have ESP32 boards available.
            </p>
            <img src={img8} alt="" className='margining__'/>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>Now, you’re ready to start programming your ESP32 using Arduino IDE.</p>

            <h3>ESP32 Examples</h3>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>In your Arduino IDE, you can find multiple examples for the ESP32. First, make sure you have an ESP32 board selected in Tools {'>'} Board. Then, simply go to File {'>'} Examples and check out the examples under the ESP32 section.</p>
            <h3>Update the ESP32 Core in Arduino IDE</h3>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>Once in a while, it’s a good idea to check if you have the latest version of the ESP32 boards add-on installed.</p>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>You just need to go to Tools {'>'}  Board {'>'} Boards Manager, search for ESP32, and check the version that you have installed. If there is a more recent version available, select that version to install it.</p>
            <h3>Upload Code to the ESP32 using Arduino IDE</h3>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>To show you how to upload code to your ESP32 board, we’ll try a simple example available in the Arduino IDE examples for the ESP32.</p>
            <p style={{fontSize:"18px" , margin:" 10px 10px 20px " , lineHeight: "1.8"}}>
            First, make sure you have an ESP32 selected in Tools {'>'}  Board. Then, go to File {'>'}  Examples {'>'}  WiFi {'>'}  WiFiScan.
            This will load a sketch that scans Wi-Fi networks within the range of your ESP32 board.

            </p>
            <img src={img9} alt="" className='margining__'/>
            <p>Connect your ESP32 development board to your computer using a USB cable. If you have an ESP32 DEVKIT DOIT board, the built-in red LED will turn on. This indicates the board is receiving power.</p>
            <p>
            Important: you must use a USB cable with data wires. Some USB cables from chargers or power banks are power only and they don’t transfer data—these won’t work.
            </p>
            <p>Now, follow the next steps to upload the code.</p>
            <p>1{')'} Go to Tools {'>'} Board, scroll down to the ESP32 section and select the name of your ESP32 board. In my case, it’s the DOIT ESP32 DEVKIT V1 board.
            2{')'} Go to Tools {'>'} Port and select a COM port available. If the COM port is grayed out, this means you don’t have the required USB drivers. Check the section Installing USB Drivers before proceeding.
            </p>
            <img src={img10} alt="" className='margining__'/>
            <p>3{') '}Press the upload button.</p>
            <p>Some boards will automatically go into flashing mode and the code will be successfully uploaded straight away.</p>
            <p>Other boards don’t go into flashing mode automatically, so you may end up getting the following error.<br/>
            Failed to connect to ESP32: Timed out... Connecting...<br/>
            Or something like:<br/>
            A fatal error occurred: Failed to connect to ESP32: Wrong boot mode detected (0x13)! The chip needs to be in download mode.<br/>
            This means the ESP32 was not in flashing mode when you tried to upload the code. In this situation, you should long press the board BOOT button, when you start seeing the “Connecting….” message on the debugging window.
            Now, the code should be successfully uploaded to the board. You should get a “Done uploading “message”.<br/>
            </p>
            <img src={img11} alt="" className='margining__'/>
            <h3>Esp Examples</h3>
            <img src={img12} alt="" className='margining__'/>

            <div className="session-footer">
            <Footer />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Session6;