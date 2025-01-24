import React, { useEffect, useState } from 'react'
import img1 from './images/RISC-V.png';
import img2 from './images/截屏2021.png';
import img3 from './images/51yhS+nygsL.jpg';
import img4 from './images/屏幕快照.png';
import img5 from './images/41utK-VJVbL-1.jpg';
import img6 from './images/截屏2022.png';
import img7 from './images/61cXI2nqW3L.jpeg';
import img8 from './images/Kick-Start.jpg';
import img9 from './images/41W5kHSX8GL.jpeg';
import Footer from "../footer";
import Header from "../header";
import './style.css'
import axios from 'axios';
import { useUserContext } from '../../context/GlobalState';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
const Books = () => {
  
  const [loading,setLoading] = useState(true)
  const[books , setBooks] = useState([]);
  
  useEffect(()=>{
    const getFromFirebase = [];
    const allBooks = db.collection('Books').onSnapshot((querySnapshot)=>{
       querySnapshot.forEach((doc)=>{
        getFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
        setBooks(getFromFirebase);
        setLoading(false)
       })
    })
    return ()=> allBooks();
  },[]);
   if(loading){
    <h1>loading.....</h1>
   }
  return (
    <div>
      <Header />

      <div className="container" id="books">
        <h2 className="text-center fw-bold  heading-section">Books</h2>

        
        {books.map((book)=>(
          <div className="row container mt-5" key={book.key}>
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4 img__editing">
                  <img src={book.img} alt="" class="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5 className='heading__book'>{book.name}</h5>
                  <p className='disc__book'>
                    {book.disc}
                  </p>
                  {/* <div>
                    <ul className="list-unstyled">
                      <li>Author: {book.author} </li>
                      <li>Publisher: {book.publisher} </li>
                      <li>Language: {book.language} </li>
                      <li>Last Updated: {book.lastU}</li>
                    </ul>
                  </div> */}
                  <Link to={book.file} download={book.file}><button type="button"  className='btn__download'>Download</button></Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}

        {/* <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img1} alt="" class="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5>
                    RISC-V Assembly Language Programming using ESP32-C3 and QEMU
                  </h5>
                  <p>
                    The availability of the Espressif ESP32-C3 chip provides a
                    way to get hands-on experience with RISC-V. The open-source
                    QEMU emulator adds a 64-bit experience in RISC-V under
                    Linux. These are just two ways for the student and
                    enthusiast alike to explore RISC-V in this book. The
                    projects in this book are boiled down to the barest
                    essentials to keep the assembly language concepts clear and
                    simple.
                  </p>
                  <div>
                    <ul className="list-unstyled">
                      <li>Author: Warren Gay </li>
                      <li>Publisher: Elektor </li>
                      <li>Language: English </li>
                      <li>Last Updated: 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img2} alt="" class="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5>Getting Started with ESPHome</h5>
                  <p>
                    This book demonstrates how to create your own home
                    automation devices with ESPHome on an ESP32 microcontroller
                    board. You’ll learn how to combine all kinds of electronic
                    components and automate complex behaviours. Your devices can
                    work completely autonomously, and connect over Wi-Fi to your
                    home automation gateways such as Home Assistant or MQTT
                    broker.
                  </p>
                  <div>
                    <ul className="list-unstyled">
                      <li>Author: Koen Vervloesem </li>
                      <li>Publisher: Elektor </li>
                      <li>Language: English </li>
                      <li>Last Updated: 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img3} alt="" class="w-75" />
                </div>
                <div class="col-8 pt-4">
                  <h5>ESP32 WiFi Scanner in Arduino IDE on Windows10</h5>
                  <p>
                    This book aims to make and code a Wifi scanner with an ESP32
                    board and OLED screen using the Arduino IDE and Windows 10.
                  </p>
                  <div>
                    <ul class="list-unstyled">
                      <li>Author: Al McDivitt </li>
                      <li>Publisher: Access Resource Group </li>
                      <li>Language: English </li>
                      <li>Last Updated: 2019</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img4} alt="" class="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5>Building Wireless Sensor Networks with ESP32 LoRa</h5>
                  <p>
                    This is a practical book how to implement a simple Wireless
                    Sensor Networks (WSN) with ESP32 over LoRa network.
                  </p>
                  <div>
                    <ul className="list-unstyled">
                      <li>Author: Agus Kurniawan</li>
                      <li>Publisher: Kindle edition</li>
                      <li>Language: English </li>
                      <li>Last Updated: 2019</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img5} alt="" class="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5>Getting Started with ESPHome</h5>
                  <p>
                    This book will serve as a fundamental guide for developing
                    an ESP32 program. We will start with GPIO programming
                    involving some sensor devices. Then we will study ESP32
                    development by building a number of IoT projects, such as
                    weather stations, sensor loggers, smart homes, Wi-Fi cams
                    and Wi-Fi wardriving. Lastly, we will enable ESP32 boards to
                    execute interactions with mobile applications and cloud
                    servers such as AWS. By the end of this book, you will be up
                    and running with various IoT project-based ESP32 chip.
                  </p>
                  <div>
                    <ul className="list-unstyled">
                      <li>Author: Koen Vervloesem</li>
                      <li>Publisher: Elektor</li>
                      <li>Language: English </li>
                      <li>Last Updated: 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img6} alt="" class="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5>ESP32 Development using the Arduino IDE</h5>
                  <p>
                    This book is designed to help readers to get started with
                    Arduino development on ESP32 boards.
                  </p>
                  <div>
                    <ul className="list-unstyled">
                      <li>Author: Iain hendry</li>
                      <li>Publisher: Amazon Media EU S.à r.l.</li>
                      <li>Language: English </li>
                      <li>Last Updated: 2019</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img7} alt="" class="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5>The Ultimate Guide to Informed Wearable Technology</h5>
                  <p>
                    This book takes you on an interesting journey through
                    wearable technology, starting from electronic circuits,
                    materials, and e-textile toolkits to using Arduino, which
                    includes a variety of sensors, outputs, actuators, and
                    microcontrollers such as Gemma M0 and ESP32. As you
                    progress, you'll be carefully guided through creating an
                    advanced IoT project.
                  </p>
                  <div>
                    <ul className="list-unstyled">
                      <li>Author: Christine Farion</li>
                      <li>Publisher: Packt Publishing</li>
                      <li>Language: English </li>
                      <li>Last Updated: 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img8} alt="" class="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5>Kick-Start to MicroPython using ESP32 / ESP8266</h5>
                  <p>
                    MicroPython is the recreated version of Python 3 that runs
                    in the memory restricted microcontrollers with a minimum of
                    256KB of ROM and 16KB of RAM. MicroPython supports chips
                    like ESP32, ESP8266, STM32, nRF52, W600, etc.
                  </p>
                  <div>
                    <ul className="list-unstyled">
                      <li>Author: Koen Vervloesem</li>
                      <li>Publisher: Elektor</li>
                      <li>Language: English </li>
                      <li>Last Updated: 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row container mt-5">
          <div className="col-12">
            <div className="inner">
              <div className="d-flex bg-light book-info border">
                <div className="col-4">
                  <img src={img9} alt="" className="w-75" />
                </div>
                <div className="col-8 pt-4">
                  <h5>Arduino Sketch for ESP32 Development Workshop</h5>
                  <p>
                    This book is designed to help readers to get started with
                    Arduino development with Sketch program on ESP32 boards. You
                    will learn the following topics in this book: Preparing
                    Development Environment , Sketch Programming, Working with
                    UART- Serial Communication, Working with Analog Input and
                    PWM, Working with SPI Working with I2C, ESP32 WiFi
                    Networking and IoT Application, Working with EEPROM
                  </p>
                  <div>
                    <ul className="list-unstyled">
                      <li>Author: Agus Kurniawan</li>
                      <li>Publisher: PE Press</li>
                      <li>Language: English </li>
                      <li>Last Updated: 2018</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="container text-center mt-5 w-25">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">last</th>
              <th scope="col" className="active">
                1
              </th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col" className="active">
                next
              </th>
            </tr>
          </thead>
        </table>
      </div> */}
      <Footer />
    </div>
  );
}

export default Books;