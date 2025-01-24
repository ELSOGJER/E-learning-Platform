import React, { useState } from 'react'
import Header from '../../header'
import Footer from '../../footer'
import CodeEditor from '@uiw/react-textarea-code-editor';
// import './style.css';
import image1 from './images/pic1.jpg';
import image2 from './images/pic2.png'
import image3 from './images/pic3.png'
import image4 from './images/pic4.png'
import image5 from './images/pic5.png'
import image6 from './images/pic6.png'
import image7 from './images/pic7.jpg'
import image8 from './images/pic8.jpg'


const Project3 = () => {
      const [code, setcode] = useState(`void IRAM_ATTR ISR() {
            Statements;`)
    const [code2, setcode2] = useState(`#define pushButton_pin   33
    #define LED_pin   32
    void IRAM_ATTR toggleLED()
    {
      digitalWrite(LED_pin, !digitalRead(LED_pin));
    }
    void setup()
    {
      pinMode(LED_pin, OUTPUT);
      pinMode(pushButton_pin, INPUT_PULLUP);
      attachInterrupt(pushButton_pin, toggleLED, RISING);
    } 
    void loop()
    {
    }`)
  return (
    <div>
      <div className="sessions">
          <Header />
      </div>


      <div className="container marging__">
      <h1 class="border-bottom border-2">ESP32 Interrupt Tutorial</h1>
        <div class="text-center"><img src={image1} alt="" class="w-50 mt-3 mb-3"/></div>
        <p class="h5 fw-normal">Interrupts are used to handle events that do not happen during the normal execution of a program but when a specific trigger occurs. For example, if we write a program to blink an LED the microcontroller will execute each command one by one. But if we want to monitor a switch to start or stop the blinking, it will be only possible after all other tasks before the checking is completed i.e., it won’t be real-time. That’s where interrupts come to play. With interrupt, we do not need to continuously check the state of the digital input pin. When an interrupt occurs, the controller stops the execution of the main program, and a function is called upon known as ISR or the Interrupt Service Routine. The controller then executes the tasks inside the ISR and then gets back to the main program after the ISR execution is finished.

          <br/>  The ESP32 has a total of 32 interrupts for it’s each core. Each interrupt has a certain priority level, most (but not all) interrupts are connected to the interrupt mux. Because there are more interrupt sources than interrupts, some interrupts are shared with multiple interrupt sources.</p>
        <h3>Types of Interrupts in ESP32</h3>
        <p class="h5 fw-normal">The major <span class="h5">classification of interrupts</span> in ESP32 is based on the interrupt source. And they are Hardware Interrupts and Software interrupts.</p>
         <h5>External or Hardware Interrupts</h5>
         <p class="h5 fw-normal">Hardware interrupts occur in response to an external hardware event. For example, there is a Touch Interrupt which happens when touch is detected and a GPIO interrupt when the state of a GPIO pin is changed. GPIO interrupts and touch interrupts comes under this category.</p>
        <h5>Software Interrupts</h5>
        <p class="h5 fw-normal">This type of interrupts occurs when a software event is triggered such as timer overflow. Timer interrupts are an example of software interrupts. We will discuss more about Timers in the upcoming dedicated tutorial for ESP32 Timers.</p>
        <h3>Commonly Asked Questions about ESP32 Interrupts</h3>
        <h5>Q. How many interrupts can ESP32 handle?</h5>
        <p>The ESP32 offers up to 32 interrupt slots for each core.</p>
        <h5>Q. How to use external interrupt in ESP32?</h5>
        <p>You can attach the desired pin to an interrupt and can assign an ISR for the same with the help of attachInterrupt function.</p>
        <h5>Q. In ESP32 which pins support External interrupt?</h5>
        <p>All of them support GPIO interrupt and 10 of them support touch interrupt.</p>
        <h5>Q. What are the GPIO interrupt modes ESP32 have?</h5>
        <p>ESP32 has five types of interrupt events and are LOW, HIGH, CHANGE, FALLING, and RISING.</p>
        <h3>ESP32 GPIO Interrupts</h3>
        <p class="h5 fw-normal">With ESP32, we can configure all the GPIO pins as hardware interrupt sources. We can enable interrupt on any of these GPIO pins by attaching them to a corresponding ISR. To attach an interrupt, we will use the attchInterrupt() macro. The usage of <span class="fw-bold"> attachInterrupt() macro</span> is as follows-</p>
        <p class="h5 fw-normal">The attachInterrupt() function takes in three arguments:</p>
        <p class="h5 fw-normal"><span class="fw-bold">GPIOpin:</span> This parameter indicates the GPIO pin number to which the interrupt is to be attached.</p>
        <p class="h5 fw-normal"><span class="fw-bold">ISR:</span>The second parameter is the name of the function that will be called every time the interrupt is triggered.</p>
        <p class="h5 fw-normal"><span class="fw-bold">Event:</span>The third parameter indicates at which event the interrupt should be triggered. The five possible events are the following.</p>
        <ul><li><span class="fw-bold">LOW:</span> Triggers interrupt whenever the pin is LOW</li></ul>
        <div class="text-center"><img src={image2} alt="" class="w-50 mt-3 mb-3"/></div>
        <ul><li><span class="fw-bold">HIGH:</span>  Triggers interrupt whenever the pin is HIGH</li></ul>
        <div class="text-center"><img src={image3} alt="" class="w-50 mt-3 mb-3"/></div>
        <ul><li><span class="fw-bold">CHANGE:</span>Triggers interrupt whenever the pin changes value, from HIGH to LOW or LOW to HIGH</li></ul>
        <div class="text-center"><img src={image4} alt="" class="w-50 mt-3 mb-3"/></div>
        <ul><li><span class="fw-bold">FALLING:</span> Triggers interrupt when the pin goes from HIGH to LOW</li></ul>
        <div class="text-center"><img src={image5} alt="" class="w-50 mt-3 mb-3"/></div>
        <ul><li><span class="fw-bold">RISING:</span>Triggers interrupt when the pin goes from LOW to HIGH</li></ul>
        <div class="text-center"><img src={image6} alt="" class="w-50 mt-3 mb-3"/></div>
        <h3>How to Disable an Interrupt?</h3>
        <p class="h5 fw-normal">In some situations, we will have to disable the interrupt temporarily. For such cases, we can use the <span class="fw-bold">detachInterrupt</span> function. Once this function is called for a specific pin, the interrupt that is attached to that pin will be disabled until the attachInterrupt function is called again or the system is rebooted. The syntax for using it is as follows-</p>
        <div class="text-center ">
            <textarea name="" id="" cols="50" rows="2" class="bg-light w-100">
                detachInterrupt(GPIOPin);
            </textarea>
        </div>
        <h5>Interrupt Service Routine or ISR</h5>
        <p class="h5 fw-normal">This will be the function that will be called upon when the specific interrupt is triggered. The syntax is as follows:</p>
        <div class="text-center ">
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
        <p class="h5 fw-normal">Where <span class="fw-bold">ISR</span> is the function name, and the statements are the tasks that should be completed when this function is called. Since the ISR is blocking the main program, it is recommended to use it to do tasks that are as small as possible. The parameter <span class="fw-bold">IRAM_ATTR</span> will ensure that the ISR function is placed in the IRAM area instead of the flash area. This will ensure that the ISR function will load faster.</p>
        <h5>Hardware Example – Turning on or off an LED</h5>
        <p class="h5 fw-normal">In this example, we will turn on and off an LED with a push-button switch. But instead of using polling, we will be using the GPIO interrupt. To do that make the connections on a breadboard as shown in the below circuit diagram.</p>
        <div class="text-center"><img src={image7} alt="" class="w-50 mt-3 mb-3"/></div>
        <p class="h5 fw-normal">Here is the actual circuit connected on a breadboard as per the circuit diagram.</p>
        <div class="text-center"><img src={image8} alt="" class="w-50 mt-3 mb-3"/></div>
        <div class="text-center">
            <CodeEditor onChange={(e)=> setcode2(e.target.value)} value={code2} className='editor__'
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
        <p class="h5 fw-normal">As soon as the pushbutton is pressed, the voltage at GPIO33 will fall to 0V. And when the button is released, the voltage will rise to VCC. When the voltage is rising, the interrupt will be triggered and the corresponding ISR toggleLED will be called. Because the ISR will be only triggered at the rising edge, the debouncing will be eliminated.</p>
        <h3>ESP32 Touch Interrupt</h3>
        <p class="h5 fw-normal">Just like the GPIO interrupt, the ESP32 supports touch Interrupt on its 10 touch inputs. Using the touch interrupt is also similar. To attach a touch interrupt, we will use the touchAttachInterrupt function. Its syntax is as follows:</p>
        <div class="text-center">
            <textarea name="" id="" cols="50" rows="2" class="bg-light w-100">
                touchAttachInterrupt(GPIOPin, ISR, Threshold)
            </textarea>
        </div>
        <p class="h5 fw-normal">Here the <span class="fw-bold">GPIOPin</span> is the pin with touch input support and the ISR is the ISR function, and the Threshold is the touch value at which the interrupt should be triggered. Everything else is the same as the GPIO interrupt example.</p>
         <div class="text-center"><video src="images/ESP32-Interrupt-LED-Blinking.mp4" class="w-50" controls type="video/mp4"></video></div>
          

      </div>
          

      


      <div className="session-footer">
              <Footer />
      </div>
    </div>
    
    )
    }

    export default Project3;