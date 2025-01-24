import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from "axios";
import { useUserContext } from "../../context/GlobalState";
import { auth, currentUser, db } from "../../firebase";




const Header = () => {
  const {user , isLoggedIn, dispatch} = useUserContext();
    const [navServiceClicked , setNavServiceClicked] = useState(false);
    const [navModulesClicked, setNavModulesClicked] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
    
    const [clicked , setClicked] = useState(false);
    const handleMenuClicked = () =>{
        setClicked(!clicked)
    }
    const handlenavServiceClicked = () => {
      setNavServiceClicked(!navServiceClicked);
    };
    const handlenavModulesClicked = () => {
      setNavModulesClicked(!navModulesClicked);
    };
    const handleSearchClicked = () => {
      setSearchClicked(!searchClicked);
      // document.getElementsByClassName("input-search").focus();
    };
    // window.onscroll = () =>{
    //   setClicked(clicked === false);
    //   setSearchClicked(searchClicked == true);

    // }
  const navigate = useNavigate();
  const handleSingOut = () => {
    auth.signOut().then(dispatch({ type: 'REMOVE_USER' }))
  };

    const[users , setUsers] = useState([]);
    const getFromFirebase = useState([]);
    useEffect(()=>{
      
      const user = db.collection('SignUpReg').onSnapshot((querySnapshot)=>{
         querySnapshot.forEach((doc)=>{
          getFromFirebase.push({
            ...doc.data(),
            key: doc.id,
          });
          setUsers(getFromFirebase);
         })
      })
      return ()=> user();
    },[]);
    let profName = '';
    let displayName = () =>{
      user ? 
        users.filter((currentUsers=> currentUsers.key === user.uid)).map(current=>{
          console.log(current.Email);
            profName = current.Name;
        }):
        console.log('not user');
        return profName
    }
    

    
    // console.log(user.uid)

    // console.log(singleDocs);

    // if(isLoggedIn===true){
    //   axios.get('http://localhost:8000/api/v1/data/', {
    //     headers: {
    //       Authorization: `Token ${Cookies.get('auth_token')}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data); 
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // }
  

  // const handleSingOut = (e) => {
  //     const response = axios.post('http://127.0.0.1:8000/api/logout/',{
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then((res) =>{
  //       console.log(res.data);
  //       navigate('/login')
  //       dispatch({ type: 'REMOVE_USER' });
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <div className="header ">
      <div className="container for-style">
        <nav className="bg-light">
          <Link to="/">
            <h3>
              ESP<span>32</span>
            </h3>
          </Link>
          <div>
            <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li className="container-items" onClick={handlenavServiceClicked}>
                Service
                <ul
                  id="bg-light"
                  className={navServiceClicked ? "menu active" : "menu"}
                >
                  <li id="li">
                    <Link to="/courses" className="item i1">
                      Courses
                    </Link>
                  </li>
                  <li id="li">
                    <Link to="/books" className="item i1">
                      Books
                    </Link>
                  </li>
                  <li id="li">
                    <Link to="/projects" className="item i1">
                      Project
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="container-items" onClick={handlenavModulesClicked}>
                Modules
                <ul
                  id="bg-light"
                  className={navModulesClicked ? "menu active" : "menu"}
                >
                  <li id="li">
                    <Link to="/moduleEsp" className="item i1">
                      ESP32
                    </Link>
                  </li>
                  <li id="li">
                    <Link to="/moduleEsp-s" className="item">
                      ESP32-S
                    </Link>
                  </li>
                  <li id="li">
                    <Link to="/moduleEsp-c" className="item">
                      ESP32-C
                    </Link>
                  </li>
                  <li id="li">
                    <Link to="/Esp32-CH" className="item">
                      ESP32-H
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="mobile-none" onClick={handleSearchClicked} >
                <i className="fas fa-search search-icon" ></i>
              </li>
  
              <li className="line">
                {user? <Link to="" className="display__name" disabled>Hi {displayName()}</Link>
                : 
                <Link to="/login">login</Link>
                }
              </li>

              
              <li className="sign">
                {user ? <Link to="/login" onClick={handleSingOut}>
                  Sign Out
                </Link>:
                <Link to="/sign" >
                 Sign Up
              </Link>}
              </li> 
            </ul>
          </div>

          {/* menu icon */}

          <div id="mobile">
            <i className="fas fa-search " onClick={handleSearchClicked}></i>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
              onClick={handleMenuClicked}
            ></i>
          </div>
          <div
            className={
              searchClicked
                ? "searchBox bg-light active"
                : "searchBox bg-light "
            }
          >
            {/* search inout */}
            <input
              type="search"
              placeholder="Search here . . . . "
              className="input-search"
            />
          </div>
          <div
            className={searchClicked ? "icons active mobile-close" : "icons"}
          >
            <i class="fa fa-search" aria-hidden="true"></i>
            <i
              class="fa fa-times-circle"
              aria-hidden="true"
              onClick={handleSearchClicked}
            ></i>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
