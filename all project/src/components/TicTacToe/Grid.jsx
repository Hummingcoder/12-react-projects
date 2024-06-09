import React, { useState } from "react";

const Grid = ({ handleClick, id, txt }) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className=" h-[100px] w-[100px] text-4xl grid place-content-center  bg-white"
    >
      {txt}
    </div>
  );
};

export default Grid;
