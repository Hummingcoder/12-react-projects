import React, { useState } from "react";

const Accor = () => {
  const [showId, setShowId] = useState(null);
  const dataItems = [
    {
      id: "1",
      showAns: false,
      ques: "what is your querry?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus dicta quam modi debitis pariatur nesciunt ex, non voluptates quas itaque animi, reprehenderit, velit dignissimos. Sit provident deserunt minima voluptatum.",
    },
    {
      id: "2",
      showAns: false,
      ques: "what is your second querry?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus dicta quam modi debitis pariatur nesciunt ex, non voluptates quas itaque animi, reprehenderit, velit dignissimos. Sit provident deserunt minima voluptatum.",
    },
    {
      id: "3",
      showAns: false,
      ques: "what is your third query?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus dicta quam modi debitis pariatur nesciunt ex, non voluptates quas itaque animi, reprehenderit, velit dignissimos. Sit provident deserunt minima voluptatum.",
    },
  ];
  return (
    <div>
      {dataItems.map((data) => {
        return (
          <div
            key={data.id}
            onClick={() => {
              showId === data.id ? setShowId(null) : setShowId(data.id);
            }}
          >
            <p>{data.ques}</p>
            <p>{showId === data.id && data.ans}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Accor;
