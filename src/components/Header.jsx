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
        <div className="header justify-between px-10 py-5 items-center gap-10 align-middle flex">
          <div className="logo">
            <img className="img w-52" src={LOGO_URL} alt="logo"/>
          </div>
          <div className="nav-items">
            <ul className="flex justify-center items-center gap-8 font-mono list-none">
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
              <button className='login-btn p-2 bg-red-500 rounded-lg min-w-[80px] text-white font-semibold' onClick={()=>{
                loginBtn === "Log in" ? setLoginBtn("Log out") : setLoginBtn("Log in")
              }}>{loginBtn}</button>
            </ul>
          </div>
        </div>
    );
  };

  export default Header;