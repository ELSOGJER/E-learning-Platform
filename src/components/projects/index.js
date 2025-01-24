import React from 'react'
import './style.css'
import img1 from "./images/pic1.webp" 
import img2 from "./images/pic2.jpg"
import img3 from "./images/pic3.jpg"
import img4 from "./images/pic4.jpg"
import img5 from "./images/pic5.jpg"
import img6 from "./images/pic6.jpg"
import img7 from "./images/Control-Stepper-Motor-ESP32-Web-Server-HTML-Forml.jpg"
import img8 from "./images/pic7.jpg"
import img9 from "./images/Control-Stepper-Motor-ESP32-Web-Server-Websocket.jpg"
import img10 from "./images/pic8.jpg"
import img11 from "./images/ESP32-WebSerial-Remote-Serial-Monitor-Web-basedl.jpg"
import img12 from "./images/pic12.jpg"
import Header from '../header'
import Footer from '../footer'
import { Link } from 'react-router-dom'
const Project = () => {
  return (
    <div>
      <Header />
      <div className="container projects">
        <h2 className="text-center  fw-bold heading-section">Projects</h2>

        <div className="row justify-content-evenly mt-5">
          
          <div className="card col-md-3 col-sm-12 card-hover">
            <Link to="/project1">
              <img src={img1} class="card-img-top " alt="..." />
              <div className="card-body">
                <p className="fs-5">
                  ESP32 Door Status Monitor with Telegram Notifications
                </p>
              </div>
              <div className="fs-5 fw-bolder text-end me-5">
                <p>Beginner</p>
              </div>
            </Link>
          </div>

          <div className="card col-md-3 offset-md-0 col-sm-12 d-flex flex-column card-hover">
          <Link to="/project2">
            <img src={img2} class="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
              ESP32: Getting Started with Firebase (Realtime Database)
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>
          <div className="card col-md-3 offset-md-0 col-sm-12  card-hover">
          <Link to="/project3">
            <img src={img3} class="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
              ESP32 Interrupt Tutorial
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>

          <div className="card col-md-3 col-sm-12  card-hover">
          <Link to="/project4">
            <img src={img4} className="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
              Interfacing SIM800L GSM/GPRS Module with ESP32
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>

          <div className="card col-md-3 offset-md-0 col-sm-12 card-hover">
            <Link to="/project5">
            <img src={img5} className="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
              Getting Started with Bluetooth Classic on ESP32
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>

          <div className="card col-md-3 offset-md-0 col-sm-12  card-hover">
          <Link to="/project6">
            <img src={img6} class="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
              ESP32 Based Internet Radio using MAX98357A I2S Amplifier Board
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>

          <div className="card col-md-3 col-sm-12  card-hover">
          <Link to="/project2">
            <img src={img7} class="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
                Control-Stepper-Motor-ESP32-Web-Server-HTML-Forml
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>
          <div className="card col-md-3 offset-md-0 col-sm-12 card-hover">
          <Link to="/project6">
            <img src={img8} class="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
              Building a Voice Controlled Home Automation System with Arduino
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>
          <div class="card col-md-3 offset-md-0 col-sm-12  card-hover">
          <Link to="/project1">
            <img src={img9} className="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
              Control-Stepper-Motor-ESP32-Web-Server-Websocket
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>

          <div className="card col-md-3 offset-md-0 col-sm-12  card-hover">
          <Link to="/project2">
            <img src={img10} class="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
              Building a DIY LED Webserver with ESP32: A Step-by-Step Tutorial
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>
          <div className="card col-md-3 offset-md-0 col-sm-12  card-hover">
          <Link to="/project3">
            <img src={img11} class="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
                ESP32-WebSerial-Remote-Serial-Monitor-Web-basedl
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>
          <div className="card col-md-3 offset-md-0 col-sm-12  card-hover">
          <Link to="/project4">
            <img src={img12} class="card-img-top " alt="..." />
            <div className="card-body">
              <p className="fs-5">
                Creating Tetris Game with Arduino and OLED Display
              </p>
            </div>
            <div className="fs-5 fw-bolder text-end me-5">
              <p>Beginner</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;