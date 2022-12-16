import axios from "axios";
import React, { useEffect, useState } from "react";
import Confirmation from "./components/confirmation/Confirmation";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import PassangerRegistry from "./components/passanger/PassangerRegistry";
import Search from "./components/search/Search";
import "./App.css";

const App = () => {
  const [bookingDetailsOutbound, setBookingDetailsOutbound] =
    useState<BookingDetails>({
      departure: "",
      arrival: "",
      departureAt: new Date(),
      arrivalAt: new Date(),
      duration: 0,
      availableSeats: 0,
      adultPrice: 0,
      childPrice: 0,
    });

  const [bookingDetailsReturn, setBookingDetailsReturn] =
    useState<BookingDetails>({
      departure: "",
      arrival: "",
      departureAt: new Date(),
      arrivalAt: new Date(),
      duration: 0,
      availableSeats: 0,
      adultPrice: 0,
      childPrice: 0,
    });

  const [flightList, setFlightList] = useState<Flight[]>([]);

  const [way, setWay] = useState(true);

  const [showBooking, setShowBooking] = useState(false);

  const [requestData, setRequestData] = useState<SearchDetails>({
    departure: "Stockholm",
    arrival: "Oslo",
    departureAt: "2022-12-12",
    returnAt: "2022-12-12",
    adultCount: 1,
    childCount: 0,
  });

  const [passangerDetailsList, setPassangerDetailsList] = useState<PassangerDetails[]>([]);


  return (
    <div>
      <NavBar />
      <Search
        way={way}
        setWay={setWay}
        setBookingDetailsOutbound={setBookingDetailsOutbound}
        setBookingDetailsReturn={setBookingDetailsReturn}      
        flightList={flightList}
        setFlightList={setFlightList}
        requestData={requestData}
        setRequestData={setRequestData}
        showBooking={showBooking}
        setShowBooking={setShowBooking}
        passangerDetailsList={passangerDetailsList}
        setPassangerDetailsList={setPassangerDetailsList}
      />
      {showBooking&&<PassangerRegistry
        requestData={requestData}
        flightList={flightList}
        way={way}
        passangerDetailsList={passangerDetailsList}
        setPassangerDetailsList={setPassangerDetailsList}
      

      />}
      {showBooking&&<Confirmation
        bookingDetailsOutbound={bookingDetailsOutbound}
        bookingDetailsReturn={bookingDetailsReturn}
        flightList={flightList}
        requestData={requestData}
        passangerDetailsList={passangerDetailsList}
        way={way}
      />}
      <Footer />
    </div>
  );
};

export default App;
