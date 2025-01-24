import React from 'react'
import { Link } from "react-router-dom";
import img1 from "./images/esp1.jpg";
import img2 from "./images/iot-1200x900-.jpg";
import Header from '../header';
import Footer from '../footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const Courses = () => {
  return (
    <div>
      <Header />
      <div className="container courses">
        <h2 className="text-center text-primary fw-bold heading-section">
          Main Courses
        </h2>
        {/* 1 */}
        <div className="all-courses">
          <div className="container-link">
            <Link to="/session1">
              <div className="card">
                <div className="image">
                  <img src={img1} className="card-img-top " alt="..." />
                </div>
                <div className="card-body">
                  <p className="text-primary fs-5 fw-bolder">ESP32 tutorial</p>
                </div>
                <div className="d-flex text-warning fs-5 ms-3">
                  <i className="fas fa-star"></i>

                  <i className="fas fa-star"></i>

                  <i className="fas fa-star"></i>

                  <i className="fas fa-star"></i>

                  <i className="fas fa-star-half"></i>
                </div>
                <div className="text-primary fs-5 fw-bolder text-end me-5">
                  <p>Free</p>
                </div>
              </div>
            </Link>
          </div>
          {/* 2 */}
          <div className="container-link">
            <Link to="/family_session1">
              <div className="card">
                <div className="image">
                  <img src={img2} className="card-img-top " alt="..." />
                </div>
                <div className="card-body">
                  <p className=" text-primary fs-5 fw-bolder">
                  Family of ESP32
                  </p>
                </div>
                <div className="d-flex text-warning fs-5 ms-3">
                  <i className="fas fa-star"></i>

                  <i className="fas fa-star"></i>

                  <i className="fas fa-star"></i>

                  <i className="fas fa-star"></i>

                  <i className="fas fa-star-half"></i>
                </div>
                <div class="text-primary fs-5 fw-bolder text-end me-5">
                  <p>Free</p>
                </div>
              </div>
            </Link>
          </div>

          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses