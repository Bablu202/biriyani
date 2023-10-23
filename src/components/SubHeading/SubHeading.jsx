import React from "react";
import images from "../../constants/images";

export default function SubHeading({ title }) {
  return (
    <div>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
}
