import axios from "axios";
import React, { useState } from "react";
import SearchItemOutbound from "../searchItem/SearchItemOutbound";
import SearchItemReturn from "../searchItem/SearchItemReturn";

import "./search.css";

interface SearchProps {
  flightList: Flight[];
}

const Search = () => {
  const [way, setWay] = useState(true);

  const wayHandler = () => {
    setWay(!way);
  };
  const [flightList, setFlightList] = useState<Flight[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  const searchHandler = () => {
    setIsSearched(true);
    const getFlightList = () => {
      axios
        .get("https://localhost:7232/api/Flights/GetAll")
        .then((response) => {
          setFlightList(response.data);
        })
        .catch((e) => {
          alert(e.message);
        });
    };
    getFlightList();
  };

  return (
    <>
      <div className="search">
        <div className="container rounded shadow-lg">
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
                    Roundtrip
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
                  <select className="border-0 outline-none">
                    <option value="" hidden selected>
                      Stockholm
                    </option>
                    <option value="Stockholm">Stockholm</option>{" "}
                    <option value="Oslo">Oslo</option>
                    <option value="Amsterdam">Amsterdam</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">To</p>
                  <select className="border-0 outline-none">
                    <option value="" hidden selected>
                      Oslo
                    </option>
                    <option value="Stockholm">Stockholm</option>{" "}
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
                  <input className="inputbox textmuted" type="date" required />
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
                  <input className="inputbox textmuted " type="date" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Adult(18+)</p>
                  <select className="border-0 outline-none">
                    <option value="" hidden selected>
                      0
                    </option>
                    <option value="1">1</option> <option value="2">2</option>
                    <option value="3">3</option> <option value="3">4</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Child/Children(0-17)</p>
                  <select className="border-0 outline-none">
                    <option value="" hidden selected>
                      0
                    </option>
                    <option value="1">1</option> <option value="2">2</option>
                    <option value="3">3</option> <option value="3">4</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className="btn btn-secondary form-control text-center"
              onClick={searchHandler}
            >
              <a href="#outbound" style={{textDecoration:"none", color:"white"}}> All Flights </a>
             
              
            </div>
          </form>
        </div>
      </div>

      {/*/ OutBound */}
      {isSearched && (
        <div className="container rounded shadow-lg" id="outbound">
          <div className="col-md-12">
            <div className="form-control d-flex flex-row">
              <p className="h-blue-title">Outbound :</p>
              <br />
              <p className="h-blue-text">Monday 28 Nov, 2022</p>
            </div>
          </div>
        </div>
      )}

      {flightList.map((flight) =>
        flight.itineraries.map((itinerary) => (
          <SearchItemOutbound itinerary={itinerary} flight={flight} />
        ))
      )}

      {/*/ Return */}
      {isSearched && (
        <div>
          <div className="container rounded shadow-lg">
            <div className="col-md-12">
              <div className="form-control d-flex flex-row">
                <p className="h-blue-title">Return :</p>
                <br />
                <p className="h-blue-text">Monday 28 Nov, 20022</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {flightList.map((flight) =>
        flight.itineraries.map((itinerary) => (
          <SearchItemReturn itinerary={itinerary} flight={flight} />
        ))
      )}
    </>
  );
};

export default Search;
