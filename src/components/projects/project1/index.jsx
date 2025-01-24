import React, { useState } from 'react'
import Header from '../../header'
import Footer from '../../footer'
import CodeEditor from '@uiw/react-textarea-code-editor';
import './style.css';
import image1 from './images/pic1.webp';
import image2 from './images/pic2.webp'
import image3 from './images/pic3.webp'
import image4 from './images/pic4.webp'
import image5 from './images/pic5.webp'
import image6 from './images/pic6.webp'
import image7 from './images/pic7.webp'
import image8 from './images/pic8.webp'
import image9 from './images/pic9.webp'
import image10 from './images/pic10.webp'
import image11 from './images/pic11.webp'
import image12 from './images/pic12.webp'
import image13 from './images/pic13.webp'
import image14 from './images/pic14.webp'
import image15 from './images/pic15.webp'

const Project1 = () => {
      const [code, setcode] = useState(`/* 
      Rui Santos
      Complete project details at https://RandomNerdTutorials.com/esp32-door-status-telegram/
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files.
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
    */
    
    #include <WiFi.h>
    #include <WiFiClientSecure.h>
    #include <UniversalTelegramBot.h>
    #include <ArduinoJson.h>
    
    // Set GPIOs for LED and reedswitch
    const int reedSwitch = 4;
    const int led = 2; //optional
    
    // Detects whenever the door changed state
    bool changeState = false;
    
    // Holds reedswitch state (1=opened, 0=close)
    bool state;
    String doorState;
    
    // Auxiliary variables (it will only detect changes that are 1500 milliseconds apart)
    unsigned long previousMillis = 0; 
    const long interval = 1500;
    
    const char* ssid = "REPLACE_WITH_YOUR_SSID";
    const char* password = "REPLACE_WITH_YOUR_PASSWORD";
    
    // Initialize Telegram BOT
    #define BOTtoken "XXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"  // your Bot Token (Get from Botfather)
    
    // Use @myidbot to find out the chat ID of an individual or a group
    // Also note that you need to click "start" on a bot before it can
    // message you
    #define CHAT_ID "XXXXXXXXXX"
    
    WiFiClientSecure client;
    UniversalTelegramBot bot(BOTtoken, client);
    
    // Runs whenever the reedswitch changes state
    ICACHE_RAM_ATTR void changeDoorStatus() {
      Serial.println("State changed");
      changeState = true;
    }
    
    void setup() {
      // Serial port for debugging purposes
      Serial.begin(115200);  
    
      // Read the current door state
      pinMode(reedSwitch, INPUT_PULLUP);
      state = digitalRead(reedSwitch);
    
      // Set LED state to match door state
      pinMode(led, OUTPUT);
      digitalWrite(led, !state);
      
      // Set the reedswitch pin as interrupt, assign interrupt function and set CHANGE mode
      attachInterrupt(digitalPinToInterrupt(reedSwitch), changeDoorStatus, CHANGE);
    
      // Connect to Wi-Fi
      WiFi.mode(WIFI_STA);
      WiFi.begin(ssid, password);
      client.setCACert(TELEGRAM_CERTIFICATE_ROOT); // Add root certificate for api.telegram.org
      while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
      }
      Serial.println("");
      Serial.println("WiFi connected");  
    
      bot.sendMessage(CHAT_ID, "Bot started up", "");
    }
    
    void loop() {
      if (changeState){
        unsigned long currentMillis = millis();
        if(currentMillis - previousMillis >= interval) {
          previousMillis = currentMillis;
          // If a state has occured, invert the current door state   
            state = !state;
            if(state) {
              doorState = "closed";
            }
            else{
              doorState = "open";
            }
            digitalWrite(led, !state);
            changeState = false;
            Serial.println(state);
            Serial.println(doorState);
            
            //Send notification
            bot.sendMessage(CHAT_ID, "The door is " + doorState, "");
        }  
      }
    }`)
    const [code2, setcode2] = useState(`ICACHE_RAM_ATTR void changeDoorStatus() {
      Serial.println("State changed");
      changeState = true;
}`)
      const [code3, setcode3]=useState(`WiFi.mode(WIFI_STA);
      WiFi.begin(ssid, password);
      client.setCACert(TELEGRAM_CERTIFICATE_ROOT); // Add root certificate for api.telegram.org
      while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
      }
      Serial.println("");
      Serial.println("WiFi connected"); `)
  return (
    <div>
          <div className="sessions">
              <Header />
          </div>
          <div className="container marging__">
          <h1 class="border-bottom border-2">ESP32 Door Status Monitor with Telegram Notifications</h1>
    <p class="fw-normal h5">In this project, you’re going to monitor the status of a door using an ESP32 board and a magnetic reed switch. You’ll receive a message in your Telegram account whenever the door changes state: opened or closed. As long as you have access to the internet on your smartphone, you’ll be notified no matter where you are. The ESP32 board will be programmed using Arduino IDE.</p>
    <div class="text-center"><img src={image1} alt="" class="w-50 mt-3 mb-3"/></div>
    <h3 class=" ">Project Overview</h3>
    <p class="fw-normal h5">In this project, we’ll create a Telegram Bot that will send messages to your Telegram account whenever a door changes state. To detect the change, we’ll use a magnetic contact switch.
       A magnetic contact switch is basically a reed switch encased in a plastic shell so that you can easily apply it to a door, a window, or a drawer to detect if it is open or closed.</p>
       <div class="text-center"><img src={image2} alt="" class="w-50 mt-3 mb-3"/></div>
       <p class="fw-normal h5">The electrical circuit is closed when a magnet is near the switch—door closed. When the magnet is far away from the switch—door open—the circuit is open. See the figure below.</p>
       <div class="text-center"><img src={image3} alt="" class="w-50 mt-3 mb-3"/></div>
       <p class="fw-normal h5">We can connect the reed switch to an ESP32 GPIO to detect changes in its state.</p>
       <h3>Introducing Telegram</h3>
       <p class="fw-normal h5"><span class="text-primary">Telegram</span> Messenger is a cloud-based instant messaging and voice over IP service. You can easily install it on your smartphone (Android and iPhone) or computer (PC, Mac, and Linux). It is free and without any ads. Telegram allows you to create bots that you can interact with.</p>
       <div class="text-center"><img src={image4} class="mb-3"/></div>
       <p class="fw-light h5">“Bots are third-party applications that run inside Telegram. Users can interact with bots by sending them messages, commands, and inline requests. You control your bots using HTTPS requests to Telegram Bot API“.</p>
       <p class="fw-normal h5">The ESP32 will interact with the Telegram bot to send messages to your Telegram account. Whenever the door changes state, you’ll receive a notification on your smartphone (as long as you have access to the internet).</p>
       <h3>Creating a Telegram Bot</h3>
       <p class="fw-normal h5">Go to Google Play or App Store, download, and install <span class="fw-bold">Telegram</span></p>
       <div class="text-center"><img src={image5} alt=""/></div>
       <p class="fw-normal h5">Open Telegram and follow the next steps to create a Telegram Bot. First, search for <span class="fw-bold">“botfather”</span> and click the BotFather as shown below. Or open this link <a href="">t.me/botfather</a> on your smartphone.</p>
       <div class="text-center"><img src={image6} alt=""/></div>
       <p class="fw-normal h5">The following window should open, and you’ll be prompted to click the start button.</p>
       <div class="text-center"><img src={image7} alt=""/></div>
       <p class="fw-normal h5">Type / <span class="fw-bold">newbot</span> and follow the instructions to create your bot. Give it a name and username. Mine is called <span class="bg-light fw-light">Door Sensor</span>, and the username is <span class="bg-light fw-light">ESPDoorSensorBot</span>.</p>
       <div class="text-center"><img src={image8} alt=""/></div>
       <p class="fw-normal h5">If your bot is successfully created, you’ll receive a message with a link to access the bot and the <span class="fw-bold">bot token</span>. Save the bot token because you’ll need it so that the ESP32 can interact with the bot.</p>
       <div class="text-center"><img src={image9}/></div>
       <h3>Sending a Message to the Bot</h3>
       <p class="fw-normal h5 bg-danger text-white">This step is very important. Don’t miss it. Otherwise, the project will not work.</p>
       <p class="fw-normal h5">You must send a message to your Telegram Bot from your Telegram account before it can send you messages.</p>
      <p class="fw-normal h5"><span class="fw-bold">(1)</span> Go back to the chats tab, and in the search field, type the username of your bot.</p>
      <div class="text-center"><img src={image10}/></div>
      <p class="fw-normal h5"><span class="fw-bold">(2)</span>Select your bot to start a conversation.</p>
      <p class="fw-normal h5"><span class="fw-bold">(3)</span>Click on the Start link.</p>
      <div class="text-center"><img src={image11}/></div>
      <p class="fw-normal h5">And that’s it! You can proceed to the next section.</p>
      <h3>Get Your Telegram User ID</h3>
      <p class="fw-normal h5">To send a message to your Telegram account, the bot needs to know your user ID.

        In your Telegram account, search for <span class="fw-bold">“myidbot”</span> or open this <a href="">link t.me/myidbot</a>on your smartphone.</p>
        <div class="text-center"><img src={image12} class="mt-3 mb-3"/></div>
        <p class="fw-normal h5">Start a conversation with that bot and type /getid. You will get a reply back with your user ID. Save that user ID, because you’ll need it later in this tutorial.</p>
        <div class="text-center"><img src={image13}/></div>
        <h3>Preparing Arduino IDE</h3>
        <p class="fw-normal h5">We’ll program the ESP32 board using Arduino IDE, so make sure you have it installed in your Arduino IDE.</p>
       <ul><li><a href="" class="h5 fw-normal">Installing the ESP32 Board in Arduino IDE (Windows, Mac OS X, Linux)</a></li></ul>
       <h3>Universal Telegram Bot Library</h3>
       <p class="fw-normal h5">To interact with the Telegram bot, we’ll use <span class="text-primary">the Universal Telegram Bot Library</span> created by Brian Lough that provides an easy interface for the Telegram Bot API.</p>
       <p class="fw-normal h5">Follow the next steps to install the latest release of the library.
        <ol class="fw-normal h5">
            <li class="text-primary">Click here to download the Universal Arduino Telegram Bot library.</li>
            <li>Go to <span class="fw-bold">Sketch {'>'} Include Library {'>'} Add.ZIP Library...</span></li>
            <li>Add the library you’ve just downloaded</li>
        </ol>
       </p>
       <p class="fw-normal h5"><span class="fw-bold">Important: </span>don’t install the library through the Arduino Library Manager because it might install a deprecated version.

        For all the details about the library, take a look at <span class="text-primary">the Universal Arduino Telegram Bot Library GitHub page</span>.</p>
      <h3>ArduinoJson Library</h3>
      <p class="fw-normal h5">You also have to install the <span class="text-primary">ArduinoJson</span> library. Follow the next steps to install the library.
        <ol class="fw-normal h5">
            <li>Go to <span class="fw-bold">Sketch {'>'} Include Library {'>'}  Manage Libraries.</span></li>
            <li>Search for “ArduinoJson”.</li>
            <li>Install the library.</li>
        </ol>
      </p>
      <p class="fw-normal h5">We’re using ArduinoJson library version 6.5.12.</p>
      <div class="text-center"><img src={image14}/></div>
      <h3>Parts Required</h3>
      <p class="fw-normal h5">Here’s the hardware that you need to complete this project:
        <ul class="fw-normal h5">
            <li>ESP32 – read Best ESP32 Development Boards</li>
            <li>1× Magnetic Reed Switch </li>
            <li>1× 10kΩ resistor</li>
            <li>1× breadboard</li>
            <li>Jumper wires</li>
        </ul>
      </p>
    <h3>Schematic – ESP32 with Reed Switch</h3>
    <p class="fw-normal h5">We wired the reed switch to <span class="bg-warning text-white">GPIO 4</span>, but you can connect it to any suitable GPIO.</p>
    <div class="text-center"><img src={image15}/></div>
    <h3>Code</h3>
    <p class="fw-normal h5">Copy the sketch below to your Arduino IDE. Replace the SSID, password, BOT token, and user ID with your credentials.</p>

            <div >
                  <CodeEditor onChange={(e)=> setcode(e.target.value)} value={code} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "100px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "100vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
            </div>
            
            <h3>How the Code Works</h3>
            <p class="fw-normal h5">Continue reading to learn how the code works, or proceed to the <span class="text-primary">Demonstration</span> section.

                  First, include the required libraries.</p>
                  <div >
                                    
                  </div>
            <p class="fw-normal h5">Set the GPIOs for the reed switch and LED (the on-board LED is GPIO 2). We’ll light up the on-board LED when the door is open.</p>
            <div >
            <textarea name="" id="" cols="40" rows="3" >
                  const int reedSwitch = 4;
                  const int led = 2; //optional
            </textarea>
            </div>

            <p class="fw-normal h5">The <span class="bg-light fw-light">changeState</span> boolean variable indicates whether the door has changed state.</p>
            <div >
            <textarea name="" id="" cols="40" rows="2" >
                  bool changeState = false;
            </textarea>
            </div>
            <p class="fw-normal h5">The <span class="bg-light fw-light">State</span> variable will hold the reed switch state, and the <span class="bg-light fw-light">doorState</span>, as the name suggests, will hold the door state—closed or opened.</p>
            <div >
            <textarea name="" id="" cols="40" rows="3" >
                  bool state;
                  String doorState;
            </textarea>
            </div>
            <p class="fw-normal h5">The following timer variables allow us to debounce the switch. Only changes that have occurred with at least 1500 milliseconds between them will be considered.</p>
            <div >
            <textarea name="" id="" cols="40" rows="3" >
                  unsigned long previousMillis = 0; 
                  const long interval = 1500;
            </textarea>
            </div>
            <p class="fw-normal h5">Insert your SSID and password in the following variables so that the ESP32 can connect to the internet.</p>
            <div >
            <textarea name="" id="" cols="70" rows="3" >
                  const char* ssid = "REPLACE_WITH_YOUR_SSID";
                  const char* password = "REPLACE_WITH_YOUR_PASSWORD";
            </textarea>
            </div>
            <p class="fw-normal h5">Insert your Telegram Bot Token—the one you’ve gotten in this step.</p>
            <div >
            <textarea name="" id="" cols="90" rows="2" >
                  #define BOTtoken "XXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            </textarea>
            </div>
            <p class="fw-normal h5">Insert your chat ID—the one you’ve gotten in this step.</p>
            <div >
            <textarea name="" id="" cols="40" rows="2" >
                  #define CHAT_ID "XXXXXXXXXX"
            </textarea>
            </div>
            <p class="fw-normal h5">Create a new Wi-Fi client with <span class="bg-light fw-light">WiFiClientSecure</span>.</p>
            <div >
            <textarea name="" id="" cols="40" rows="2" >
                  WiFiClientSecure client;
            </textarea>
            </div>
            <p class="fw-normal h5">Create a bot with the token and client defined earlier.</p>
            <div >
            <textarea name="" id="" cols="50" rows="2" >
                  UniversalTelegramBot bot(BOTtoken, client);
            </textarea>
            </div>
            <p class="fw-normal h5">The <span class="bg-light fw-light">changeDoorStatus()</span> function will run whenever a change is detected on the door state. This function simply changes the <span class="bg-light fw-light">changeState</span>variable to<span class="bg-light fw-light">true</span>. Then, in the <span class="bg-light fw-light">loop()</span>, we’ll handle what happens when the state changes (invert the previous door state and send a message to your Telegram account).</p>
            <div >
            <CodeEditor onChange={(e)=> setcode2(e.target.value)} value={code2} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "20px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "20vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',                        
                        }}/>
            </div>
            <h3>setup()</h3>
            <p class="fw-normal h5">In the <span class="bg-light fw-light">setup()</span>, initialize the Serial Monitor for debugging purposes:</p>
            <div >
            <textarea name="" id="" cols="50" rows="2" >
                  Serial.begin(115200);
            </textarea>
            </div>
            <p class="fw-normal h5">Set the reed switch as an <span class="bg-light fw-light">INPUT</span>. And save the current state when the ESP32 first starts.</p>
            <div >
            <textarea name="" id="" cols="50" rows="3" >
                  pinMode(reedSwitch, INPUT_PULLUP);
                  state = digitalRead(reedSwitch);
            </textarea>
            </div>
            <p class="fw-normal h5">Set the LED as an<span class="bg-light fw-light">OUTPUT</span>and set its state to match the reed switch state (circuit closed and LED off; circuit opened and LED on).</p>
            <div >
            <textarea name="" id="" cols="50" rows="3" >
                  pinMode(led, OUTPUT);
                  digitalWrite(led, !state);
            </textarea>
            </div>
            <h6>Setting an interrupt</h6>
            <p class="fw-normal h5">Set the reed switch as an interrupt.</p>
            <div >
            <textarea name="" id="" cols="50" rows="2" >
                  attachInterrupt(digitalPinToInterrupt(reedSwitch), changeDoorStatus, CHANGE);
            </textarea>
            </div>
            <p class="fw-normal h5">To set an interrupt in the Arduino IDE, you use <span class="bg-light fw-light">the attachInterrupt()</span> function, which accepts as arguments: the GPIO interrupt pin, the name of the function to be executed, and mode.</p>
            <p class="fw-normal h5">The first argument is a GPIO interrupt. You should use <span class="bg-light fw-light">digitalPinToInterrupt(GPIO)</span> to set the actual GPIO as an interrupt pin.</p>
            <p class="fw-normal h5">The second argument of the <span class="bg-light fw-light">attachInterrupt()</span> function is the name of the function that will be called every time the interrupt is triggered – the interrupt service routine (ISR). In this case, it is the <span class="bg-light fw-light">changeDoorStatus</span> function. to set the actual GPIO as an interrupt pin.</p>
            <p class="fw-normal h5">The ISR function should be as simple as possible, so the processor gets back to the execution of the main program quickly.</p>
            <p class="fw-normal h5">The third argument is the mode. We set it to <span class="bg-light fw-light">CHANGE</span> to trigger the interrupt whenever the pin changes value – for example, from HIGH to LOW and LOW to HIGH.</p>
            <h6>Initialize Wi-Fi</h6>
            <p class="fw-normal h5">The following lines connect the ESP32 to Wi-Fi and add a root certificate for api.telegram.org.</p>
            <div >
            <CodeEditor onChange={(e)=> setcode3(e.target.value)} value={code3} 
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "20px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "40vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
            </div>
            <p class="fw-normal h5">Send a message to your Telegram account informing you that the bot started.</p>


          </div>
              

          


        <div className="session-footer">
              <Footer />
          </div>
    </div>
    
    )
    }

    export default Project1;