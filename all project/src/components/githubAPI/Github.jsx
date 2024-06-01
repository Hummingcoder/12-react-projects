import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
//link =

const Github = () => {
  const inputText = useRef();
  const [name, setName] = useState("HummingCoder");
  const [user, setuser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputText.current.value);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => setuser(data))
      .catch((err) => console.log(console.log(err)));
  }, [name]);

  return (
    <div className="w-full h-screen grid grid-cols-1 place-content-center p-14 text-center">
      <form
        className="border-2 w-[400px] mx-auto flex justify-center items-center border-black rounded-lg overflow-hidden pl-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="w-full outline-none h-full"
          ref={inputText}
          placeholder="enter username..."
        />
        <button
          className="bg-blue-500 py-1 text-white px-7 text-lg"
          type="submit"
        >
          submit
        </button>
      </form>
      <Profile {...user} />
    </div>
  );
};

export default Github;
