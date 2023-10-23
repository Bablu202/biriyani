import React from "react";
import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import Heading from "../../components/Heading/Heading";
import { images } from "../../constants";

export default function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="chase the new Flavour" />
        <Heading
          title="The Key to fine Dining"
          detail="Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus"
          more="Explore More.."
        />
      </div>
      <div className="app__wrapper_img">
        <img src={images.chef} alt="Here" style={{ width: "50%" }} />
      </div>
    </div>
  );
}
