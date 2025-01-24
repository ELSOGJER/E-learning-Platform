import React, { useState } from 'react';
// import './style.css'
import img1 from "./images/Picture1.png";
import img2 from "./images/Picture2.jpg";
import img3 from "./images/picture3.png";
import Header from '../../header';
import Footer from '../../footer';
import ScrollBar from '../scrollBar';
const FamilySession2 = () => {
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


        <div class=" content offset-3">
          <h3>Pin Layout</h3>
          <p style={{fontSize:"20px" , margin:"10px 20px 10px"}}>Top and Side View of ESP-32S in Figure</p>
          <img src={img1} alt="" />

          <h3>ESP-32S Dimensions</h3>
          <table style={{fontSize:"20px" , textAlign:"center", marginTop:"30px"}}>
            <tr style={{fontWeight:"bolder"}}>
                <th>Length</th>
                <th>Width</th>
                <th>Height</th>
                <th>PAD Size(Bottom)</th>
                <th>Pin Pitch</th>
                <th>Shielding can height</th>
                <th>PCB thickness</th>
            </tr>
            <tr >
                <th style={{fontWeight:'normal'}}>18 mm</th>
                <th style={{fontWeight:'normal'}}>25.5 mm</th>
                <th style={{fontWeight:'normal'}}>2.8±0.1 mm</th>
                <th style={{fontWeight:'normal'}}>0.45 mm x 0.9 mm</th>
                <th style={{fontWeight:'normal'}}>1.27 mm</th>
                <th style={{fontWeight:'normal'}}>2 mm</th>
                <th style={{fontWeight:'normal'}}>0.8±0.1 mm</th>
            </tr>
          </table>
          <h3>Pin Description</h3>
          <p style={{fontSize:"20px" , margin:"10px 20px 10px"}}>ESP32-S has 38 pins.</p>
          <img src={img2} alt="" style={{width:"75%" , height:"500px"}}/>
          <table>
            <tr style={{textAlign:"center"}}>
                <th style={{width:"10%"}}>Num</th>
                <th style={{width:"30%"}}>Pin Name</th>
                <th>Function</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>1</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>GND</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>Ground</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>2</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>3V3</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>Power supply</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>3</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>EN</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>Chip-enable signal. Active high</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>4</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>SENSOR_VP </th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPI36, SENSOR_VP, ADC_H, ADC1_CH0, RTC_GPIO0</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>5</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>SENSOR_VN</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPI39, SENSOR_VN, ADC1_CH3, ADC_H, RTC_GPIO3</th>

            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>6</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO34</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPI34, ADC1_CH6, RTC_GPIO4</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>7</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO35</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPI35, ADC1_CH7, RTC_GPIO5</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>8</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO32</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO32, XTAL_32K_P (32.768 kHz crystal oscillator input),
ADC1_CH4,
TOUCH9, RTC_GPIO9
</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>9</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO33</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO33, XTAL_32K_N (32.768 kHz crystal oscillator output),
ADC1_CH5,
TOUCH8, RTC_GPIO8
</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>10</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO25</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO25, DAC_1, ADC2_CH8, RTC_GPIO6, EMAC_RXD0</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>11</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO26 </th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO26, DAC_2, ADC2_CH9, RTC_GPIO7, EMAC_RXD1</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>12</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO27</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO27, ADC2_CH7, TOUCH7, RTC_GPIO17, EMAC_RX_DV</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>13</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO14</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO14, ADC2_CH6, TOUCH6, RTC_GPIO16, MTMS, HSPICLK,
HS2_CLK,
SD_CLK, EMAC_TXD2
</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>14</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO12</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO12, ADC2_CH5, TOUCH5, RTC_GPIO15, MTDI, HSPIQ,HS2_DATA2,
SD_DATA2, EMAC_TXD3
</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>15</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>GND</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>Ground</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>16</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO13</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO13, ADC2_CH4, TOUCH4, RTC_GPIO14, MTCK, HSPID,
HS2_DATA3,
SD_DATA3, EMAC_RX_ER
</th>
            </tr>
            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>17</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>SHD/SD2</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO9, SD_DATA2, SPIHD, HS1_DATA2, U1RXD</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>18</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>SHD/SD3</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO10, SD_DATA3, SPIWP, HS1_DATA3, U1TXD</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>19</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>SCS/CMD</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO11, SD_CMD, SPICS0, HS1_CMD, U1RTS</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>20</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>SCK/CLK</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO6, SD_CLK, SPICLK, HS1_CLK, U1CTS</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>21</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>SDO/SD0</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO7, SD_DATA0, SPIQ, HS1_DATA0, U2RTS</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>22</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>SDI/SD1</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO8, SD_DATA1, SPID, HS1_DATA1, U2CTS</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>23</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO15</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO15, ADC2_CH3, TOUCH3, MTDO, HSPICS0, RTC_GPIO13,
HS2_CMD,
SD_CMD, EMAC_RXD3
</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>24</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO2</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO2, ADC2_CH2, TOUCH2, RTC_GPIO12, HSPIWP, HS2_DATA0,
SD_DATA0
</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>25</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO0</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO0, ADC2_CH1, TOUCH1, RTC_GPIO11, CLK_OUT1,
EMAC_TX_CLK
</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>26</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO4</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO4, ADC2_CH0, TOUCH0, RTC_GPIO10, HSPIHD, HS2_DATA1, SD_DATA1, EMAC_TX_ER</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>27</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO16</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO16, HS1_DATA4, U2RXD, EMAC_CLK_OUT</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>28</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO17</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO17, HS1_DATA5, U2TXD, EMAC_CLK_OUT_180</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>29</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO5</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO5, VSPICS0, HS1_DATA6, EMAC_RX_CLK</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>30</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO18</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO18, VSPICLK, HS1_DATA7</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>31</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO19</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO19, VSPIQ, U0CTS, EMAC_TXD0</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>32</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>NC</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>--</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>33</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO21</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO21, VSPIHD, EMAC_TX_EN</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>34</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>RXD0</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO3, U0RXD, CLK_OUT2</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>35</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>TXDO</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO1, U0TXD, CLK_OUT3, EMAC_RXD2</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>36</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO22</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO22, VSPIWP, U0RTS, EMAC_TXD1</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>37</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>IO23</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>GPIO23, VSPID, HS1_STROBE</th>
            </tr>

            <tr>
                <th style={{width:"10%", fontWeight:"normal", fontSize:"19px"}}>38</th>
                <th style={{width:"30%", fontWeight:"normal", fontSize:"19px"}}>GND</th>
                <th style={{width:"70%", fontWeight:"normal", fontSize:"19px"}}>Ground</th>
            </tr>
          </table>
          <img src={img3} alt="" style={{margin:"50px 0" , width:"100%" ,height:"fit-content"}}/>


          <div className="session-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySession2;