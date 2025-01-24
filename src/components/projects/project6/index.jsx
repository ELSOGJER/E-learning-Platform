import React, { useState } from 'react'
import Header from '../../header'
import Footer from '../../footer'
import CodeEditor from '@uiw/react-textarea-code-editor';
// import './style.css';
import image1 from './images/pic1.jpg';
import image2 from './images/pic2.jpg'
import image3 from './images/pic3.png'
import image4 from './images/pic4.jpg'



const Project6 = () => {
      const [code, setcode] = useState(`#define MAX98357A_I2S_DOUT  25
#define MAX98357A_I2S_BCLK 27
#define MAX98357A_I2S_LRC  26
Audio audio;
      `)
    const [code2, setcode2] = useState(`audio.setPinout(MAX98357A_I2S_BCLK, MAX98357A_I2S_LRC, MAX98357A_I2S_DOUT);
    audio.setVolume(100);
    `)
      const [code3, setcode3]=useState(`void loop()
      {
       audio.loop();
         }`)
    const [code4, setcode4]=useState(`#include "Arduino.h"

    #include "WiFi.h"
    
    #include "Audio.h"
    
    #define I2S_DOUT     25
    
    #define I2S_BCLK      27
    
    #define I2S_LRC        26
    
    Audio audio;
    
    String ssid =    "Sourav";
    
    String password = "87654321";
    
    void setup() {
    
      WiFi.disconnect();
    
      WiFi.mode(WIFI_STA);
    
      WiFi.begin(ssid.c_str(), password.c_str());
    
      while (WiFi.status() != WL_CONNECTED)
    
      delay(1500);
    
      audio.setPinout(I2S_BCLK, I2S_LRC, I2S_DOUT);
    
      audio.setVolume(100);
    
      audio.connecttohost("http://vis.media-ice.musicradio.com/CapitalMP3");
    
    }
    
    void loop()
    
    {
    
      audio.loop();
    
    }
    `)
    const [code5, setcode5]=useState(`#include "Arduino.h"
    #include "WiFi.h"
    #include "Audio.h"`)
    const [code6, setcode6]=useState(`void setup() {
      Serial.begin(9600);
      Serial2.begin(9600);
      delay(3000);
      test_sim800_module();
      send_SMS();
    }
    void loop() {
      updateSerial();
    }
    void test_sim800_module()
    {
      Serial2.println("AT");
      updateSerial();
      Serial.println();
      Serial2.println("AT+CSQ");
      updateSerial();
      Serial2.println("AT+CCID");
      updateSerial();
      Serial2.println("AT+CREG?");
      updateSerial();
      Serial2.println("ATI");
      updateSerial();
      Serial2.println("AT+CBC");
      updateSerial();
    }
    void updateSerial()
    {
      delay(500);
      while (Serial.available())
      {
        Serial2.write(Serial.read());//Forward what Serial received to Software Serial Port
      }
      while (Serial2.available())
      {
        Serial.write(Serial2.read());//Forward what Software Serial received to Serial Port
      }
    }
    void send_SMS()
    {
      Serial2.println("AT+CMGF=1"); // Configuring TEXT mode
      updateSerial();
      Serial2.println("AT+CMGS=\"+919804049270\"");//change ZZ with country code and xxxxxxxxxxx with phone number to sms
      updateSerial();
      Serial2.print("Circuit Digest"); //text content
      updateSerial();
    Serial.println();
      Serial.println("Message Sent");
      Serial2.write(26);
    }`)
    
  return (
    <div>
      <div className="sessions">
          <Header />
      </div>


      <div className="container marging__">
        
      <h2 class="border-bottom border-2">ESP32 Based Internet Radio using MAX98357A I2S Amplifier Board</h2>
        <div class="text-center"><img src={image1} alt="" class="w-50 mt-3 mb-3"/></div>
        <p class="fw-normal h5">Analog Radios are getting extinct in this digital world since everything, from movies to songs is being directly streamed from the Internet today. Let’s see how an Internet radio can be made by leveraging some simple digital electronics, coding, and with an active Internet connection. Now, those who are following us regularly might already know that we have built a Raspberry Pi based Internet Radio previously, but in this tutorial, we will further simplify it by just using an ESP32.</p>
        <p class="fw-normal h5">Internet Radio, also known as streaming, web, IP, or online radio is generally used to telecast messages, music, discussions, etc. in the form of audio. In other words, it is a digital audio service transmitted via the Internet. However, broadcasting on the Internet or web is usually referred to as webcasting as no transmission happens broadly through wireless means.</p>
        <p class="fw-normal h5">The Internet radio can be created as a stand-alone device that is running through the internet, or as software running through a computer that is connected with the internet. Here, we will make a stand-alone device that will be connected to the Wi-Fi, access the internet, and finally play the audio. To build our ESP32 web radio, we have chosen the ESP32 development board (obviously) and the MAX98357A I2S Amplifier. If you are looking to build a simple FM Radio that can work offline, then you should check the linked article.</p>
        <h3>Components Required to build ESP32 Web Radio</h3>
        <p class="fw-normal h5">You will need the following components to build our Internet radio using ESP32. Most of the parts should be available easily.</p>
         <ol class="fw-normal h5">
            <li>ESP32 Devkit</li>
            <li>MAX98357A</li>
            <li>8-Ohms Speaker with a rating of 0.5W to 1W rating.</li>
            <li>USB Cable</li>
            <li>5V 1A charger</li>
            <li>Active internet connection</li>
         </ol>
         <h3>ESP32 and I2S Communication</h3>
         <p class="fw-normal h5">As most of us already know, ESP32 is a very low-cost, low-power system on chip microcontrollers that has integrated Wi-Fi and dual-mode Bluetooth. We have previously built many ESP32 projects, you can check them out if interested. However, we are not going to use the Bluetooth functionality of ESP32 here, but still, we have selected ESP32 for the three reasons listed below.</p>
         <ol class="fw-normal h5">
            <li>It has Wi-Fi Module</li>
            <li>It is Low cost</li>
            <li>It has I2S peripheral support.</li>
         </ol>
         <p class="fw-normal h5">Now, why is I2S important?

           <br/> The <span class="fw-bold">Integrated Inter-IC Sound Bus (I2S)</span> is a serial bus interface standard that is used for connecting digital audio devices. It is made by Philips Semiconductor. This interface is most commonly used by audio ADC and DAC components.
            
          <br/>  Since for running a radio we need to use a Speaker and need to produce analog output, we need some sort of Digital-to-Analog converter. Here comes the interesting part of the project. The MAX98357A module. It offers a Digital Class D amplifier that uses the Digital Audio Interface or I2S to communicate with microcontroller units.
            
           <br/> The benefit of MAX98357A I2S module is listed below:</p>
           <ol class="fw-normal h5">
            <li>It is 92% efficient</li>
            <li>Click and Pop-up noise reduction</li>
            <li>Short circuit and thermal protection</li>
            <li>Supports Left, Right or (Left/2 + Right/2) Output</li>
            <li>Works from 2.5V to 5.5V.</li>
            <li>Could provide 3.2W output Power into 4 Ohms load at 5V</li>
         </ol>
         <p class="fw-normal h5">The MAX98357A I2S module that we have used in this project is shown below.</p>
         <div class="text-center"><img src={image2} alt="" class="w-25 mt-3 mb-3"/></div>
         <h3>Circuit Diagram to Interface MAX98357A I2S Module with ESP32</h3>
         <div class="text-center"><img src={image3} alt="" class="w-75 mt-3 mb-3"/></div>
        <p class="fw-normal h5">The schematic is simple. MAX98357 connection is given in the below table.</p>
        <table class="table table-light w-75 m-auto">
            <tr class="fw-bold">
                <td>Module Pin</td>
                <td>Connection</td>
                <td>Description</td>
            </tr>
           <tr>
            <td>LRC</td>
            <td>IO26</td>
            <td>Left Right Clock</td>
           </tr>
           <tr>
            <td>BCLK</td>
            <td>IO27</td>
            <td>Bit Clock Input</td>
           </tr>
           <tr>
            <td>DIN</td>
            <td>IO25</td>
            <td>Didtal Data Input</td>
           </tr>
           <tr>
            <td>GAIN</td>
            <td>GND</td>
            <td>Gain Select. If connected with VDD, Gain is 6dB, If GND, Gain 12dB.</td>
           </tr>
           <tr>
            <td>SD</td>
            <td>--</td>
            <td>Shutdown. To activate, pull it low.</td>
           </tr>
           <tr>
            <td>GND</td>
            <td>GND</td>
            <td>Supply Ground</td>
           </tr>
           <tr>
            <td>VIN</td>
            <td>5V</td>
            <td>Voltage Input</td>
           </tr>

        </table>
        <h3>Internet Radio Code for ESP32</h3>
        <p class="fw-normal h5">Well, this project uses the ESP32-audioI2S library that is available on GitHub. Before we get into the code, make sure you download the library from the below link and add it to Arduino IDE.</p>
         <p class="fw-normal h5">The full code is provided at the bottom of this page, you can directly copy and use the code, but if you want its explanation, then read further. 

           <br/> First, the libraries required for the project are included, as shown below.</p>
           <div class="text-center">
           <CodeEditor onChange={(e)=> setcode5(e.target.value)} value={code5} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "30px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "20vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
        </div>
        <p class="fw-normal h5">Then, the pinouts of the MAX98357A are specified. If you are using the exact same module shown above you can leave it as shown below. </p>
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
                        height: "20vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
            
        </div>
        <p class="fw-normal h5">Put your Wi-Fi SSID and Password, this allows the ESP32 to connect to the internet. </p>
           <div class="text-center">
            <textarea name="" id="" cols="50" rows="3" class="bg-light w-100">
                String ssid = "Your User Id";
                String password = "Your Password";
            </textarea>
        </div>
        <p class="fw-normal h5">In the setup, the WiFi password and SSID are being set, and the WiFi is started. After the Wi-Fi is connected, the Audio Pinouts are selected, the volume is also set to the maximum.</p>
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
                        height: "20vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
        </div>
        <p class="fw-normal h5">Set the streaming URL here, you can choose any streaming URL of your choice, you can also introduce a potentiometer to switch between multiple streaming channels if needed. </p>
        <div >
         <textarea name="" id="" cols="50" rows="2" >
            audio.connecttohost("http://vis.media-ice.musicradio.com/CapitalMP3");
         </textarea>
     </div>
        <p class="fw-normal h5">After all of this, the audio is played continuously in the void loop using the below code. </p>
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
                        height: "20vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
     </div>
     <h3>Testing our ESP32 Internet Radio Player</h3>
     <p class="fw-normal h5">The circuit is connected properly as per the schematic and connected with the Wi-Fi. As soon as the set-up is powered it connects to the internet and starts streaming the audio from the URL mentioned in the program.</p>

     <div class="text-center"><img src={image4} alt="" class="w-50 mt-3 mb-3"/></div>
     <p class="fw-normal h5">I also found that the audio is quite clear and very usable without any additional amplifiers in between. You can check out the video below that demonstrates the complete project to test the audio quality yourself.</p>
     <p class="fw-normal h5">Hope you enjoyed this <span class="fw-bold">ESP32 Radio project</span> and would build one on your own. Again, this is a very simple set-up and you can improvise it with a display and some control knob to switching between multiple radio stations and even control the volume just like a traditional radio. If you have any questions or ideas, feel free to drop them in the comment section below.</p>
      <h3>Code</h3>
     <div class="text-center">
     <CodeEditor onChange={(e)=> setcode4(e.target.value)} value={code4} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "30px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "90vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>



    </div>
    <h3>Video</h3>
    <div class="text-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uD1tqXeporU" title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>




    </div>
          

      


      <div className="session-footer">
              <Footer />
      </div>
    </div>
    
    )
    }

    export default Project6;