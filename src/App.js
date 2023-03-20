import "./App.css";
import React from "react";
import Characters from "./pages/Characters";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Slide from "./components/Slide";




function App() {

  return (
    <div className="App">
      
      {/* <NavBar /> */}
      
      <Slide/>
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
