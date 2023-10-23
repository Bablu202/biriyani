import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

export default function Chef() {
  return (
    <div className="app__chef app__wrapper section__padding app__bg ">
      <div className="app__chef-image">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__chef-content">
        <SubHeading title="Chef's World" />
        <h1 className="headtext__cormorant">What we belive in</h1>
        <div className="app__chef-content_quote">
          <img src={images.quote} />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
          </p>
        </div>
        <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="chef sign" />
        </div>
      </div>
    </div>
  );
}
