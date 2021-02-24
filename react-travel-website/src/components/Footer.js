import React from "react";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscrition">
        <p className="footer-subscription-heading">Join the Adventure</p>
        <p className="footer-subscription-text">
          You can subscribe at any time
        </p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="emai"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
