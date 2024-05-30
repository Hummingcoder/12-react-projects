import { useEffect, useState } from "react";

export default function useChangeTheme(key, defaulVal) {
  const [value, setvalue] = useState(() => {
    let currVal;

    try {
      currVal = JSON.parse(localStorage.getItem(key)) || String(defaulVal);
    } catch (error) {
      console.log(error);
      currVal = defaulVal;
    }
    return currVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [value, key]);

  return [value, setvalue];
}
