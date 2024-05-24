import React from "react";
import Accordian from "./components/accordian/Accordian";
import ColorGen from "./components/ColorGen";
import StarRating from "./components/star-rating/StarRating";
import ColorSlider from "./components/ColorSlider";
import ImageSlider from "./components/imageslider/ImageSlider";
import LoadData from "./components/load-more-data/LoadData";

const App = () => {
  return (
    <>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
      <LoadData />
      <Accordian />
      <ColorGen />
      <StarRating />
      <ColorSlider />
    </>
  );
};

export default App;
