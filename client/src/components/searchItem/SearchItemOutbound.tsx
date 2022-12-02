import moment from "moment";
import React, { useState } from "react";
import "./searchItem.css";

interface SearchItemProps {
  itinerary: Itinerary;
  flight: Flight;
}

function SearchItemOutbound({ itinerary, flight }: SearchItemProps) {
  const [showOutbound, setShowOutbound] = useState(false);

  const showOutboundDetails = () => {
    setShowOutbound(!showOutbound);
  };

  return (
    <div className="containerItem rounded shadow-lg">
      <div className="row ">
        <div className="col-md-3">
          <div className="form-control d-flex flex-column">
            <p className="h-blue">Departure</p>
            <div className="d-flex flex-row">
              <span
                className="h-blue-text me-4"
                style={{ display: "inline", fontSize: "14px" }}
              >
                {moment(itinerary.departureAt.toString()).format("LLL")}
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
                {moment(itinerary.arrivalAt.toString()).format("LLL")}
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
              {moment
                .duration(
                  moment(itinerary.arrivalAt.toString()).diff(
                    moment(itinerary.departureAt.toString())
                  )
                )
                .asHours()}
              <i> hour(s)</i>
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
            display: showOutbound ? "block" : "none",
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
            display: showOutbound ? "block" : "none",
          }}
        >
          <div className="form-control d-flex flex-column">
            <p className="h-blue">Available Seats</p>
            <p className="h-blue-text" style={{ fontSize: "14px" }}>
              {" "}
              {itinerary.availableSeats}
            </p>
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
          <a
            href="#passangerRegistry"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              className="btn btn-secondary form-control text-center"
              onClick={showOutboundDetails}
            >
              Book
            </div>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchItemOutbound;
