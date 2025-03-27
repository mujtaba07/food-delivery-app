import React from 'react';
import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    // let loginBtn = "Log in"
    let [loginBtn, setLoginBtn] = useState( "Log in")
    let onlineStatus = useOnlineStatus();
    return (
        <div className="header">
          <div className="logo">
            <img className="img" src={LOGO_URL} alt="logo"/>
          </div>
          <div className="nav-items">
            <ul className="ul">
              <li>Status : {onlineStatus ? "Online" : "Offline"}</li>
              <li className="li" >
                <Link to="/">Home</Link>
              </li>
              <li className="li">
                <Link to="/about">About</Link>
              </li>
              <li className="li">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="li">
                <Link to="/grocery">Grocery</Link>
              </li>
              <button className='login-btn' onClick={()=>{
                loginBtn === "Log in" ? setLoginBtn("Log out") : setLoginBtn("Log in")
              }}>{loginBtn}</button>
            </ul>
          </div>
        </div>
    );
  };

  export default Header;