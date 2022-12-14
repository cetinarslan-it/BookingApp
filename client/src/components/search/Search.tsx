import axios from "axios";
import React, { useState, useTransition } from "react";
import SearchItemOutbound from "../searchItem/SearchItemOutbound";
import SearchItemReturn from "../searchItem/SearchItemReturn";
import "./search.css";

interface SearchProps {
  setBookingDetailsOutbound: (bookingDetailsOutbound: BookingDetails) => void;
  setBookingDetailsReturn: (bookingDetailsReturn: BookingDetails) => void;
  flightList: Flight[];
  setFlightList: (flightList: Flight[]) => void;
  requestData: SearchDetails;
  setRequestData: (requestData: SearchDetails) => void;
  way: boolean;
  setWay: (way: boolean) => void;
  showBooking: boolean;
  setShowBooking: (showBooking: boolean) => void;
  passangerDetailsList:PassangerDetails[];
  setPassangerDetailsList: (passangerDetailsList:PassangerDetails[])=> void;
}

const Search = ({
  way,
  setWay,
  setBookingDetailsOutbound,
  setBookingDetailsReturn,
  flightList,
  setFlightList,
  requestData,
  setRequestData,
  showBooking,
  setShowBooking,
  passangerDetailsList,
  setPassangerDetailsList
}: SearchProps) => {
  const wayHandler = () => {
    setWay(!way);
  };

  const [isSearched, setIsSearched] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const requestDataHandler = (e: any) => {
    const { name, value } = e.target;
    let requestDataRef = { ...requestData, [name]: value };
    setRequestData(requestDataRef);
  };

  const searchHandler = () => {

  setPassangerDetailsList(Array(requestData.adultCount*1 + requestData.childCount*1).fill({

    firstName: "",
    lastName: "",
    mobileNumber: "",
    email : "",
    gender: "",
    ageGroup: "",

  }));

    setIsSearched(true);
    const getSearchedFlightList = () => {
      axios
        .post("https://localhost:7232/api/Flights/GetSearchedList", requestData)
        .then((response) => {
          setFlightList(response.data);
        })
        .catch((e) => {
          alert(e.message);
        });
    };
    getSearchedFlightList();
  };

  return (
    <>
      <div className="search rounded shadow-lg" id="search-table">
        <form action="">
          <div className="row">
            <div className="col-md-2 pe-0 col-sm-12">
              <div className="btn radio-btn mb-3 ">
                <label className="radio">
                  <input
                    type="radio"
                    value="roundtrip"
                    name="book"
                    checked={way}
                    onClick={wayHandler}
                  />
                  Roundtrip  {requestData.adultCount*1 + requestData.childCount*1}
                  <span></span>
                </label>
              </div>
            </div>
            <div className="col-md-2 pe-0 col-sm-12">
              <div className="btn radio-btn mb-3">
                <label className="radio">
                  <input
                    type="radio"
                    value="oneway"
                    name="book"
                    checked={!way}
                    onClick={wayHandler}
                  />
                  One way
                  <span></span>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-control d-flex flex-column">
                <p className="h-blue">From</p>
                <select
                  className="border-0 outline-none"
                  name="departure"
                  onClick={requestDataHandler.bind(this)}
                >
                  <option value="" hidden selected>
                    {requestData.departure}
                  </option>
                  <option value="Stockholm">Stockholm</option>
                  <option value="Oslo">Oslo</option>
                  <option value="Amsterdam">Amsterdam</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-control d-flex flex-column">
                <p className="h-blue">To</p>
                <select
                  className="border-0 outline-none"
                  name="arrival"
                  onClick={requestDataHandler.bind(this)}
                >
                  <option value="" hidden selected>
                    {requestData.arrival}
                  </option>
                  <option value="Stockholm">Stockholm</option>
                  <option value="Oslo">Oslo</option>
                  <option value="Amsterdam">Amsterdam</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 mb-4">
              <div className="form-control d-flex flex-column">
                <p className="h-blue">Departure Date</p>
                <input
                  className="inputbox"
                  type="date"
                  name="departureAt"
                  onChange={requestDataHandler.bind(this)}
                  required
                />
              </div>
            </div>
            <div
              className="col-md-6 col-12 mb-4"
              style={{
                display: way ? "block" : "none",
              }}
            >
              <div className="form-control d-flex flex-column">
                <p className="h-blue">Return Date</p>
                <input
                  className="inputbox"
                  type="date"
                  name="returnAt"
                  onChange={requestDataHandler.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-control d-flex flex-column">
                <p className="h-blue">Adult(18+)</p>
                <select
                  className="border-0 outline-none"
                  name="adultCount"
                  onClick={requestDataHandler.bind(this)}
                >
                  <option value="" hidden selected>
                    1
                  </option>
                  <option value="1">1</option> <option value="2">2</option>
                  <option value="3">3</option> <option value="4">4</option>
                  <option value="5">5</option> <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-control d-flex flex-column">
                <p className="h-blue">Child/Children(0-17)</p>
                <select
                  className="border-0 outline-none"
                  name="childCount"
                  onClick={requestDataHandler.bind(this)}
                >
                  <option value="" hidden selected>
                    0
                  </option>
                  <option value="1">1</option> <option value="2">2</option>
                  <option value="3">3</option> <option value="4">4</option>
                  <option value="5">5</option> <option value="6">6</option>
                </select>
              </div>
            </div>
          </div>
          <a
            href="#outboundPart"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              className="btn btn-secondary form-control text-center"
              onClick={searchHandler}
            >
              Available Flights
            </div>
          </a>
        </form>
      </div>

      {/*/ OutBound */}
      {isSearched && (
        <div id="outboundPart" className="search outbound rounded shadow-lg">
          <div className="col-md-12">
            <div className="form-control d-flex flex-row">
              <p className="h-blue-title">Outbound :</p>
              <br />
              <p className="h-blue-text">
                {requestData.departureAt.toString()}
                {" / "}
              </p>
              <p className="h-blue-text">
                {requestData.departure.toString()}
                {" - "}
              </p>
              <p className="h-blue-text">{requestData.arrival.toString()} </p>
            </div>
          </div>

          {flightList
            .filter((f) => f.departure === requestData.departure)
            .map((flight) =>
              flight.itineraries
                .filter(
                  (i) =>
                    new Date(i.departureAt).toDateString() ===
                    new Date(requestData.departureAt).toDateString()
                )
                .map((itinerary) => (
                  <SearchItemOutbound
                    isBooked={isBooked}
                    setIsBooked={setIsBooked}
                    itinerary={itinerary}
                    flight={flight}
                    way={way}
                    setBookingDetailsOutbound={setBookingDetailsOutbound}
                    showBooking={showBooking}
                    setShowBooking={setShowBooking}
                  />
                ))
            )}
        </div>
      )}

      {/*/ Return */}
      {isSearched && way && (
        <div id="returnPart" className="search return rounded shadow-lg">
          <div className="col-md-12">
            <div className="form-control d-flex flex-row">
              <p className="h-blue-title">Return :</p>
              <br />
              <p className="h-blue-text">
                {requestData.returnAt.toString()}
                {" / "}
              </p>
              <p className="h-blue-text">
                {requestData.arrival.toString()}
                {" - "}
              </p>
              <p className="h-blue-text">{requestData.departure.toString()} </p>
            </div>
          </div>

          {flightList
        .filter((f) => f.departure === requestData.arrival)
        .map((flight) =>
          flight.itineraries
            .filter(
              (i) =>
                new Date(i.departureAt).toDateString() ===
                new Date(requestData.returnAt).toDateString()
            )
            .map((itinerary) => (
              <SearchItemReturn
                isBooked={isBooked}
                itinerary={itinerary}
                flight={flight}
                way={way}
                setBookingDetailsReturn={setBookingDetailsReturn}
                showBooking={showBooking}
                setShowBooking={setShowBooking}
              />
            ))
        )}




        </div>
      )}

     
    </>
  );
};

export default Search;
