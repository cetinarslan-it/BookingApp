import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div style={{ textAlign: "center" }}>
        Copyright&copy; {new Date().getFullYear()} FlightBookingApp - All
        rights reserved
      </div>
    </div>
  );
}

export default Footer;
