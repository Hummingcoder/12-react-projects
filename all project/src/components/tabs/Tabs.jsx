import React, { useState } from "react";

const Tabs = () => {
  const [data, setdata] = useState([
    {
      title: "tab-1",
      id: "1",
      content: [
        {
          id: "101",
          text: "this is tab one hehe",
        },
      ],
    },
    {
      title: "tab-2",
      id: "2",
      content: [
        {
          id: "201",
          text: "this is tab two hehe",
        },
      ],
    },
    {
      title: "tab-3",
      id: "3",
      content: [
        {
          id: "301",
          text: "this is tab three hehe",
        },
      ],
    },
  ]);
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full bg-green-500 h-screen grid place-content-center">
      <div className="bg-gray-100 shadow-lg border-2 border-black rounded-lg w-[400px] p-2 mx-auto ">
        <div
          className={`flex justify-between items-center rounded-lg overflow-hidden mb-2`}
        >
          {data.map((item, i) => (
            <button
              key={item.id}
              className={` px-2 w-full ${
                index === i ? "bg-yellow-400" : "bg-transparent"
              }`}
              onClick={() => setIndex(i)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-200 text-center rounded-lg p-5">
          {data[index].content.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
