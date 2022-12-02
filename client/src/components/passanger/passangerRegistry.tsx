import React from "react";
import "./passangerRegistry.css";

const PassangerRegistry = () => {
  return (
    <div>
      <hr id="passangerRegistry" style={{ marginBottom: "10%" }} />
      <div className="passangerRegistry">
        <div className="search rounded shadow-lg">
          <form>
            <h2>Passanger Info</h2>
            <hr className="me-2"  />
            <div className="row">
              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>

              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>

              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>

              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>

              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Gender
                </label>
                <select className="form-control border-0 outline-none">
                  <option value="" hidden selected>
                    Female
                  </option>
                  <option value="Stockholm">Male</option>
                  <option value="Oslo">Female</option>
                </select>
              </div>

              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Child/Adult
                </label>
                <select className="form-control border-0 outline-none">
                  <option value="" hidden selected>
                    Adult
                  </option>
                  <option value="Stockholm">Child</option>
                  <option value="Oslo">Adult</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className=" btn btn-secondary form-control text-center col-md-2 pe-3 mb-1 mt-3 col-sm-12"
                >
                  <a
                    href="#bookingInfo"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Booking Details
                  </a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PassangerRegistry;
