import React from "react";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import "./Footer.css";
import { images } from "../../constants";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

export default function Footer() {
  return (
    <div className="app__footer  app__bg  section__padding">
      <NewsLetter />
      <div className="app__footer-elements ">
        <div className="app__footer-contactNumber">
          <h3
            className="headtext__cormorant"
            style={{ color: "var(--color-gray)", fontSize: "45px" }}
          >
            Contact Us
          </h3>
          <p className="p__cormorant">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__cormorant">+1 212-344-1230 </p>
          <p className="p__cormorant">+1 212-555-1230</p>
        </div>

        <div className="app__footer-contactSocialMedia">
          <img
            src={images.gericht}
            className="app__footer-contactSocialMedia_logo"
          />
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ margin: "3rem" }}
          />

          <div className="app__footer-contactSocialMedia_icons ">
            <BiLogoFacebook className="app_iconsspace" />
            <BiLogoTwitter className="app_iconsspace" />
            <BiLogoInstagram className="app_iconsspace" />
          </div>
        </div>

        <div className="app__footer-workingTimings">
          <h3
            className="headtext__cormorant"
            style={{ color: "var(--color-gray)", fontSize: "45px" }}
          >
            Working Hours
          </h3>
          <p className="p__cormorant">Monday-Friday: 08:00 am -12:00 am</p>
          <p className="p__cormorant">Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
      </div>
      <p className="app__footer-copyright p__cormorant">
        2021 Gerícht. All Rights reserved.
      </p>
    </div>
  );
}
