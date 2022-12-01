import React, { useState } from "react";
import "./searchItem.css";

interface SearchItemProps {
  itinerary: Itinerary;
  flight: Flight;
}

function SearchItemReturn({ itinerary, flight }: SearchItemProps) {
  const [showReturn, setShowReturn] = useState(false);
  const showReturnDetails = () => {
    setShowReturn(!showReturn);
  };
  return (
    <div className="Card-Flight">
      <div className="containerItem rounded shadow-lg">
        <div className="row">
          <div className="col-md-3">
            <div className="form-control d-flex flex-column">
              <p className="h-blue">Departure</p>
              <div className="d-flex flex-row">
                <span
                  className="h-blue-text me-4"
                  style={{ display: "inline", fontSize: "14px" }}
                >
                  {new Date(itinerary.departureAt).toLocaleTimeString()}
                </span>
                <span
                  className="h-blue-text"
                  style={{ display: "inline", fontSize: "14px" }}
                >
                  {flight.departure}
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-control d-flex flex-column">
              <p className="h-blue">Arrival</p>
              <div className="d-flex flex-row">
                <span
                  className="h-blue-text me-4"
                  style={{ display: "inline", fontSize: "14px" }}
                >
                  {new Date(itinerary.arrivalAt).toLocaleTimeString()}
                </span>
                <span
                  className="h-blue-text"
                  style={{ display: "inline", fontSize: "14px" }}
                >
                  {flight.arrival}
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-control d-flex flex-column">
              <p className="h-blue">Duration</p>
              <p className="h-blue-text" style={{ fontSize: "14px" }}>
                {" "}
                3:00
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-control d-flex flex-column">
              <p className="h-blue">Price (For adults)</p>
              <p className="h-blue-text" style={{ fontSize: "14px" }}>
                SEK {itinerary.prices[0].adultPrice}
              </p>
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
              <p className="h-blue-text" style={{ fontSize: "14px" }}>
                SEK {itinerary.prices[0].childPrice}
              </p>
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
              <p className="h-blue-text" style={{ fontSize: "14px" }}>
                {itinerary.availableSeats}
              </p>
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
              <a
                href="#passangerRegistry"
                style={{ textDecoration: "none", color: "white" }}
              >
                Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchItemReturn;
