import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
function ScrollBar() {
  return (
    <div id="list-example" class="list-group  bg-black shadow">
            <h3 class="list-group-item list-group-item-action fw-bold text-center fs-5 heading-tot">
              Family of ESP32 Tutorial
            </h3>

            <Link class="text-decoration-none text-black" to="/family_session1">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 1
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-S Overveiw</span>
                </i>
              </div>
            </Link>

            <Link class="text-decoration-none text-black" to="/family_session2">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 2
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Pin Definitions</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session3">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 3
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Strapping Pins</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session4">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 4
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-S2</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session5">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 5
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-S2 Pins</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session6">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 6
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Complete Pins</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session7">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 7
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-S3</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session8">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 8
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-S3 Pins</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session9">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 9
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">Complete Pins</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session6">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 10
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-C3</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session4">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 11
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-C3 Pins</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session9">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 12
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-C6</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session3">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 13
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-C6 Pins</span>
                </i>
              </div>
            </Link>
            <Link class="text-decoration-none text-black" to="/family_session1">
              <div class="d-flex justify-content-between list-group-item list-group-item-action session">
                session 14
                <i class="fa fa-play">
                  <span class="fs-6 ms-3">ESP32-H2</span>
                </i>
              </div>
            </Link>
            
            
          </div>
  )
}

export default ScrollBar;