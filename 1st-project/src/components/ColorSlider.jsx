import React, { useState } from "react";

const ColorSlider = () => {
  const [red, setRed] = useState("0");
  const [green, setGreen] = useState("0");
  const [blue, setBlue] = useState("0");
  return (
    <form
      style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
      className="w-full h-screen  flex flex-col items-center justify-end pb-32"
    >
      <div className="flex  bg-[#ffffff94] shadow-sm  p-5 rounded-md backdrop-blur flex-col items-start justify-center gap-2">
        <label>
          <div> Red ({red}) </div>
          <input
            className="p-2 ml-10 w-[360px]"
            onChange={(e) => setRed(e.target.value)}
            value={red}
            type="range"
            min={0}
            max={360}
          />
        </label>
        <label htmlFor="">
          {" "}
          <div>Green ({green})</div>
          <input
            className="p-2 ml-10 w-[360px]"
            onChange={(e) => setGreen(e.target.value)}
            value={green}
            type="range"
            min={0}
            max={360}
          />
        </label>
        <label htmlFor="">
          {" "}
          <div>Blue ({blue}) </div>
          <input
            className="p-2 ml-10 w-[360px]"
            onChange={(e) => setBlue(e.target.value)}
            value={blue}
            type="range"
            min={0}
            max={360}
          />
        </label>
      </div>
    </form>
  );
};

export default ColorSlider;
