import React from "react";
import "./passangerRegistry.css";

interface PassangerProps {
  passangerDetails: PassangerDetails;
  setPassangerDetails: (passangerDetails: PassangerDetails) => void;
}

const PassangerRegistry = ({
  passangerDetails,
  setPassangerDetails,
}: PassangerProps) => {
  const passangerDataHandler = (e: any) => {
    const { name, value } = e.target;
    let passangerDetailsRef = { ...passangerDetails, [name]: value };
    setPassangerDetails(passangerDetailsRef);
  };

  return (
    <div>
      <hr id="passangerRegistry" style={{ marginBottom: "10%"}} />
      <div className="passangerRegistry">
        <div className="search rounded shadow-lg">
          <form>
            <h2>Passanger Info</h2>
            <hr className="me-2" />
            <div className="row">
              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="firstNAme" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="e.g. Cetin"
                  name="firstName"
                  onChange={passangerDataHandler.bind(this)}
                />             
              </div>
              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="e.g. Arslan"
                  name="lastName"
                  onChange={passangerDataHandler.bind(this)}
                />                
              </div>
              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  className="form-control"
                  placeholder="e.g. 072 777 70 79"
                  name="mobileNumber"
                  onChange={passangerDataHandler.bind(this)}
                />
              </div>
              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="emailAddress" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  placeholder="e.g. cetin@gmail.com"
                  name="email"
                  onChange={passangerDataHandler.bind(this)}
                />               
              </div>
              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-control border-0 outline-none"
                  id="gender"
                  name="gender"
                  onChange={passangerDataHandler.bind(this)}
                >
                  <option value="" hidden selected></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col-md-4 pe-3 mb-1 col-sm-12">
                <label htmlFor="ageGroup" className="form-label">
                  Age Group
                </label>
                <select
                  className="form-control border-0 outline-none"
                  id="ageGroup"
                  name="ageGroup"
                  onChange={passangerDataHandler.bind(this)}
                >
                  <option value="" hidden selected></option>
                  <option value="Child">Child</option>
                  <option value="Adult">Adult</option>
                </select>
              </div>
              <div>
                <a
                  href="#bookingInfo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className=" btn btn-secondary form-control text-center col-md-2 pe-3 mb-1 mt-3 col-sm-12">
                    Booking Details
                  </div>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PassangerRegistry;
