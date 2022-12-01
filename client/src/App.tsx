import React from "react";
import "./App.css";
import BookingModal from "./components/bookingModal/BookingModal";
import Confirmation from "./components/confirmation/confirmation";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import PassangerRegistry from "./components/passanger/passangerRegistry";
import Search from "./components/search/Search";


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
