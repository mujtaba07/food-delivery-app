import React from 'react';
import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router';
const Header = () => {
    // let loginBtn = "Log in"
    let [loginBtn, setLoginBtn] = useState( "Log in")
    return (
        <div className="header">
          <div className="logo">
            <img className="img" src={LOGO_URL} alt="logo"/>
          </div>
          <div className="nav-items">
            <ul className="ul">
              <li className="li" >
                <Link to="/">Home</Link>
                {/* <a href="/">Home</a> */}
              </li>
              <li className="li">
                <Link to="/about">About</Link>
                {/* <a href="/about">About</a> */}
              </li>
              <li className="li">
                <Link to="/contact">Contact</Link>
                {/* <a href="/contact">Contact</a> */}
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