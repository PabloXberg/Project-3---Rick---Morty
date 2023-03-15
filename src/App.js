
import React from "react";
import Characters from "./Characters";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";



function App() {


  return (
    <div className="App">
      <h1 className="orange">Hello React World</h1>
      <NavBar />
      <Characters />
      <Footer />
      
    </div>
  );
}

export default App;