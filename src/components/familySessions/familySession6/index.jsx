import React, { useState } from 'react';
// import './style.css'
import img1 from "./images/pic1.png";
import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession6 = () => {
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


        <div class=" content offset-3 family_session5">
          <h3>Strapping Pins</h3>

          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>ESP32-S2 has three strapping pins:
            <p style={{fontSize:"20px" , margin:'10px 30px 10px', lineHeight:'1.8'}}>
            • GPIO0 <br/>
            • GPIO45<br/>
            • GPIO46<br/>
            </p>
          </p>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>
          Software can read the values of corresponding bits from register ”GPIO_STRAPPING”.<br/>
          During the chip’s system reset (power-on-reset, RTC watchdog reset, brownout reset, analog super watchdog
          reset, and crystal clock glitch detection reset), the latches of the strapping pins sample the voltage level as
          strapping bits of ”0” or ”1”, and hold these bits until the chip is powered down or shut down.
          GPIO0, GPIO45 and GPIO46 are connected to the chip’s internal weak pull-up/pull-down during the chip reset.
          Consequently, if they are unconnected or the connected external circuit is high-impedance, the internal weak
          pull-up/pull-down will determine the default input level of these strapping pins.
          To change the strapping bit values, users can apply the external pull-down/pull-up resistances, or use the host
          MCU’s GPIOs to control the voltage level of these pins when powering on ESP32-S2.
          After reset, the strapping pins work as normal-function pins.<br/><br/>
          Refer to Table  for a detailed boot-mode configuration of the strapping pins.

          </p>
          <img src={img1} alt="" />
          <h3 style={{margin:'10px 0', lineHeight:'1.8'}}>
          Note:
          </h3>
          <p style={{fontSize:"20px" , margin:'10px 20px 10px', lineHeight:'1.8'}}>
          1. The functionality of strapping pin GPIO45 to select VDD_SPI voltage may be disabled by setting VDD_SPI_FORCE<br/>
          eFuse to 1. In such a case the voltage is selected with eFuse bit VDD_SPI_TIEH.<br/>
          2. Since ESP32-S2FH2, ESP32-S2FH4, ESP32-S2FN4R2, and ESP32-S2R2 come with both/either 3.3 V SPI flash and/or PSRAM, VDD_SPI must be configured to 3.3 V.<br/>
          3. The strapping combination of GPIO46 = 1 and GPIO0 = 0 is invalid and will trigger unexpected behavior.<br/>
          4. ROM code can be printed over U0TXD (by default) or DAC_1, depending on the eFuse bit.<br/>
          5. When eFuse UART_PRINT_CONTROL value is: 0, print is normal during boot and not controlled by GPIO46.<br/>
          1 and GPIO46 is 0, print is normal during boot; but if GPIO46 is 1, print is disabled.<br/>
          2 and GPIO46 is 0, print is disabled; but if GPIO46 is 1, print is normal.<br/>
          3, print is disabled and not controlled by GPIO46.<br/>
          </p>
          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession6;