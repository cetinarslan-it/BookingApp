import React, { useState } from "react";
import "./confirmation.css";
import Swal from "sweetalert2";
import moment from "moment";

interface ConfirmationProps {
  bookingDetailsOutbound: BookingDetails;
  bookingDetailsReturn: BookingDetails;
  flightList: Flight[];
  requestData: SearchDetails;
  passangerDetailsList: PassangerDetails[];
  way: boolean;
}

const Confirmation = ({
  bookingDetailsOutbound,
  bookingDetailsReturn,
  requestData,
  passangerDetailsList,
  way,
}: ConfirmationProps) => {
  return (
    <div>
      <div id="bookingInfo" style={{ marginBottom: "1%" }} />
      <div className="bookingInfo">
        <div className="search rounded shadow-lg">
          <form>
            <h2>Booking Info</h2>
            <hr className="me-2" />

            <div className="row">
              <div className="col-md-6 pe-3 mb-1 col-sm-12">
                <h4>Outbound</h4>
                <hr />
                <div className="return">
                  <p>
                    <strong>Flight:</strong> {bookingDetailsOutbound.departure}{" "}
                    - {bookingDetailsOutbound.arrival}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {moment(
                      bookingDetailsOutbound.departureAt.toString()
                    ).format("LLL")}
                  </p>
                  <p>
                    <strong>Duration:</strong>{" "}
                    {moment
                      .duration(
                        moment(
                          bookingDetailsOutbound.arrivalAt.toString()
                        ).diff(
                          moment(bookingDetailsOutbound.departureAt.toString())
                        )
                      )
                      .asHours()}
                    <i> hour(s)</i>
                  </p>
                  <p>
                    <strong>Seats:</strong> {requestData.adultCount} adult(s) +{" "}
                    {requestData.childCount} child/children
                  </p>
                  <p>
                    <strong>Price:</strong> SEK{" "}
                    {requestData.adultCount *
                      bookingDetailsOutbound.adultPrice +
                      requestData.childCount *
                        bookingDetailsOutbound.childPrice}
                  </p>
                </div>
              </div>
              {way && (
                <div className="col-md-6 pe-3 mb-1 col-sm-12">
                  <h4>Return</h4>
                  <hr />
                  <div>
                    <div className="return">
                      <p>
                        <strong>Flight:</strong>{" "}
                        {bookingDetailsReturn.departure} -{" "}
                        {bookingDetailsReturn.arrival}
                      </p>
                      <p>
                        <strong>Date:</strong>{" "}
                        {moment(
                          bookingDetailsReturn.departureAt.toString()
                        ).format("LLL")}
                      </p>
                      <p>
                        <strong>Duration:</strong>{" "}
                        {moment
                          .duration(
                            moment(
                              bookingDetailsReturn.arrivalAt.toString()
                            ).diff(
                              moment(
                                bookingDetailsReturn.departureAt.toString()
                              )
                            )
                          )
                          .asHours()}
                        <i> hour(s)</i>
                      </p>
                      <p>
                        <strong>Seats:</strong> {requestData.adultCount}{" "}
                        adult(s) + {requestData.childCount} child/children
                      </p>
                      <p>
                        <strong>Price:</strong> SEK{" "}
                        {requestData.adultCount *
                          bookingDetailsOutbound.adultPrice +
                          requestData.childCount *
                            bookingDetailsOutbound.childPrice}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="row">
              <h4 className="confirmation-passanger-list col-md-6 pe-3 mb-1 col-sm-12">
                Passanger List
              </h4>
              <hr />

              { passangerDetailsList.map((passangerDetails, index) =>

                <div className="col-md-6 pe-3 mb-1 col-sm-12">
                  <div className="return">
                    <p>
                      <strong>Passanger - {index+1}</strong>
                    </p>
                    <p>
                      <strong>Name:</strong> {passangerDetailsList[index].firstName}
                    </p>
                    <p>
                      <strong>Surname:</strong> {passangerDetailsList[index].lastName}
                    </p>
                    <p>
                      <strong>Mobile:</strong>{" "} {passangerDetailsList[index].mobileNumber}
                    </p>
                    <p>
                      <strong>Email:</strong> {passangerDetailsList[index].email}
                    </p>
                    <p>
                      <strong>Gendre:</strong> {passangerDetailsList[index].gender}
                    </p>
                    <p>
                      <strong>Age Group:</strong>{" "}
                      {passangerDetailsList[index].ageGroup}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <p className="total-price">
                  <strong className="pe-2">Total Price :</strong>SEK{" "}
                  {way
                    ? (requestData.adultCount *
                        bookingDetailsOutbound.adultPrice +
                        requestData.childCount *
                          bookingDetailsOutbound.childPrice) *
                      2
                    : requestData.adultCount *
                        bookingDetailsOutbound.adultPrice +
                      requestData.childCount *
                        bookingDetailsOutbound.childPrice}
                </p>
              </div>

              <div>
                <div
                  className="btn btn-secondary form-control text-center"
                  onClick={() => {
                    passangerDetailsList.some(f=>f.firstName === "" ) ||
                    passangerDetailsList.some(l=>l.lastName === "" ) ||
                    passangerDetailsList.some(g=>g.gender === "" ) ||
                    passangerDetailsList.some(a=>a.ageGroup === "" ) ||
                    passangerDetailsList.some(e=>e.email === "" ) ||
                    passangerDetailsList.some(m=>m.mobileNumber === "" )
                      ? Swal.fire({
                          icon: "warning",
                          title: "Please fill in all the required information!",
                          showConfirmButton: false,
                          timer: 1500,
                        })
                      : Swal.fire({
                          icon: "success",
                          title:
                            "Congratulations! You have succesfully booked your ticket(s).",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                  }}
                >
                  Confirm Booking
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
