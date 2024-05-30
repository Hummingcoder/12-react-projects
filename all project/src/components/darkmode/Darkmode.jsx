import React, { useEffect } from "react";
import useChangeTheme from "./useChangeTheme";

const Darkmode = () => {
  const [theme, setTheme] = useChangeTheme("theme", "dark");

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="w-full h-screen bg-white dark:bg-black  grid place-content-center">
      <button
        onClick={handleToggle}
        className="border-2 bg-black dark:bg-white dark:border-white text-white dark:text-black border-black px-5 py-2 rounded-lg m-3"
      >
        {theme} mode
      </button>
    </div>
  );
};

export default Darkmode;
