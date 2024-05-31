import React, { useRef } from "react";

const ScrollIndicator = ({ handleIndicator, indicator }) => {
  return (
    <div className="fixed  z-10 w-full">
      <div className="w-full h-[30px] py-1 px-3 mx-auto ">
        <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            className="w-0 h-[20px]  bg-gradient-to-r rounded-xl from-[#1176e1] via-[#0ceca5] to-[#6017a4]"
            ref={indicator}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
