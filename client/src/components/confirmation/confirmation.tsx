import React, { useState } from "react";
import "./confirmation.css";
import Swal from "sweetalert2";
import axios from "axios";

function Confirmation() {

  const [passangerList, setPassangerList] = useState<Passanger[]>([]);

  const passangerHandler = () => {
    const getPassangerList = () => {
      axios
        .get("https://localhost:7232/api/Passangers/GetAll")
        .then((response) => {
          setPassangerList(response.data);
        })
        .catch((e) => {
          alert(e.message);
        });
    };
    getPassangerList();
  };

  return (
    <div>
      <div className="bookingInfo" id="bookingInfo">
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
                    <strong>Flight:</strong> Stockholm-Oslo
                  </p>
                  <p>
                    <strong>Date:</strong> Monday 28, 17:00, 2022
                  </p>
                  <p>
                    <strong>Number:</strong> 1 Adult, 3 Children
                  </p>
                  <p>
                    <strong>Price:</strong> SEK 5500
                  </p>
                </div>
              </div>

              <div className="col-md-6 pe-3 mb-1 col-sm-12">
                <h4>Return</h4>
                <hr />
                <div className="return">
                  <p>
                    <strong>Flight:</strong> Stockholm-Oslo
                  </p>
                  <p>
                    <strong>Date:</strong> Monday 28, 17:00, 2022
                  </p>
                  <p>
                    <strong>Number:</strong> 1 Adult, 3 Children
                  </p>
                  <p>
                    <strong>Price:</strong> SEK 5500
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <h4 className="passanger-list col-md-6 pe-3 mb-1 col-sm-12">
                Passanger List
              </h4>
              <hr />

              <div className="col-md-6 pe-3 mb-1 col-sm-12">
                <div className="return">
                  <p>
                    <strong>Name:</strong> Stockholm-Oslo
                  </p>
                  <p>
                    <strong>Surname:</strong> Monday 28, 17:00, 2022
                  </p>
                  <p>
                    <strong>Gender:</strong> 1 Adult, 3 Children
                  </p>
                  <p>
                    <strong>Mobile:</strong> 076 777 77 77
                  </p>
                  <p>
                    <strong>Email:</strong> SEK 5500
                  </p>
                </div>
              </div>
              <div className="col-md-6 pe-3 mb-1 col-sm-12">
                <div className="return">
                  <p>
                    <strong>Name:</strong> Stockholm-Oslo
                  </p>
                  <p>
                    <strong>Surname:</strong> Monday 28, 17:00, 2022
                  </p>
                  <p>
                    <strong>Gender:</strong> 1 Adult, 3 Children
                  </p>
                  <p>
                    <strong>Mobile:</strong> 076 777 77 77
                  </p>
                  <p>
                    <strong>Email:</strong> SEK 5500
                  </p>
                </div>
              </div>
              <div>
                <p className="total-price">
                  <strong className="pe-2">Total Price :</strong>SEK 22.000
                </p>
              </div>

              <div>
                <div className="btn btn-secondary form-control text-center"
                onClick={()=>{Swal.fire({
                  icon: 'success',
                  title: "You have succesfully booked your ticket(s)...",
                  showConfirmButton: false,
                  timer: 1500
                })}}>
                  Confirm Booking
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
