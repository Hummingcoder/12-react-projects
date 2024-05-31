import React, { useEffect, useRef } from "react";
import Accordian from "./components/accordian/Accordian";
import ColorGen from "./components/ColorGen";
import StarRating from "./components/star-rating/StarRating";
import ColorSlider from "./components/ColorSlider";
import ImageSlider from "./components/imageslider/ImageSlider";
import LoadData from "./components/load-more-data/LoadData";
import SideBar from "./components/sidebar/SideBar";
import menus from "./components/sidebar/data";
import Darkmode from "./components/darkmode/Darkmode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";

const App = () => {
  const indicator = useRef();

  function handleIndicator() {
    let scrollH = document.documentElement.scrollTop;
    let pageH =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (scrollH / pageH) * 100;
    indicator.current.style.width = `${scrolled}%`;
  }
  useEffect(() => {
    window.addEventListener("scroll", handleIndicator);
  }, []);

  return (
    <section onScroll={handleIndicator}>
      <ScrollIndicator
        handleIndicator={handleIndicator}
        indicator={indicator}
      />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
      <Accordian />
      <LoadData />
      <ColorGen />
      <StarRating />
      <ColorSlider />
      <SideBar menus={menus} />
      <Darkmode />
    </section>
  );
};

export default App;
