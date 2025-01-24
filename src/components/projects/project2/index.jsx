import React, { useState } from 'react'
import Header from '../../header'
import Footer from '../../footer'
import CodeEditor from '@uiw/react-textarea-code-editor';
// import './style.css';
import image1 from './images/pic1.jpg';
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
import image16 from './images/pic15.webp'
import image17 from './images/pic15.webp'
import image18 from './images/pic15.webp'
import image19 from './images/pic15.webp'
import image20 from './images/pic15.webp'
import image21 from './images/pic15.webp'
import image22 from './images/pic15.webp'
import image23 from './images/pic15.webp'
import image24 from './images/pic15.webp'
import image25 from './images/pic15.webp'


const Project2 = () => {
      const [code, setcode] = useState(`/*
      Rui Santos
      Complete project details at our blog.
        - ESP32: https://RandomNerdTutorials.com/esp32-firebase-realtime-database/
        - ESP8266: https://RandomNerdTutorials.com/esp8266-nodemcu-firebase-realtime-database/
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      Based in the RTDB Basic Example by Firebase-ESP-Client library by mobizt
      https://github.com/mobizt/Firebase-ESP-Client/blob/main/examples/RTDB/Basic/Basic.ino
    */
    
    #include <Arduino.h>
    #if defined(ESP32)
      #include <WiFi.h>
    #elif defined(ESP8266)
      #include <ESP8266WiFi.h>
    #endif
    #include <Firebase_ESP_Client.h>
    
    //Provide the token generation process info.
    #include "addons/TokenHelper.h"
    //Provide the RTDB payload printing info and other helper functions.
    #include "addons/RTDBHelper.h"
    
    // Insert your network credentials
    #define WIFI_SSID "REPLACE_WITH_YOUR_SSID"
    #define WIFI_PASSWORD "REPLACE_WITH_YOUR_PASSWORD"
    
    // Insert Firebase project API Key
    #define API_KEY "REPLACE_WITH_YOUR_FIREBASE_PROJECT_API_KEY"
    
    // Insert RTDB URLefine the RTDB URL */
    #define DATABASE_URL "REPLACE_WITH_YOUR_FIREBASE_DATABASE_URL" 
    
    //Define Firebase Data object
    FirebaseData fbdo;
    
    FirebaseAuth auth;
    FirebaseConfig config;
    
    unsigned long sendDataPrevMillis = 0;
    int count = 0;
    bool signupOK = false;
    
    void setup(){
      Serial.begin(115200);
      WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
      Serial.print("Connecting to Wi-Fi");
      while (WiFi.status() != WL_CONNECTED){
        Serial.print(".");
        delay(300);
      }
      Serial.println();
      Serial.print("Connected with IP: ");
      Serial.println(WiFi.localIP());
      Serial.println();
    
      /* Assign the api key (required) */
      config.api_key = API_KEY;
    
      /* Assign the RTDB URL (required) */
      config.database_url = DATABASE_URL;
    
      /* Sign up */
      if (Firebase.signUp(&config, &auth, "", "")){
        Serial.println("ok");
        signupOK = true;
      }
      else{
        Serial.printf("%s\n", config.signer.signupError.message.c_str());
      }
    
      /* Assign the callback function for the long running token generation task */
      config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
      
      Firebase.begin(&config, &auth);
      Firebase.reconnectWiFi(true);
    }
    
    void loop(){
      if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)){
        sendDataPrevMillis = millis();
        // Write an Int number on the database path test/int
        if (Firebase.RTDB.setInt(&fbdo, "test/int", count)){
          Serial.println("PASSED");
          Serial.println("PATH: " + fbdo.dataPath());
          Serial.println("TYPE: " + fbdo.dataType());
        }
        else {
          Serial.println("FAILED");
          Serial.println("REASON: " + fbdo.errorReason());
        }
        count++;
        
        // Write an Float number on the database path test/float
        if (Firebase.RTDB.setFloat(&fbdo, "test/float", 0.01 + random(0,100))){
          Serial.println("PASSED");
          Serial.println("PATH: " + fbdo.dataPath());
          Serial.println("TYPE: " + fbdo.dataType());
        }
        else {
          Serial.println("FAILED");
          Serial.println("REASON: " + fbdo.errorReason());
        }
      }
      }`)
    
      const [code2, setcode2] = useState(`#include <Arduino.h>
    #if defined(ESP32)
    #include <WiFi.h>
    #elif defined(ESP8266)
    #include <ESP8266WiFi.h>
    #endif
    #include <Firebase_ESP_Client.h>`)
      
    const [code3, setcode3]=useState(`Serial.begin(115200);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED){
          Serial.print(".");
          delay(300);
    }
    Serial.println();
    Serial.print("Connected with IP: ");
    Serial.println(WiFi.localIP());
    Serial.println(); `)
    const [code4, setcode4]=useState(`/* Sign up */
    if (Firebase.signUp(&config, &auth, "", "")){
          Serial.println("ok");
          signupOK = true;
    }
    else{
          Serial.printf("%s\n", config.signer.signupError.message.c_str());
    }`)
    const [code5, setcode5]=useState(`/*
    Rui Santos
    Complete project details at our blog.
      - ESP32: https://RandomNerdTutorials.com/esp32-firebase-realtime-database/
      - ESP8266: https://RandomNerdTutorials.com/esp8266-nodemcu-firebase-realtime-database/
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    Based in the RTDB Basic Example by Firebase-ESP-Client library by mobizt
    https://github.com/mobizt/Firebase-ESP-Client/blob/main/examples/RTDB/Basic/Basic.ino
  */
  
  #include <Arduino.h>
  #if defined(ESP32)
    #include <WiFi.h>
  #elif defined(ESP8266)
    #include <ESP8266WiFi.h>
  #endif
  #include <Firebase_ESP_Client.h>
  
  //Provide the token generation process info.
  #include "addons/TokenHelper.h"
  //Provide the RTDB payload printing info and other helper functions.
  #include "addons/RTDBHelper.h"
  
  // Insert your network credentials
  #define WIFI_SSID "REPLACE_WITH_YOUR_SSID"
  #define WIFI_PASSWORD "REPLACE_WITH_YOUR_PASSWORD"
  
  // Insert Firebase project API Key
  #define API_KEY "REPLACE_WITH_YOUR_FIREBASE_PROJECT_API_KEY"
  
  // Insert RTDB URLefine the RTDB URL */
  #define DATABASE_URL "REPLACE_WITH_YOUR_FIREBASE_DATABASE_URL" 
  
  //Define Firebase Data object
  FirebaseData fbdo;
  
  FirebaseAuth auth;
  FirebaseConfig config;
  
  unsigned long sendDataPrevMillis = 0;
  int intValue;
  float floatValue;
  bool signupOK = false;
  
  void setup() {
    Serial.begin(115200);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print(".");
      delay(300);
    }
    Serial.println();
    Serial.print("Connected with IP: ");
    Serial.println(WiFi.localIP());
    Serial.println();
  
    /* Assign the api key (required) */
    config.api_key = API_KEY;
  
    /* Assign the RTDB URL (required) */
    config.database_url = DATABASE_URL;
  
    /* Sign up */
    if (Firebase.signUp(&config, &auth, "", "")) {
      Serial.println("ok");
      signupOK = true;
    }
    else {
      Serial.printf("%s\n", config.signer.signupError.message.c_str());
    }
  
    /* Assign the callback function for the long running token generation task */
    config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
    Firebase.begin(&config, &auth);
    Firebase.reconnectWiFi(true);
  }
  
  void loop() {
    if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)) {
      sendDataPrevMillis = millis();
      if (Firebase.RTDB.getInt(&fbdo, "/test/int")) {
        if (fbdo.dataType() == "int") {
          intValue = fbdo.intData();
          Serial.println(intValue);
        }
      }
      else {
        Serial.println(fbdo.errorReason());
      }
      
      if (Firebase.RTDB.getFloat(&fbdo, "/test/float")) {
        if (fbdo.dataType() == "float") {
          floatValue = fbdo.floatData();
          Serial.println(floatValue);
        }
      }
      else {
        Serial.println(fbdo.errorReason());
      }
    }
  }`)
  return (
    <div>
      <div className="sessions">
            <Header />
      </div>



      <div className="container marging__">
            <h1 class="border-bottom border-2">ESP32: Getting Started with Firebase (Realtime Database)</h1>
                  <p class="fw-normal h5">This guide will get you started quickly with Firebase using the ESP32 board. Firebase is Google’s mobile application development platform that includes many services to manage data from IOS, Android, or web applications. You’ll create a Firebase project with a realtime database (RTDB), and you’ll learn how to store and read values from the database with your ESP32.</p>
                  <div class="text-center"><img src={image1} alt="" class="w-50 mt-3 mb-3"/></div>
                  <h3 class=" ">What is Firebase?</h3>
                  <div class="text-center"><img src={image2} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">Firebase is Google’s mobile application development platform that helps you build, improve, and grow your app. It has many services used to manage data from any android, IOS, or web application.</p>
                  <p class="fw-normal h5">The following paragraph clearly explains the advantages of using Firebase:</p>
                  <p class="fw-light h5">“Firebase is a toolset to “build, improve, and grow your app”, and the tools it gives you cover a large portion of the services that developers would normally have to build themselves but don’t really want to build because they’d rather be focusing on the app experience itself. This includes things like analytics, authentication, databases, configuration, file storage, push messaging, and the list goes on. The services are hosted in the cloud and scale with little to no effort on the part of the developer.”</p>
                  
                  <p class="fw-normal h5">This paragraph was taken from this article, and we recommend that you read that article if you want to understand better what firebase is and what it allows you to do.
                  <br/>  You can use the ESP32 to connect and interact with your Firebase project, and you can create applications to control the ESP32 via Firebase from anywhere in the world.
                        
                  <br/>  In this tutorial, we’ll create a Firebase project with a realtime database, and we’ll use the ESP32 to store and read data from the database. The ESP32 can interact with the database from anywhere in the world as long as it is connected to the internet.
                        
                  <br/> This means that you can have two ESP32 boards in different networks, with one board storing data and the other board reading the most recent data, for example.
                  </p>
                  <div class="text-center"><img src={image3} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">In a later tutorial, we’ll create a web app using Firebase that will control the ESP32 to display sensor readings or control outputs from anywhere in the world.</p>
                  <div class="text-center"><img src={image4} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">In this tutorial, you’ll learn how to create a Firebase project with a realtime database and store and read data from the database using the ESP32.</p>
                  <p class="fw-normal h5">To follow this project, first, you need to set up a Firebase project and create a realtime database for that project. Then, you’ll program the ESP32 to store and read data from the database. This tutorial is divided into three sections.</p>
                  <ol class="text-primary fw-normal h5">
                        <li>Create a Firebase Project</li>
                        <li>ESP32: Store data to the Firebase Realtime Database</li>
                        <li>ESP32: Read data from the Firebase Realtime Database</li>
                  </ol>
                  <h3>Set Up a Firebase Account and Create a New Project</h3>
                  <h4>1.Create a New Project</h4>
                  <p class="fw-normal h5">Follow the next instructions to create a new project on Firebase.
                        <ol class="fw-normal h5">
                        <li>Go to Firebase and sign in using a Google Account.</li>
                        <li>Click Get Started, and then Add project to create a new project.</li>
                        <li>Give a name to your project, for example: ESP32 Firebase Demo.</li>
                        
                        </ol>
                  </p>
                  <div class="text-center"><img src={image5} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">4. Disable the option Enable Google Analytics for this project as it is not needed and click Create project.</p>
                  <div class="text-center"><img src={image6} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">5. It will take a few seconds setting up your project. Then, click Continue when it’s ready.</p>
                  <div class="text-center"><img src={image7} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">6. You’ll be redirected to your Project console page.</p>
                  <div class="text-center"><img src={image8} alt="" class="w-50 mt-3 mb-3"/></div>
                  <h4>2. Set Authentication Methods</h4>
                  <p class="fw-normal h5">You need to set authentication methods for your app.
                  <br/> “Most apps need to know the identity of a user. In other words, it takes care of logging in and identify the users (in this case, the ESP32). Knowing a user’s identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user’s devices.” To learn more about the authentication methods</p>
                  <p class="fw-normal h5">1. On the left sidebar, click on Authentication and then on Get started.</p>
                  <div class="text-center"><img src={image9} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">2. There are several authentication methods like email and password, Google Account, Facebook account, and others.</p>
                  <div class="text-center"><img src={image10} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">3. For testing purposes, we can select the Anonymous user (require authentication without requiring users to sign in first by creating temporary anonymous accounts). Enable that option and click Save.</p>
                  <div class="text-center"><img src={image11} alt="" class="w-50 mt-3 mb-3"/></div>
                  <h4>3. Creating a Realtime Database</h4>
                  <p class="fw-normal h5">The next step is creating a Realtime Database for your project. Follow the next steps to create the database.</p>
                  <p class="fw-normal h5">1. On the left sidebar click on Realtime Database and then, click on Create Database.</p>
                  <div class="text-center"><img src={image12} class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">2. Select your database location. It should be the closest to your location.</p>
                  <div class="text-center"><img src={image13} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">3. Set up security rules for your database. For testing purposes, select Start in test mode. In later tutorials you’ll learn how to secure your database using database rules.</p>
                  <div class="text-center"><img src={image14} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">4. Your database is now created. You need to copy and save the database URL—highlighted in the following image—because you’ll need it later in your ESP32 code.</p>
                  <div class="text-center"><img src={image15} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">The Realtime Database is all set. Now, you also need to get your project API key.</p>
                  <h4>4. Get Project API Key</h4>
                  <p class="fw-normal h5">1. To get your project’s API key, on the left sidebar click on Project Settings.</p>
                  <div class="text-center"><img src={image16} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">2. Copy the API Key to a safe place because you’ll need it later.</p>
                  <div class="text-center"><img src={image17} alt="" class="w-50 mt-3 mb-3"/></div>
                  <h3>Program the ESP32 to Interface with Firebase</h3>
                  <p class="fw-normal h5">Now that the Firebase Realtime Database is created, you’ll learn how to interface the ESP32 with the database.
                  <br/> To program the ESP32, you can use <span class="text-primary">Arduino IDE, VS Code with the PlatformIO extension</span>, or other suitable software.</p>
                  <p class="fw-normal h5"><span class="fw-bold">Note:</span> for firebase projects, we recommend using VS Code with the PlatformIO extension because if you want to develop a web application to make the bridge between the ESP32 and Firebase, VS Code provides all the tools to do that. However, we won’t build the web application in this tutorial, so you can use Arduino IDE.</p>

                  <h3>Install the Firebase-ESP-Client Library</h3>
                  <h4>Installation – VS Code + PlatformIO</h4>
                  <p class="fw-normal h5">If you’re using VS Code with the PlatformIO extension, click on the<span class="fw-bold">PIO</span> Home icon and then select the<span class="fw-bold">Libraries tab</span> Libraries tab. Search for <span class="fw-bold">“Firebase ESP Client“</span>. Select the Firebase Arduino Client Library for ESP8266 and ESP32.</p>
                  <div class="text-center"><img src={image18} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">Then, click Add to Project and select the project you’re working on.</p>
                  <div class="text-center"><img src={image19} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">Also, change the monitor speed to 115200 by adding the following line to <span class="bg-light fw-light">the platformio.ini</span> file of your project:</p>
                  <div class="text-center">
                  <textarea name="" id="" cols="40" rows="2" >
                        monitor_speed = 115200
                  </textarea>
                        </div>

                  <h4>Installation – Arduino IDE</h4>
                  <p class="fw-normal h5">If you’re using Arduino IDE, follow the next steps to install the library.
                  <ol class="fw-normal h5">
                        <li>Go to <span class="fw-bold">Sketch{' >'} Include Library {'>'}  Manage Libraries.</span></li>
                        <li>Search for Firebase ESP Client and install the Firebase Arduino Client Library for ESP8266 and ESP32 by Mobitz.</li>
                  </ol>
                  </p>
                  <div class="text-center">
                  <textarea name="" id="" cols="40" rows="2" >
                        Note: We are using version 2.3.7. If you have issues compiling your code with more recent versions of the library, downgrade to version 2.3.7.
                  </textarea>
                  </div>
                  <div class="text-center"><img src={image20} alt="" class="w-50 mt-3 mb-3"/></div>
                  <h3>ESP32 Store Data to Firebase Database</h3>
                  <div class="text-center"><img src={image21} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">Copy the following code to your Arduino IDE. This sketch inserts an int and a float number into the database every 15 seconds. This is a simple example showing you how to connect the ESP32 to the database and store data. This is also compatible with ESP8266 boards.</p>

                  <div >
                  <CodeEditor onChange={(e)=> setcode(e.target.value)} value={code} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"90%",
                        marginTop: "20px",
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
                  <CodeEditor onChange={(e)=> setcode2(e.target.value)} value={code2} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "20px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "30vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
                        <p class="fw-normal h5">Set the GPIOs for the reed switch and LED (the on-board LED is GPIO 2). We’ll light up the on-board LED when the door is open.</p>
                        <div >
                        <textarea name="" id="" cols="40" rows="5" >
                        //Provide the token generation process info.
                        #include "addons/TokenHelper.h"
                        //Provide the RTDB payload printing info and other helper functions.
                        #include "addons/RTDBHelper.h"
                        </textarea>
                        </div>

                        <p class="fw-normal h5">The <span class="bg-light fw-light">changeState</span> boolean variable indicates whether the door has changed state.</p>
                        <div >
                        <textarea name="" id="" cols="40" rows="3" >
                        #define WIFI_SSID "REPLACE_WITH_YOUR_SSID"
                        #define WIFI_PASSWORD "REPLACE_WITH_YOUR_PASSWORD"
                        </textarea>
                        </div>
                        <p class="fw-normal h5">The <span class="bg-light fw-light">State</span> variable will hold the reed switch state, and the <span class="bg-light fw-light">doorState</span>, as the name suggests, will hold the door state—closed or opened.</p>
                        <div >
                        <textarea name="" id="" cols="40" rows="2" >
                        #define API_KEY "REPLACE_WITH_YOUR_FIREBASE_PROJECT_API_KEY"
                        </textarea>
                        </div>
                        <p class="fw-normal h5">The following timer variables allow us to debounce the switch. Only changes that have occurred with at least 1500 milliseconds between them will be considered.</p>     
                  </div>


                  <p class="fw-normal h5">The following timer variables allow us to debounce the switch. Only changes that have occurred with at least 1500 milliseconds between them will be considered.</p>

                  <div >
                  <CodeEditor onChange={(e)=> setcode3(e.target.value)} value={code3} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "20px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "30vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
                  </div>
                  <p class="fw-normal h5">Insert your SSID and password in the following variables so that the ESP32 can connect to the internet.</p>
                  <div class="text-center">
                  <textarea name="" id="" cols="70" rows="3" class="bg-light w-100">
                  const char* ssid = "REPLACE_WITH_YOUR_SSID";
                  const char* password = "REPLACE_WITH_YOUR_PASSWORD";
                  </textarea>
                  </div>
                  <p class="fw-normal h5">Insert your Telegram Bot Token—the one you’ve gotten in this step.</p>
                  <div class="text-center ">
                  <textarea name="" id="" cols="90" rows="5" class="bg-light w-100">
                  /* Assign the api key (required) */
                  config.api_key = API_KEY;
                  
                  /* Assign the RTDB URL (required) */
                  config.database_url = DATABASE_URL;
                  </textarea>
                  </div>
                  <p class="fw-normal h5">Insert your chat ID—the one you’ve gotten in this step.</p>
                  <div class="text-center ">
                  <CodeEditor onChange={(e)=> setcode4(e.target.value)} value={code4} className='editor__'
                  padding={15} style={{
                        fontSize: 16,
                        backgroundColor: "#f5f5f5",
                        width:"80%",
                        marginTop: "20px",
                        marginBottom: "50px",
                        justifyContent: "center",
                        alignItems:'center',
                        height: "30vh",
                        overflow: "scroll",
                        scrollBehavior: 'smooth',
                        
                        }}/>
                  </div>
                  <p class="fw-normal h5">Create a new Wi-Fi client with <span class="bg-light fw-light">WiFiClientSecure</span>.</p>
                  <div class="text-center ">
                  <textarea name="" id="" cols="40" rows="2" class="bg-light w-100">
                  WiFiClientSecure client;
                  </textarea>
                  </div>

                  <h3>Demonstration</h3>
                  <p class="fw-normal h5">Upload the code to your ESP32 board. Don’t forget to insert your network credentials, database URL path, and the project API key.

                  <br/> After uploading the code, open the Serial Monitor at a baud rate of 115200 and press the ESP32 on-board reset button so it starts running the code.
                  
                  <br/> If everything works as expected, the values should be stored in the database, and you should get success messages.</p>
                  <div class="text-center"><img src={image22} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">Go to your project’s Firebase Realtime database, and you’ll see the values saved on the different node paths. Every 15 seconds, it saves a new value. The database blinks when new values are saved.</p>
                  <div class="text-center"><img src={image23} alt="" class="w-50 mt-3 mb-3"/></div>
                  <h3>ESP32 Read From Firebase Database</h3>
                  <div class="text-center"><img src={image24} alt="" class="w-50 mt-3 mb-3"/></div>
                  <p class="fw-normal h5">In this section, you’ll learn how to read data from the database. We’ll read the data stored in the previous section. Remember that we saved an int value in the test/int path and a float value in the test/float path.
                  <br/>The following example reads the values stored in the database. Upload the following code to your board. You can use the same ESP32 board or another board to get the data posted by the previous ESP32.</p>

                  <div class="text-center mt-3">
                        <CodeEditor onChange={(e)=> setcode5(e.target.value)} value={code5} className='editor__'
                        padding={15} style={{
                              fontSize: 16,
                              backgroundColor: "#f5f5f5",
                              width:"90%",
                              marginTop: "20px",
                              marginBottom: "50px",
                              justifyContent: "center",
                              alignItems:'center',
                              height: "100vh",
                              overflow: "scroll",
                              scrollBehavior: 'smooth',
                              
                              }}/>
                  </div>
                  <h3>Demonstration</h3>
                  <p class="fw-normal h5"> Upload the code to your board. Then, open the Serial Monitor at a baud rate of 115200. After a few seconds, it will print the values saved on the database.</p>
                  <div class="text-center"><img src={image25} alt="" class="w-50 mt-3 mb-3"/></div>
                        
            </div>




            <div className="session-footer">
              <Footer />
            </div>
    </div>
    
    )
    }

    export default Project2;