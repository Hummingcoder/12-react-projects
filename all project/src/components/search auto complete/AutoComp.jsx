import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const AutoComp = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [results, setResults] = useState(false);
  const [inputVal, setinputVal] = useState("");

  const handleInput = (e) => {
    let val = e.target.value;
    setinputVal(val);
    if (val.length > 1) {
      let newData = data.filter(
        (item) => item.toLowerCase().indexOf(val.toLowerCase()) > -1
      );
      setResults(newData);
      setloading(true);
    } else {
      setResults([]);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const datalist = await response.json();
      const dt = datalist.users.map((item) => item.firstName);
      setdata(dt);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-[400px] w-full bg-cyan-400 text-center">
      <input
        onChange={handleInput}
        value={inputVal}
        className="border border-black rounded-lg mt-12 px-3 shadow-md"
        type="text"
        placeholder="search..."
      />{" "}
      {loading && (
        <div>
          {results.map((item, i) => (
            <p
              key={i}
              onClick={() => {
                setinputVal(item);
                // setResults([]);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComp;
