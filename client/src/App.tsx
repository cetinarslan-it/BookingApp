import axios from "axios";
import React, { useEffect, useState } from "react";
import Confirmation from "./components/confirmation/Confirmation";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import PassangerRegistry from "./components/passanger/PassangerRegistry";
import Search from "./components/search/Search";
import "./App.css";


function App() {

  return (
    <div>
      <NavBar/>
      <Search/>
      <PassangerRegistry/> 
      <Confirmation/>
      <Footer/> 
    </div>
  );
}

export default App;
