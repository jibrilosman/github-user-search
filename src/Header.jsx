import React from 'react'
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import "./index.css";
import "./darkTheme.css";

const Header = (props) => {
   
    
    return (
        <header className={props.theme ? 'light': 'dark'}>
          <div className="hero">
            <h1 className="hero-logo">DevFinder</h1>
            <a className='hero-btn' href="#" onClick={props.handleThemeChange} >{props.theme === 'light' ? <BsMoon />: <BsSun />}</a>
          </div>
        </header>
      )
}

export default Header