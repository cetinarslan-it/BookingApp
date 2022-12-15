import moment from "moment";
import React, { useState } from "react";
import "./searchItem.css";

interface SearchItemProps {
  itinerary: Itinerary;
  flight: Flight;
  way: boolean;
  setBookingDetailsOutbound: (bookingDetailsOutbound: BookingDetails) => void;
  showBooking: boolean;
  setShowBooking: (showBooking: boolean) => void;
}

const SearchItemOutbound = ({
  itinerary,
  flight,
  way,
  setBookingDetailsOutbound,
  showBooking,
  setShowBooking,
}: SearchItemProps) => {
  const [showOutbound, setShowOutbound] = useState(false);

  const showOutboundDetails = () => {
    setShowOutbound(true);
  };

  const handleBook = () => {
    setShowOutbound(!showOutbound);
    setShowBooking(!showBooking);
    setBookingDetailsOutbound({
      departure: flight.departure,
      arrival: flight.arrival,
      departureAt: itinerary.departureAt,
      arrivalAt: itinerary.arrivalAt,
      duration: moment
        .duration(
          moment(itinerary.arrivalAt.toString()).diff(
            moment(itinerary.departureAt.toString())
          )
        )
        .asHours(),
      availableSeats: itinerary.availableSeats,
      adultPrice: itinerary.prices[0].adultPrice,
      childPrice: itinerary.prices[0].childPrice,
    });
  };

  return (
    <div className="containerItem rounded shadow-lg">
      <div className="row ">
        <div className="col-md-3">
          <div className="form-control d-flex flex-column input-height">
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
          <div className="form-control d-flex flex-column input-height">
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
          <div className="form-control d-flex flex-column input-height">
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
          <div className="form-control d-flex flex-column input-height">
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
          <div className="form-control d-flex flex-column input-height">
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
          <div className="form-control d-flex flex-column input-height">
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
            More Details
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
            Less Details
          </div>
        </div>
        <div
          className="col-md-3 me-auto"
          style={{
            display: showOutbound ? "block" : "none",
          }}
        >
          <a
            href={way ? "#returnPart" : "#passangerRegistry"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              className="btn btn-secondary form-control text-center"
              onClick={handleBook}
            >
              Book
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchItemOutbound;
