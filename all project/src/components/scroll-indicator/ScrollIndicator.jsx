import React, { useRef } from "react";

const ScrollIndicator = ({ handleIndicator, indicator }) => {
  return (
    <div className="fixed  z-10 w-full">
      <div className="w-full  py-1 px-3 mx-auto ">
        <div className="w-full bg-slate-800 p-2 px-5 rounded-xl shadow-lg overflow-hidden">
          <div
            className="w-0 h-[5px]  bg-gradient-to-r rounded-xl from-[#56ffd8] to-[#076e5d]"
            ref={indicator}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
