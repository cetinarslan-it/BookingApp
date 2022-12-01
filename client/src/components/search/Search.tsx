import React, { useState } from "react";
import BookingModal from "../bookingModal/BookingModal";
import "./search.css";

const Search = () => {
 

  const[way, setWay] = useState(true);

  const wayHandler = () => {
    setWay(!way)
  }

  const [showOutbound, setShowOutbound] = useState(false);
  const showOutboundDetails = () => {
    setShowOutbound(!showOutbound);
  };

  const [showReturn, setShowReturn] = useState(false);
  const showReturnDetails = () => {
    setShowReturn(!showReturn);
  };

  return (
    <>
      <div className="App">
        <div className="container rounded shadow-lg">
          <form action="">
            <div className="row">
              <div className="col-md-2 pe-0 col-sm-12">
                <div className="btn radio-btn mb-3 ">
                  <label className="radio">
                    <input type="radio" value="roundtrip" name="book" checked={way} onClick={wayHandler}/>
                    Roundtrip
                    <span></span>
                  </label>
                </div>
              </div>
              <div className="col-md-2 pe-0 col-sm-12">
                <div className="btn radio-btn mb-3">
                  <label className="radio">
                    <input type="radio" value="oneway" name="book" checked={!way} onClick={wayHandler}/> 
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
                  <input className="inputbox textmuted" type="date" />
                </div>
              </div>
              <div className="col-md-6 col-12 mb-4"  style={{
                  display: way ? "block" : "none",
                }}>
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
            <div className="btn btn-secondary form-control text-center">
              All Flights
            </div>
          </form>
        </div>
      </div>
      {/*/ OutBound */}
      <div>
        <div className="container rounded shadow-lg">
          <div className="col-md-12">
            <div className="form-control d-flex flex-row">
              <p className="h-blue-title">Outbound :</p>
              <br />
              <p className="h-blue-text">Monday 28 Nov, 20022</p>
            </div>
          </div>
        </div>

        <div className="Card-Flight">
          <div className="container rounded shadow-lg">
            <div className="row">
              <div className="col-md-3">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Departure</p>
                  <p className="h-blue-text"> 14:15</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Arrival</p>
                  <p className="h-blue-text"> 17:15</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Duration</p>
                  <p className="h-blue-text"> 3:00</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Price (For adults)</p>
                  <p className="h-blue-text"> $1500</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div
                className="col-md-3"
                style={{
                  display: showOutbound ? "block" : "none",
                }}
              >
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Price (For children)</p>
                  <p className="h-blue-text"> $1500</p>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{
                  display: showOutbound ? "block" : "none",
                }}
              >
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Available Seats</p>
                  <p className="h-blue-text"> 10</p>
                </div>
              </div>
              <div
                className="col-md-3 me-auto"
                style={{
                  display: showOutbound ? "none" : "block",
                }}
              >
                <div
                  className="btn btn-secondary form-control text-center"
                  onClick={showOutboundDetails}
                >
                  Details
                </div>
              </div>
              <div
                className="col-md-3 me-auto"
                style={{
                  display: showOutbound ? "block" : "none",
                }}
              >
                <div
                  className="btn btn-secondary form-control text-center"
                  onClick={showOutboundDetails}
                >
                  Book
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ Return */}
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

        <div className="Card-Flight">
          <div className="container rounded shadow-lg">
            <div className="row">
              <div className="col-md-3">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Departure</p>
                  <p className="h-blue-text"> 14:15</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Arrival</p>
                  <p className="h-blue-text"> 17:15</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Duration</p>
                  <p className="h-blue-text"> 3:00</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Price (For adults)</p>
                  <p className="h-blue-text"> $1500</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div
                className="col-md-3"
                style={{
                  display: showReturn ? "block" : "none",
                }}
              >
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Price (For children)</p>
                  <p className="h-blue-text"> $1500</p>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{
                  display: showReturn ? "block" : "none",
                }}
              >
                <div className="form-control d-flex flex-column">
                  <p className="h-blue">Available Seats</p>
                  <p className="h-blue-text"> 10</p>
                </div>
              </div>
              <div
                className="col-md-3 me-auto"
                style={{
                  display: showReturn ? "none" : "block",
                }}
              >
                <div
                  className="btn btn-secondary form-control text-center"
                  onClick={showReturnDetails}
                >
                  Details
                </div>
              </div>
              <div
                className="col-md-3 me-auto"
                style={{
                  display: showReturn ? "block" : "none",
                }}
              >
                <div
                  className="btn btn-secondary form-control text-center"
                  onClick={showReturnDetails}
                >
                  Book
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
