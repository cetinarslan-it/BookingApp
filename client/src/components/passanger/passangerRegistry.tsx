import React from "react";
import "./passangerRegistry.css";

interface PassangerProps {
  passangerDetailsList: PassangerDetails[];
  setPassangerDetailsList: (passangerDetailsList: PassangerDetails[]) => void;
  requestData: SearchDetails;
  way: boolean;
  flightList: Flight[];
}

const PassangerRegistry = ({
  passangerDetailsList,
  setPassangerDetailsList,
  requestData,
  way,
}: PassangerProps) => {
  const passangerDataHandler = (e: any, index: number) => {
    let passangerDetailsListRef = [...passangerDetailsList];
    const { name, value } = e.target;
    passangerDetailsListRef[index] = {
      ...passangerDetailsList[index],
      [name]: value,
    };
    setPassangerDetailsList(passangerDetailsListRef);
  };

  return (
    <div>
      <hr id="passangerRegistry" style={{ marginBottom: "10%" }} />
      <div className="passangerRegistry">
        <div className="passanger-list rounded shadow-lg">
          <h2>Passanger List</h2>
        </div>
        <div className="passanger rounded shadow-lg">
          {passangerDetailsList.map((passangerDetails, index) => (
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h2>Passanger - {index + 1}</h2>
                <hr className="me-2" />
                <div className="row">
                  <div className="col-md-4 pe-3 mb-1 col-sm-12">
                    <label htmlFor="firstName" className="form-label">
                      First Name {passangerDetailsList[index].firstName}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="e.g. Cetin"
                      name="firstName"
                      key={index}
                      onChange={(e) => {
                        passangerDataHandler(e, index);
                      }}
                    />
                  </div>
                  <div className="col-md-4 pe-3 mb-1 col-sm-12">
                    <label htmlFor="lastName" className="form-label">
                      Last Name {passangerDetailsList[index].lastName}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="e.g. Arslan"
                      name="lastName"
                      key={index}
                      onChange={(e) => {
                        passangerDataHandler(e, index);
                      }}
                    />
                  </div>
                  <div className="col-md-4 pe-3 mb-1 col-sm-12">
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number {passangerDetailsList[index].mobileNumber}
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      className="form-control"
                      placeholder="e.g. 072 777 70 79"
                      name="mobileNumber"
                      key={index}
                      onChange={(e) => {
                        passangerDataHandler(e, index);
                      }}
                    />
                  </div>
                  <div className="col-md-4 pe-3 mb-1 col-sm-12">
                    <label htmlFor="emailAddress" className="form-label">
                      Email address {passangerDetailsList[index].email}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAddress"
                      placeholder="e.g. cetin@gmail.com"
                      name="email"
                      key={index}
                      onChange={(e) => {
                        passangerDataHandler(e, index);
                      }}
                    />
                  </div>
                  <div className="col-md-4 pe-3 mb-1 col-sm-12">
                    <label htmlFor="gender" className="form-label">
                      Gender {passangerDetailsList[index].gender}
                    </label>
                    <select
                      className="form-control border-0 outline-none"
                      id="gender"
                      name="gender"
                      key={index}
                      onChange={(e) => {
                        passangerDataHandler(e, index);
                      }}
                    >
                      <option value="" hidden selected></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="col-md-4 pe-3 mb-1 col-sm-12">
                    <label htmlFor="ageGroup" className="form-label">
                      Age Group {passangerDetailsList[index].ageGroup}
                    </label>
                    <select
                      className="form-control border-0 outline-none"
                      id="ageGroup"
                      name="ageGroup"
                      key={index}
                      onChange={(e) => {
                        passangerDataHandler(e, index);
                      }}
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

                  <hr
                    style={{
                      width: "97%",
                      marginLeft: "1.5%",
                      marginRight: "1.5%",
                      marginTop: "10px",
                      marginBottom: "-10px",
                      borderTop: "5px solid #000000",
                    }}
                    className="me-3"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassangerRegistry;
