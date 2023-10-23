import React from "react";

import "./Laurels.css";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

export default function Laurels() {
  const AwardCards = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div
      className="app__laurels app__bg app__wrapper section__padding"
      id="awards"
    >
      <div className="app__laurels-awards app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels-awards_awardCards">
          {data.awards.map((award) => (
            <AwardCards award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.gallery02} />
      </div>
    </div>
  );
}
