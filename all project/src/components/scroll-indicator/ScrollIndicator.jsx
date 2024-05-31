import React, { useRef } from "react";

const ScrollIndicator = ({ handleIndicator, indicator }) => {
  return (
    <div className="fixed  z-10 w-full">
      <div className="w-full  py-1 px-3 mx-auto ">
        <div className="w-full bg-slate-800 py-4 px-5 rounded-xl shadow-lg overflow-hidden">
          <div
            className="w-0 h-[2px] relative bg-gradient-to-r rounded-xl from-[#00ffc3] to-[#80ffea]"
            ref={indicator}
          >
            <span className="bg-[#80ffea] w-[10px] h-[9px] rounded-full absolute right-0 top-[-150%]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
