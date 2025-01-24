import React, { useState } from 'react';
import Footer from '../../footer';
import Header from '../../header';
import ScrollBar from '../scrollBar';

const Session_micro = () => {
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

        <div class="col-md-9 content offset-3">
          <h3>Overview about Micro Controller :</h3>
          <div class="row">
            <div >
              <p style={{fontSize: '18px', margin:"10px 20px 20px"}}>
              A micro controller is an integrated circuit that is capable of running programs. There are many instances of those on the market today from a variety of manufacturers. The prices of these micro controllers keeps falling. In the hobbyist market, an open source architecture called "Arduino" that uses the Atmel range of processors has caught the imagination of countless folks. The boards containing these Atmel chips combined with a convention for connections and also a free set of development tools has lowered the entry point for playing with electronics to virtually nill. Unlike a PC, these processors are extremely low end with low amounts of ram and storage capabilities. They won't be replacing the desktop or laptop any time soon. For those who want more "oomph" in their processors, the folks over at Raspberry PI have developed a very cheap (~$45) board that is based on the ARM processors that has much more memory and uses micro SD for persistent data storage. These devices run a variant of the Linux
                operating system. I'm not going to talk further about the Raspberry PI as it is in the class of "computer" as opposed to microprocessor.
              </p>
              <p style={{fontSize: '18px', margin:"10px 20px 20px"}}>
              These micro controllers and architectures are great and there will always be a place for them. However, there is a catch … and that is networking. These devices have an amazing set of capabilities including direct electrical inputs and outputs (GPIOs) and support for a variety of protocols including SPI, I2C, UART and more, however, few of them so far come with wireless networking included.
              </p>
            </div>

          </div>
          
          <p style={{fontSize: '18px', margin:"10px 20px"}}>
          The Arduino is based on the Atmel chips and has a variety of physical sizes in its open hardware footprints. The primary micro controller used is the ATmega328. One can find instances of these raw processors on eBay for under $2 with fully constructed boards containing them for under $3. This is 10-20 times cheaper than the Raspberry PI. Of course, one gets dramatically less than the Raspberry PI so comparison can become odd … however if what one wants to do is tinker with electronics or make some simple devices that connect to LEDs, switches or sensors, then the functional features needed become closer. <br/>Between them, the Arduino and the Raspberry PI appear to have all the needs covered. If that were the case, this would be a very short book. Let us add the twist that we started with … wireless networking. To have a device move a robot chassis or flash LED patterns or make some noises or read data from a sensor and beep when the temperature gets too high … these are all great and worthy projects. However, we are all very much aware of the value of the Internet. Our computers are Internet connected, our phones are connected, we watch TV (Netflix) over the Internet, we play games over the Internet, we socialize (??) over the Internet … and so on. The Internet has become such a basic commodity that we would laugh if someone offered us a new computer or a phone that lacked the ability to go "on-line".<br/> Now imagine what a micro controller with native wireless Internet could do for us? This would be a processor which could run applications as well as or better than an Arduino, which would have GPIO and hardware protocol support, would have RAM and flash memory … but would have the killer new feature that it would also be able to form Internet connections. And that … simply put … is what the ESP32 device is. It is an alternative microprocessor to the ones already mentioned but also has Wi-Fi and TCP/IP (Transmission Control Protocol / Internet Protocol) support already built in. What is more, it is also not much more expensive than an Arduino. By searching , we find ESP32 modules around the $6 price point.
            
          </p>
          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>

          
    </div>
  );
}

export default Session_micro;