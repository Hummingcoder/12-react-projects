import React from "react";
import Accordian from "./components/accordian/Accordian";
import ColorGen from "./components/ColorGen";
import StarRating from "./components/star-rating/StarRating";
import ColorSlider from "./components/ColorSlider";

const App = () => {
  return (
    <>
      <Accordian />
      <ColorGen />
      <StarRating />
      <ColorSlider />
    </>
  );
};

export default App;
