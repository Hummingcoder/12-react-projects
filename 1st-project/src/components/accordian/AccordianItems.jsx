import React from "react";

const AccordianItems = ({
  id,
  ques,
  changeVer,
  showMulti,
  showAns,
  ans,
  handleToggle,
}) => {
  return (
    <div
      onClick={() => handleToggle(id)}
      className="bg-white rounded-md shadow-sm my-3 px-3 overflow-hidden"
    >
      <p className=" text-xl pb-1">{ques}</p>
      {changeVer ? (
        <p
          className={`${
            showAns === id ? "h-[100px]" : "h-[0px]"
          } duration-300 ease-in-out`}
        >
          {ans}
        </p>
      ) : (
        <p
          className={`${
            showMulti.indexOf(id) !== -1 ? "h-[100px]" : "h-[0px]"
          } duration-300 ease-in-out`}
        >
          {ans}
        </p>
      )}
    </div>
  );
};

export default AccordianItems;
