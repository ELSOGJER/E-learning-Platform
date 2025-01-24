import React, { useState } from 'react'
import Header from '../../header'
import Footer from '../../footer'
import CodeEditor from '@uiw/react-textarea-code-editor';
// import './style.css';
import image1 from './images/pic1.jpg';
import image2 from './images/pic2.png'
import image3 from './images/pic3.jpg'
import image4 from './images/pic4.jpg'
import image5 from './images/pic5.jpg'



const Project5 = () => {
      const [code, setcode] = useState(`void loop() {
        if (SerialBT.available()) {
        if (c == '1') { //if the data is '1'
        digitalWrite(2, HIGH); //turn LED on 4
        SerialBT.println("LED on"); //send message back to app }
         if (c == '0') {
         //if the data is '0' digitalWrite(2, LOW); //turn LED off
        SerialBT.println("LED off"); //send message back to app
        } } delay(20); //delay for stability
        }`)
      const [code2, setcode2] = useState(`void setup() {
        SerialBT.begin("ESP32 LED"); //set the name of the Bluetooth module
        pinMode(2, OUTPUT); //set GPIO 2 as output
      }`)
      const [code3, setcode3] = useState(`#include {"<BluetoothSerial.h></BluetoothSerial.h>"}
      BluetoothSerial SerialBT;`)
      
    
  return (
    <div>
      <div className="sessions">
          <Header />
      </div>


      <div className="container marging__">
      <h1 class="border-bottom border-2"> Getting Started with Bluetooth Classic on ESP32</h1>
        <div class="text-center"><img src={image1} alt="" class="w-50 mt-3 mb-3"/></div>
        <p class="fw-normal h5">The <span class="fw-bold">ESP32</span> is a powerful, low-cost microcontroller that is widely used in the development of<span class="fw-bold">IoT projects</span>. It is popular for its high processing power, low energy consumption, and built-in Wi-Fi and Bluetooth capabilities.</p>
        <p class="fw-normal h5"><span class="fw-bold">Bluetooth Classic </span>  is a wireless communication protocol that is used for connecting devices over short distances. It has been around for a long time and is commonly used in devices such as smartphones, laptops, and audio equipment</p>
        <p class="fw-normal h5">Using the ESP32's internal Bluetooth Classic module can be advantageous because it allows developers to easily incorporate Bluetooth Classic functionality into their projects without the need for an external module. This can simplify the design process and reduce costs, while still providing a reliable and high-performing Bluetooth Classic connection. Additionally, since the <span class="fw-bold">ESP32</span> is a versatile microcontroller, it can be used for a wide range of IoT projects that require Bluetooth connectivity.</p>
        <div class="text-center"><video src="images/esp32-bluetooth-classic.mp4" controls class="w-50"></video></div>
        <h3>Working with the Bluetooth Classic of ESP32</h3>
        <p class="fw-normal h5">The <span class="fw-bold"> ESP32's internal Bluetooth Classic module</span> can be used to communicate with other Bluetooth Classic devices in several ways, including:</p>
        <ul class="fw-normal h5">
            <li><span class="fw-bold">Acting as a Bluetooth Classic server:</span>Acting as a Bluetooth Classic server: The ESP32 can be set up as a server that listens for incoming connection requests from other Bluetooth Classic devices. Once a connection is established, data can be exchanged between the devices using the SPP or other profiles.</li>
            <li><span class="fw-bold">Acting as a Bluetooth Classic client: </span>Acting as a Bluetooth Classic client: The ESP32 can also be set up as a client that initiates connections to other Bluetooth Classic devices. Once a connection is established, the ESP32 can send and receive data to and from the other device.</li>
            <li><span class="fw-bold">Bridging Bluetooth and Wi-Fi:  </span>Bridging Bluetooth and Wi-Fi: The ESP32's internal Bluetooth Classic module can be used in conjunction with its Wi-Fi capabilities to create a bridge between Bluetooth and Wi-Fi networks. This allows devices to communicate with each other over Bluetooth, while still being able to connect to the internet and other network resources via Wi-Fi.</li>
        </ul>
        <p class="fw-normal h5">First, let’s check out the materials which we will require: -</p>
        <ul class="fw-normal h5">
            <li>ESP32 board</li>
            <li>LED</li>
            <li>Resistor (220-ohm recommended)</li>
            <li>Breadboard</li>
            <li>Jumper Wires</li>
        </ul>
        <h3>Circuit Diagram - ESP32 Bluetooth classic with LED</h3>
        <div class="text-center"><img src={image2} alt="" class="w-50 mt-3 mb-3"/></div>
        <ul class="fw-normal h5">
            <li>Connect the long leg of the LED (positive) to one of the GPIO pins of the ESP32. For example, you can connect it to GPIO 12.</li>
            <li>Connect the short leg of the LED (negative) to the breadboard.</li>
            <li>Connect one end of the resistor to the short leg of the LED and the other end to the ground (GND) pin on the ESP32.</li>
        </ul>
        <h3>Setting up the Environment</h3>
        <p class="fw-normal h5">The Arduino IDE provides a user-friendly interface for beginners and advanced users alike, allowing you to write and upload code to the ESP32 without requiring advanced knowledge of programming languages.</p>
        <h3>Programming the ESP32</h3>
        <ul class="fw-normal h5">
            <li>Connect the ESP32 to your computer using a USB cable.</li>
            <li>Open the Arduino IDE, select the appropriate board and port, and create a new sketch.</li>
            <li>Copy the code from Code Section</li>
            <li>Upload the Code to the board</li>
        </ul>
        <h3>Arduino Code for ESP32 Bluetooth Classic Interfacing with LED</h3>
        <div class="text-center">
              <CodeEditor onChange={(e)=> setcode(e.target.value)} value={code} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "30px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "40vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>


        </div>
        <p class="fw-normal h5">This code includes the BluetoothSerial library, which provides support for Bluetooth Classic communication on the ESP32. The BluetoothSerial object is then created to handle Bluetooth communication.</p>
        <div class="text-center">
            
              <CodeEditor onChange={(e)=> setcode2(e.target.value)} value={code2} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "30px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "17vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>


            
        </div>
        <p  class="fw-normal h5">This is the setup() function that runs once when the ESP32 board is powered on or reset. Here, we are using the SerialBT.begin() function to start the Bluetooth Classic communication and set the name of the Bluetooth module to "ESP32". We are also using the pinMode() function to set GPIO 2 as an output pin, which means we can use it to send signals to the LED.</p>
        <div class="text-center">     
            <CodeEditor onChange={(e)=> setcode3(e.target.value)} value={code3} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "30px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "15vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>

        </div>
        <p  class="fw-normal h5">This is the loop() function that runs continuously while the ESP32 board is powered on. It first checks if there is any data available to be read from the Bluetooth module using the SerialBT.available() function. If there is data available, it is read using the SerialBT.read() function and stored in the c variable. If the data is '1', the LED is turned on using the digitalWrite() function and a message "LED on" is sent back to the app using the SerialBT.println() function. Similarly, if the data is '0', the LED is turned off and a message "LED off" is sent back to the app. The delay() function is used to ensure stability in the program.</p>
        <h3>How to connect Bluetooth Serial Terminal App to ESP32 using Bluetooth Classic?</h3>
        <ul  class="fw-normal h5"><li>Download the Bluetooth serial terminal app from play store.</li></ul>
        <div class="text-center"><img src={image3} alt="" class="w-50 mt-3 mb-3"/></div>
        <ul  class="fw-normal h5"><li>Open the Bluetooth serial terminal app on your smartphone or for nearby Bluetooth devices. Connect to the ESP32 board by selecting it from the list of available devices.</li></ul>
        <div class="text-center"><img src={image4} alt="" class="w-50 mt-3 mb-3"/></div>
        <ul  class="fw-normal h5"><li>Once connected, you can send commands to the ESP32 board by typing '1' to turn the LED on or '0' to turn it off in the Bluetooth serial terminal app. The LED should turn on and off accordingly</li></ul>
        <div class="text-center"><img src={image5} alt="" class="w-50 mt-3 mb-3"/></div>

        <h3>Conclusion</h3>
        <p class="fw-normal h5">In this blog, we provided a comprehensive guide to using the ESP32 for Bluetooth communication. We covered how you can use ESP32 Bluetooth classis to control an LED. Make sure to create some fun projects with this and if you have any doubts let us know in the comments below</p>


      </div>
          

      


      <div className="session-footer">
              <Footer />
      </div>
    </div>
    
    )
    }

    export default Project5;