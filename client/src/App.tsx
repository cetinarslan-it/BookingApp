import axios from "axios";
import React, { useEffect, useState } from "react";
import Confirmation from "./components/confirmation/Confirmation";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import PassangerRegistry from "./components/passanger/PassangerRegistry";
import Search from "./components/search/Search";
import "./App.css";

const App = () => {

  const [bookingDetailsOutbound, setBookingDetailsOutbound] = useState<BookingDetails>({
    departure: "",
    arrival: "",
    departureAt: new Date(),
    arrivalAt: new Date(),
    duration: 0,
    availableSeats: 0,
    adultPrice: 0,
    childPrice: 0
  });

  const [bookingDetailsReturn, setBookingDetailsReturn] = useState<BookingDetails>({
    departure: "",
    arrival: "",
    departureAt: new Date(),
    arrivalAt: new Date(),
    duration: 0,
    availableSeats: 0,
    adultPrice: 0,
    childPrice: 0
  });

  const [flightList, setFlightList] = useState<Flight[]>([]);

  const [requestData, setRequestData] = useState<SearchDetails>({
    departure: "Oslo",
    arrival: "Stockholm",
    departureAt: "2022-12-12",
    returnAt: "2022-12-12",
    adultCount: 0,
    childCount: 0,
  });

  return (
    <div>
      <NavBar />
      <Search setBookingDetailsOutbound={setBookingDetailsOutbound} setBookingDetailsReturn={setBookingDetailsReturn} setFlightList={setFlightList} flightList={flightList} requestData={requestData} setRequestData={setRequestData}/>
      <PassangerRegistry />
      <Confirmation bookingDetailsOutbound={bookingDetailsOutbound} bookingDetailsReturn={bookingDetailsReturn} flightList={flightList} requestData={requestData} />
      <Footer />
    </div>
  );
};

export default App;
