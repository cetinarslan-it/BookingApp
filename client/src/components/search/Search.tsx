import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="App">
      <div className="container rounded shadow-lg">
        <form action="">
          <div className="row">
            <div className="col-md-2 pe-0 col-sm-12">
              <div className="btn radio-btn mb-3 ">
                <label className="radio" >
                  <input type="radio" value="a" name="book" checked /> Roundtrip
                  <span></span>
                </label>
              </div>
            </div>
            <div className="col-md-2 pe-0 col-sm-12">
              <div className="btn radio-btn mb-3">
                <label className="radio">
                  <input type="radio" value="a" name="book" /> One way
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
                  <option value="Stockholm">Stockholm</option> <option value="Oslo">Oslo</option>
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
                  <option value="Stockholm">Stockholm</option> <option value="Oslo">Oslo</option>
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
            <div className="col-md-6 col-12 mb-4">
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
  );
};

export default Search;
