import React from "react";
import images from "../../constants/images";
import Heading from "../../components/Heading/Heading";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <Heading
            title="About Us"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."
            more="know more .. "
          />
        </div>
        <div className="app__aboutus-content_knife">
          <img src={images.knife} />
        </div>
        <div className="app__aboutus-content_history">
          <Heading
            title="Our History"
            detail="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
            more="know more .. "
          />
        </div>
      </div>
    </div>
  );
}
