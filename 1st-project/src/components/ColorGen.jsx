import React, { useCallback, useRef, useState } from "react";

const ColorGen = () => {
  const [color, setColor] = useState("#223300");
  const divRef = useRef(null);

  const handleColorChange = (type) => {
    let createdCode = "";
    if (type === "hex") {
      const code = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

      for (let i = 0; i < 6; i++) {
        createdCode += code[Math.floor(Math.random() * 16)];
      }
      setColor("#" + createdCode);
    } else if (type === "rgb") {
      let r = Math.floor(Math.random() * 361);
      let g = Math.floor(Math.random() * 361);
      let b = Math.floor(Math.random() * 361);
      setColor(`rgb(${r},${g},${b})`);
    } else if (type === "hsl") {
      let r = Math.floor(Math.random() * 361);
      let g = Math.floor(Math.random() * 101);
      let b = Math.floor(Math.random() * 101);
      setColor(`hsl(${r},${g}%,${b}%)`);
    }
    divRef.current.style.backgroundColor = color;
  };
  const colorRef = useRef(null);

  const handleClipboard = useCallback(() => {
    colorRef.current?.select();

    window.navigator.clipboard.writeText(color);
  });

  return (
    <section
      ref={divRef}
      className={`w-full h-screen my-12 flex flex-col justify-end items-center p-12 bg-[#59c7ef]`}
    >
      <div className="mb-24 bg-white overflow-hidden  rounded-md border-2 border-black">
        <input
          className="outline-none pl-6 py-2 w-[70%]"
          value={color}
          readOnly={true}
          ref={colorRef}
        />
        <button
          className="bg-blue-300 w-[30%]  h-[100%] text-center "
          onClick={handleClipboard}
        >
          copy
        </button>
      </div>
      <div className=" w-fit bg-gray-100 shadow-lg py-3 px-6 rounded-md border border-black flex gap-3 justify-between items-center">
        <button
          onClick={() => handleColorChange("hex")}
          className=" active:scale-95 bg-white py-1 px-3 rounded-md border border-black"
        >
          Hex
        </button>
        <button
          onClick={() => handleColorChange("hsl")}
          className=" active:scale-95 bg-white py-1 px-3 rounded-md border border-black"
        >
          HSL
        </button>
        <button
          onClick={() => handleColorChange("rgb")}
          className=" active:scale-95 bg-white py-1 px-3 rounded-md border border-black"
        >
          RGB
        </button>
      </div>
    </section>
  );
};

export default ColorGen;
