import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BroweserRouter as Router, Switch, Route } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            PROJECT--TRAVEL <i className="fas fa-globe-americas" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
