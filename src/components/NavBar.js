import React from "react";
import '../index.css';



function NavBar() {
  return (
    <div className="NavBar">
    
      <div className="inputDiv">
        <input id="textInput" placeholder="Rick it...!" type="text" />
      </div>
      
      <div className="Logo">
        <img className="headerLogo" src="./assets/header.png"alt="Rick & Morty Logo header" />
    </div>
      <div className="animation">
        {/* <iframe src="https://giphy.com/embed/l378BzHA5FwWFXVSg" /> */}
        {/* <iframe src="https://giphy.com/embed/3o85xFUjFFIGxIy7fO" /> */}
        <iframe src="https://giphy.com/embed/3o85xKFJJ0d3xE8vh6"/>
        {/* <iframe src="https://giphy.com/embed/uZrLs0rcNc9sA"/> */}
      </div>
      
     </div>
  )
 
}

export default NavBar;
