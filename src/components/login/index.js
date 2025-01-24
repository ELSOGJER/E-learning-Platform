import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
import Footer from "../footer";
import googleIcon from './images/icons8-google.svg';
import personIcon from './images/icon-person-.svg';
import Header from "../header";
import axios from "axios";
// import Cookies from "universal-cookie";
import { useUserContext } from "../../context/GlobalState";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


const Log = () => {
      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
      const {dispatch } = useUserContext();
      // const cookies = new Cookies();
      const navigate = useNavigate();
      // const [accessToken, setAccessToken] = useState('your_access_token_here');

      


      async function register(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((auth) => {
          if (auth) {
            navigate("/");
          }
        });

        // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
        // axios.defaults.withCredentials = true;
        // axios.defaults.baseURL = 'http://127.0.0.1:8000/'
        // axios.get("sanctum/csrf-cookie",{
        //   headers:{
        //     'X-Requested-With': 'XMLHttpRequest'
        //   },
        //     Credentials: "include", 
        //     mode: 'cors'
        // }).then(async()=>{
        //   await axios.post("api/login ",
        //   {
        //     email: email,
        //     password: password,
        //   },
        //   {
        //     withCredentials:true,
        //   })
        //   .then((res)=>{
        //     localStorage.setItem('token', res.data.token)
        //     dispatch({ type: 'SET_USER' });
        //     navigate('/');
        //   })
        //   .catch((error)=>{
        //     console.log(error)
        //   })
        // })


        // old axois
        // try{
        //   let user = axios.post(`http://localhost:8000/api/v1/dj-rest-auth/login/`, {
        //       username: name,
        //       email: email,
        //       password: password,
        //     });
        //     localStorage.setItem("myToken", user.data);
        //     console.log(user)
        //     navigate('/')
        // }catch (err){
        //   console.log(err)
        // }
        // await axios.post(`http://localhost:8000/api/v1/dj-rest-auth/login/`, {
        //   username: name,
        //   email: email,
        //   password: password,
        // }, {
        //   // withCredentials: true,
        // })
        //   .then((res) => {
        //     const data = res.data;
        //     // savecookies(data.id, data.username);
        //     // console.log(data.username)
        //     Cookies.set('auth_token', res.data.key);
        //     dispatch({ type: 'SET_USER' });
        //     localStorage.setItem("myToken", res.data.accessToken)
        //     navigate("/");
        //     console.log(data);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
          
      }
      
  return (
    <div>
      <Header />
      <div className="container-log">
        <div className="cap">
          <div className="icons">
            <img src={personIcon} alt="" />
          </div>
          <div className="text">
            <div>
              <h3>Login</h3>
            </div>
          </div>
        </div>
      <form onSubmit={(e)=> register(e)}>
        <div className="contentForm">
          {/* <div className="input-box">
            <button className="google-btn">
              <img src={googleIcon} alt="" />
              <span>Containue with google</span>
            </button>
          </div> */}
          {/* <div className="input-box">
            <input
              type="text"
              id="name"
              name=""
              required="required"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div> */}
          <div className="input-box">
            <input
              type="email"
              id="email"
              name=""
              required="required"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              name=""
              required="required"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <a href="#">
              <p>Forget Password...?</p>
            </a>
          </div>
          <div className="input-box">
            <button
              onClick={register}
              type="submit"
              name=""
              required="required"
              class="submit"
            >
              Login
            </button>
          </div>
          <p className="have">
            Don't have an account..? <Link to="/sign">Sign up</Link>
          </p>
        </div>
      </form>
      </div>
      <Footer />
    </div>
  );
}

export default Log