import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
function ScrollBar() {
  return (
    <div id="list-example" class="list-group  bg-black shadow">
            <h3 class="list-group-item list-group-item-action fw-bold text-center fs-5 heading-tot">
              ESP32 Tutorial
            </h3>

            <Link class="text-decoration-none text-black" to="/session_micro">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 1
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Micro Controller</span>
                </i>
              </div>
            </Link>

            <Link class="text-decoration-none text-black" to="/session1">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 2
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Introduction</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session2">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 3
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Complete Features</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session3">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 4
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32 Specifications</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session4">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 5
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32 Boards</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session5">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 6
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32 DEVKIT DOIT</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session6">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 7
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Programming ESP32</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session7">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 8
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32 Boards</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session2">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 9
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Complete Boards</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session4">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 10
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32 Projects</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session6">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 11
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32 & ESP8266</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/session_micro">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 12
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32 Uses</span>
                </i>
              </div>
            </Link>
            
          </div>
  )
}

export default ScrollBar;