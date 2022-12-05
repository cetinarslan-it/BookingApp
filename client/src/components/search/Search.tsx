import axios from "axios";
import { request } from "http";
import moment from "moment";
import React, { useState, useTransition } from "react";
import internal from "stream";
import SearchItemOutbound from "../searchItem/SearchItemOutbound";
import SearchItemReturn from "../searchItem/SearchItemReturn";

import "./search.css";

interface SearchProps {
  flightList: Flight[];
}

interface SearchData {
  departure: string;     
  arrival:string ;
  departureAt: string;
  returnAt: string;
  adultCount: number;
  childCount: number ;   
}

const Search = () => {
  const [way, setWay] = useState(true);

  const wayHandler = () => {
    setWay(!way);
  };

  const [isSearched, setIsSearched] = useState(false);

 /* const searchHandler1 = () => {
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
  };*/

  const [requestData, setRequestData] = useState<SearchData>({
    departure:"Oslo",   
    arrival:"Stockholm",
    departureAt:"2022-12-12",
    returnAt:"2022-12-12",
    adultCount:0,
    childCount:0 
  })

  const [flightList, setFlightList] = useState<Flight[]>([]);

  const requestDataHandler = (e:any) => {
    const { name, value } = e.target;
    let requestDataRef = { ...requestData, [name]: value };
    setRequestData(requestDataRef);
  };

 /* console.log(requestData.departure);
  console.log(requestData.arrival);
  console.log(requestData.departureAt);
  console.log(requestData.returnAt);
  console.log(requestData.childCount);
  console.log(requestData.adultCount); */

  const searchHandler = () => {

    setIsSearched(true);

    const getSearchedFlightList = () => {
      axios
        .post("https://localhost:7232/api/Flights/GetSearchedList", requestData
        )
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
      <div className=" search rounded shadow-lg">
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
                <select className="border-0 outline-none" name="departure" onClick={requestDataHandler.bind(this)}>
                  <option value="" hidden selected>{requestData.departure}</option>
                  <option value="Stockholm">Stockholm</option>
                  <option value="Oslo">Oslo</option>
                  <option value="Amsterdam">Amsterdam</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-control d-flex flex-column">
                <p className="h-blue">To</p>
                <select className="border-0 outline-none" name="arrival" onClick={requestDataHandler.bind(this)}>
                  <option value="" hidden selected>{requestData.arrival}</option>
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
                <input className="inputbox textmuted"  type="date" name="departureAt" onChange={requestDataHandler.bind(this)} required/>
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
                <input className="inputbox textmuted" type="date" name="returnAt" onChange={requestDataHandler.bind(this)}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-control d-flex flex-column">
                <p className="h-blue">Adult(18+)</p>
                <select className="border-0 outline-none" name="adultCount" onClick={requestDataHandler.bind(this)}>
                  <option value="" hidden selected>
                    0
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
                <select className="border-0 outline-none" name="childCount" onClick={requestDataHandler.bind(this)}>
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
            href="#outbound"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              className="btn btn-secondary form-control text-center"
              onClick={searchHandler}
            >
              All Flights
            </div>
          </a>
        </form>
      </div>

      {/*/ OutBound */}
      {isSearched && (
        <div className="search outbound rounded shadow-lg" id="outbound">
          <div className="col-md-12">
            <div className="form-control d-flex flex-row">
              <p className="h-blue-title">Outbound :</p>
              <br />
              <p className="h-blue-text">{requestData.departureAt.toString()} </p>
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
      {isSearched && (way && (
        <div className="search return rounded shadow-lg">
          <div className="col-md-12">
            <div className="form-control d-flex flex-row">
              <p className="h-blue-title">Return :</p>
              <br />
              <p className="h-blue-text">{requestData.returnAt.toString()}</p>
            </div>
          </div>
        </div> ))
     }

      {flightList.map((flight) =>
        flight.itineraries.map((itinerary) => (
          <SearchItemReturn itinerary={itinerary} flight={flight} />
        ))
      )}
    </>
  );
};

export default Search;
