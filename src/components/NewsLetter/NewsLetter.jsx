import React from "react";
import "./NewsLetter.css";
import SubHeading from "../SubHeading/SubHeading";
export default function NewsLetter() {
  return (
    <div className="app__newsLetter">
      <div className="app__newsLetter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
        <p className="p__opensans">and never miss a deal</p>
      </div>
      <div className="app__newsLetter-input flex__center">
        <input type="email" placeholder="enter your emial Address" />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>
  );
}
