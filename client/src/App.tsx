import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";


function App() {
  return (
    <div>
      <NavBar/>
      <Search/> 
      <Footer/> 
    </div>
  );
}

export default App;
