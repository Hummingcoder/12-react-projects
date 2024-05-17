import React, { useState } from "react";
import AccordianItems from "./AccordianItems";
const dataItems = [
  {
    id: "1",
    ques: "what is your querry?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus dicta quam modi debitis pariatur nesciunt ex, non voluptates quas itaque animi, reprehenderit, velit dignissimos. Sit provident deserunt minima voluptatum.",
  },
  {
    id: "2",
    ques: "what is your second querry?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus dicta quam modi debitis pariatur nesciunt ex, non voluptates quas itaque animi, reprehenderit, velit dignissimos. Sit provident deserunt minima voluptatum.",
  },
  {
    id: "3",
    ques: "what is your third query?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus dicta quam modi debitis pariatur nesciunt ex, non voluptates quas itaque animi, reprehenderit, velit dignissimos. Sit provident deserunt minima voluptatum.",
  },
];

const Accordian = () => {
  const [data, setData] = useState(dataItems);
  const [changeVer, setChangeVer] = useState(false);
  const [showAns, setShowAns] = useState(null);
  const [showMulti, setShowMulti] = useState([]);

  const handleToggle = (id) => {
    if (changeVer) {
      setShowAns((prev) => (prev === id ? null : id));
    } else {
      let copyM = [...showMulti];
      if (copyM.includes(id)) {
        copyM.splice(copyM.indexOf(id), 1);
      } else {
        copyM.push(id);
      }

      setShowMulti(copyM);
      console.log(showMulti.indexOf(id));
    }
  };

  return (
    <div className="w-[500px] mx-auto my-6">
      <h1 className="text-3xl font-semibold font-serif pb-1 mb-6 border-b-2 border-gray-400 text-center">
        Accordian
      </h1>
      <div className="w-full h-fit bg-gray-100 p-4 rounded-md shadow-md">
        {data.map((item) => {
          return (
            <AccordianItems
              handleToggle={handleToggle}
              changeVer={changeVer}
              showAns={showAns}
              showMulti={showMulti}
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
      <div className="text-center">
        <button
          onClick={() => {
            setChangeVer(!changeVer);
            setShowAns("");
            setShowMulti([]);
          }}
          className="active:scale-95 w-[200px] mx-auto my-6 py-1 bg-gray-100 border-black border rounded-md shadow-md text-black font-bold capitalize"
        >
          {changeVer ? "first-version" : "second-version"}
        </button>
      </div>
    </div>
  );
};

export default Accordian;
