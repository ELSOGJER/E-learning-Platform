import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Header from "./components/header";
import Slider from "./components/slider";
import OverviewWhoWeAre from "./components/Overview&who";
import Footer from "./components/footer";
import SignUp from "./components/sign";
import Courses from "./components/courses";
import { auth } from "./firebase";
import { useUserContext } from "./context/GlobalState";
import ContactUs from "./components/contactUs";
import Log from "./components/login";
import ModuleEsp32 from "./components/moduless/esp32";
import ModuleEsp32S from "./components/moduless/esp32-s";
import ModuleEsp32C from "./components/moduless/esp32-c";
import Books from "./components/books";
import Project from "./components/projects";
import Session1 from "./components/sessions/session1";
import Session2 from "./components/sessions/session2";
import Session_micro from "./components/sessions/session_micro";
import Session3 from "./components/sessions/session3";
import Session4 from "./components/sessions/session4";
import Session5 from "./components/sessions/session5";
import Session6 from "./components/sessions/sessions6";
import FamilySession1 from "./components/familySessions/familySession1";
import FamilySession2 from "./components/familySessions/familySession2";
import FamilySession3 from "./components/familySessions/familySession3";
import FamilySession4 from "./components/familySessions/familySession4";
import FamilySession5 from "./components/familySessions/familySession5";
import FamilySession6 from "./components/familySessions/familySession6";
import FamilySession7 from "./components/familySessions/familySession7";
import FamilySession8 from "./components/familySessions/familySession8";
import FamilySession9 from "./components/familySessions/familySession9";
import Project1 from "./components/projects/project1";
import Project2 from "./components/projects/project2";
import Project3 from "./components/projects/project3";
import Project4 from "./components/projects/project4";
import Project5 from "./components/projects/project5";
import Project6 from "./components/projects/project6";
import Esp3S2 from "./components/moduless/esp32-s/ESP32-S2";
import Esp3S3 from "./components/moduless/esp32-s/ESP32-S3";
import Esp3C2 from "./components/moduless/esp32-c/esp32-c2";
import Esp3C3 from "./components/moduless/esp32-c/esp32-c3";
import Esp3C6 from "./components/moduless/esp32-c/esp32-c6";
import Esp3CH from "./components/moduless/esp32-c/esp-h";


const App = () => {
  const { user,isLoggedIn,dispatch } = useUserContext();
  isLoggedIn ? console.log(`log in ${user.uid}` ) : console.log(`not`);
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
    });
  }, []);
  
  // axios.get("http://localhost:8000/sanctum/csrf-cookie/",{withCredentials:true})
  // axios.defaults.baseURL= "http://localhost:8000/";
  // axios.defaults.headers.post['Content-Type'] ='application/json';
  // axios.defaults.headers.post['Accept'] ='application/json';
  // axios.defaults.withCredentials = true;
  // axios.interceptors.request.use(function (config) {
  //   const token = localStorage.getItem('auth_token');
  //   config.headers.Authorization = token ? 'Bearer ${}':'';
  //   return config;
  // });
  

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Slider />
              <OverviewWhoWeAre />
              <Footer />
              {/* <Home /> */}
            </>
          }
        />
        <Route
          path="/courses"
          element={
            <>
              <Courses />
            </>
          }
        />
        <Route
          path="/books"
          element={
            <>
              <Books />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Project />
            </>
          }
        />
        <Route
          path="/moduleEsp"
          element={
            <>
              <ModuleEsp32 />
            </>
          }
        />
        <Route
          path="/moduleEsp-s"
          element={
            <>
              <ModuleEsp32S />
            </>
          }
        />
        <Route
          path="/moduleEsp-c"
          element={
            <>
              <ModuleEsp32C />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactUs />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Log />
            </>
          }
        />
        <Route
          path="/sign"
          element={
            <>
              <SignUp />
            </>
          }
        />
        {/* start sessins esp tutorual routes */}
        <Route
          path="/session_micro"
          element={
            <>
              <Session_micro />
            </>
          }
        />
        <Route
          path="/session1"
          element={
            <>
              <Session1 />
            </>
          }
        />
        <Route
          path="/session2"
          element={
            <>
              <Session2 />
            </>
          }
        />
        <Route
          path="/session3"
          element={
            <>
              <Session3 />
            </>
          }
        />
        <Route
          path="/session4"
          element={
            <>
              <Session4/>
            </>
          }
        />
        <Route
          path="/session5"
          element={
            <>
              <Session5/>
            </>
          }
        />
        <Route
          path="/session6"
          element={
            <>
              <Session6/>
            </>
          }
        />
        {/* start family esp routes */}
        <Route
          path="/family_session1"
          element={
            <>
              <FamilySession1/>
            </>
          }
        />
        <Route
          path="/family_session2"
          element={
            <>
              <FamilySession2/>
            </>
          }
        />
        <Route
          path="/family_session3"
          element={
            <>
              <FamilySession3/>
            </>
          }
        />
        <Route
          path="/family_session4"
          element={
            <>
              <FamilySession4/>
            </>
          }
        />
        <Route
          path="/family_session5"
          element={
            <>
              <FamilySession5/>
            </>
          }
        />
        <Route
          path="/family_session6"
          element={
            <>
              <FamilySession6/>
            </>
          }
        />
        <Route
          path="/family_session7"
          element={
            <>
              <FamilySession7/>
            </>
          }
        />
        <Route
          path="/family_session8"
          element={
            <>
              <FamilySession8/>
            </>
          }
        />
        <Route
          path="/family_session9"
          element={
            <>
              <FamilySession9/>
            </>
          }
        />
        {/* projects Routes */}
        <Route
          path="/project1"
          element={
            <>
              <Project1/>
            </>
          }
        />
        <Route
          path="/project2"
          element={
            <>
              <Project2/>
            </>
          }
        />
        <Route
          path="/project3"
          element={
            <>
              <Project3/>
            </>
          }
        />
        <Route
          path="/project4"
          element={
            <>
              <Project4/>
            </>
          }
        />
        <Route
          path="/project5"
          element={
            <>
              <Project5/>
            </>
          }
        />
        <Route
          path="/project6"
          element={
            <>
              <Project6/>
            </>
          }
        />
        {/* moudels routes */}
        <Route
          path="/esp32-s2"
          element={
            <>
              <Esp3S2/>
            </>
          }
        />
        <Route
          path="/esp32-s3"
          element={
            <>
              <Esp3S3/>
            </>
          }
        />

        <Route
          path="/esp32-c2"
          element={
            <>
              <Esp3C2/>
            </>
          }
        />

        <Route
          path="/esp32-c3"
          element={
            <>
              <Esp3C3/>
            </>
          }
        />

        <Route
          path="/esp32-c6"
          element={
            <>
              <Esp3C6/>
            </>
          }
        />
        <Route
          path="/Esp32-CH"
          element={
            <>
              <Esp3CH/>
            </>
          }
        />
        
        


      </Routes>
      
    </div>
  );
};

export default App;
