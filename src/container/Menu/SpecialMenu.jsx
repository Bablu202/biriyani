import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import { MenuItem } from "../../components";
import "./SpecialMenu.css";

export default function SpecialMenu() {
  return (
    <div className="app__specialMenu  flex__center section__padding" id="menu">
      {/* Here Heading and subheading*/}
      <div className="app__spacialMenu-title">
        <SubHeading title="All hand made Specials" />
        <h1 className="headtext__cormorant">Here we start with Joy</h1>
      </div>
      {/* Menu component */}
      <div className="app__specialMenu-menu">
        {/* first column*/}
        <div className="app__specialMenu-menu_wine flex__center">
          <h2 className="app__specialMenu-menu_heading">Wine & beer</h2>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((e, i) => (
              <MenuItem title={e.title} price={e.price} tags={e.tags} />
            ))}
          </div>
        </div>
        {/* image in middle*/}
        <div className="app__specialMenu-menu_img">
          <img src={images.chef} alt="menu" />
        </div>
        {/* second column*/}
        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Wine & beer</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((e, i) => (
              <MenuItem title={e.title} price={e.price} tags={e.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button className="custom__button">View More..</button>
      </div>
    </div>
  );
}
