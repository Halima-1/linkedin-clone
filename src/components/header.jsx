import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

import { BiBookReader, BiGame, BiHeart, BiRocket, BiSolidBaguette, BiUser } from "react-icons/bi";
import "../styles/header.scss"
function Header() {
    return (
        <>
        <header>
            <nav>
            <img src="../../src/assets/linkedin-image.png" alt="" />
            <ul>
            <li>
            <NavLink
              className={"nav-item"}
              to={"/"}
            >
              <BiRocket/>
                <span>Top content</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/"}
            >
               <BiUser />
                <span>People</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/"}
            >
             <BiBookReader />
                <span>Reading</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/"}
            >
             <BiSolidBaguette />
                <span>Job</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/"}
            >
               <BiGame />
                <span>Game</span>
            </NavLink>
          </li>
          
            </ul>
            <div>
            <NavLink
              to={"/login"}
            >
                Sign in
            </NavLink>
            </div>
            <div>
                {/* <img src="" alt="" /> */}
            <NavLink
              to={"/login"}
            >
                Sign up
            </NavLink>
            </div>
            </nav>            
        </header>
        </>
    )
}

export default Header
