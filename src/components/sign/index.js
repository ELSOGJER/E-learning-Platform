import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Footer from "../footer";
import personIcon from "./images/icon-person.svg";
import Header from "../header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "../../context/GlobalState";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// window.axios = axios;
// let token = document.head.querySelector('meta[name="csrf-token"]');
// if (token) {
//   window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//   console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

const SignUp = () => {
  const [name , setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setconPassword] = useState("");
  const [error, setError] = useState('');
  const nameError = React.useRef(null);
  const emailError = React.useRef(null);
  const passwordError = React.useRef(null);
  const navigate = useNavigate();
  const { dispatch } = useUserContext();

  const register = (e) => {
    e.preventDefault();
    
    const addStudent = ()=>{
      createUserWithEmailAndPassword(auth,email,password).then((cred)=>{
        db.collection("SignUpReg").doc(cred.user.uid).set({
            Name: name,
            Email: email,
            Password: password,
        }).then(()=>{
            navigate('/')
        }).catch(error=>(setError(error.message)));
    }).catch(error=> setError(error.message));
    
    }

    // start validition //
    let isDataOk = true;
    // Resetting values of error texts
    nameError.current.textContent = "";
    emailError.current.textContent = "";
    passwordError.current.textContent = "";

    // Name length [3, 25]
    // Telephone must be 11 characters starting with 010 or 012
    // Email must be unique

    // Making Errors
    // Name Error
    if (!name || name.length < 3 || name.length > 25) {
      nameError.current.textContent = "Your name must be greater than 2 char and have not space";
      isDataOk = false;
    }else{
      setName(name);
    }
    // Email Error
    if (!email ||
      !email.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)
      )
      {
      if(error===400){
        emailError.current.textContent = "Email is already exist";
      }
      emailError.current.textContent = "Please enter valied email";
      isDataOk = false;
      
    }else{
      setEmail(email);
    }
    // Password Error
    if (!password || password.length < 6) {
      passwordError.current.textContent = "Password length must be greater than 6 characters";
      isDataOk = false;
    }else{
      setPassword(password);
    }
    //conPassword
    if (password !== conpassword) {
      passwordError.current.textContent = "The password not idintacally";
      isDataOk = false;
    }else{
      setconPassword(conpassword);
    }

    // Submiting data
    if (isDataOk) {
      toast.success("تم إنشاء الحساب بنجاح 🎉", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      addStudent(); 
    } else {
      toast.error("خطأ فى تسجيل الدخول ❌", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    
  };


    


    // axios.post("http://127.0.0.1:8000/api/register",{
    //   name: "mohamed",
    //   email: "example@test.com",
    //   password: "123456**",
    //   conpassword: "123456**"
    // },{
    //   headers:{
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    //     "Content-Type": "application/json",
    //   }
    // },{
    // }).then((res)=>{
    //   console.log(res.data)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })


    

  // const data = {
  //   name: name,
  //   email: email,
  //   password:password,
  //   password_confirmation: conpassword,
  // }
  // async function addStudent(){
  //   axios.defaults.baseURL = 'http://127.0.0.1:8000/';
  //   axios.get("sanctum/csrf-cookie",{withCredentials:true});
  //   axios.defaults.withCredentials = true;
  //   axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    
  //   axios.get("sanctum/csrf-cookie",{
  //     headers:{
  //       'X-Requested-With': 'XMLHttpRequest',
  //     },
  //   }).then(async()=>{
  //     await axios.post("api/register",data,
  //     {
  //       withCredentials:true,
  //     })
  //     .then((res)=>{
  //       localStorage.setItem('token', res.data.token)
  //       dispatch({ type: 'SET_USER' });
  //       navigate('/');
  //     })
  //     .catch((error)=>{
  //       console.log(error)
  //     })
  //   })

      // old axios //////////////////////////
    // const response = await axios
    //   .post(`http://127.0.0.1:8000/api/register`, data,{
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // Accept:"application/json",
    //       // "xsrf-token": csrfTokenState,
    //     }

    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    //     setconPassword("");
    //     dispatch({ type: 'SET_USER' });
    //     navigate('/');
    //   })
    //   .catch((err) => console.log(err));
        // console.log(response.data);
  // }

  // axios.interceptors.response.use(undefined,(error)=>{
  //   if(error.message === 'network error' && !error.response){
  //     toast.error('Network error - make sure API is running!')
  //   }
  //   const{status,data, config} = error.response;
  //   if(status===404){
  //     navigate('/not found')
  //   }
  //   if(status === 400 && config.method === 'post' && data.errors.hasOwnProperty('id')){
  //     navigate('/Not found')
  //   }
  //   if(status===500){
  //     toast.error('Server error - Check the terminal')
  //   }
  // })
  return (
    <div>
      <Header />
      <div className="container-log">
        <div className="cap line-sign">
          <div className="icons">
            <img src={personIcon} alt="" />
          </div>
          <div className="text ">
            <div>
              <h3>Sign up</h3>
            </div>
          </div>
        </div>
      <form onSubmit={(e) => register(e)}>
        <div className="contentForm">
          {/* <div className="input-box">
            <button className="google-btn">
              <img src={googleIcon} alt="" />
              <span>Containue with google</span>{" "}
            </button>
          </div> */}
          
          <div className="input-box">
            <input
              type="string" 
              id="name"
              name="Username"
              required="required"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-danger" ref={nameError}></p>
          </div>
          <div className="input-box">
            <input
              type="email"
              id="email"
              name="Email"
              required="required"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-danger" ref={emailError}></p>
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              name="Password1"
              required="required"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-danger" ref={passwordError}></p>
            <input
              type="password"
              id="con-password"
              name="Password2"
              required="required"
              placeholder="Password"
              value={conpassword}
              onChange={(e) => setconPassword(e.target.value)}
            />
          </div>
          <div className="input-box register">
            <button
              onClick={register}
              type="submit"
              name=""
              required="required"
              className="submit"
            
            >
              Sign Up
            </button>
          </div>
        
          <p className="have">
            Don't have an account..? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;