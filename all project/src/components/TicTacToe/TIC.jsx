import React, { useEffect, useState } from "react";
import Grid from "./Grid";

const TIC = () => {
  const [girdArray, setGirdArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [checkMove, setCheckMove] = useState([]);
  const [boxTxt, setBoxTxt] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("x");
  const [winner, setwinner] = useState(null);

  const handleReset = () => {
    setCheckMove([]);
    setBoxTxt(Array(9).fill(""));
    setwinner(null);
    setGirdArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  };

  const checkWin = () => {
    const winningMove = [
      [1, 2, 3],
      [1, 4, 7],
      [1, 5, 9],
      [2, 5, 8],
      [4, 5, 6],
      [1, 5, 9],
      [3, 5, 7],
      [3, 9, 6],
      [8, 7, 9],
    ];
    for (let i = 0; i < winningMove.length; i++) {
      let [a, b, c] = winningMove[i];
      if (
        boxTxt[a - 1] &&
        boxTxt[b - 1] === boxTxt[a - 1] &&
        boxTxt[c - 1] === boxTxt[a - 1]
      ) {
        setwinner(boxTxt[a - 1]);
      }
    }
  };
  useEffect(() => {
    checkWin();
  }, [checkMove]);

  const handleClick = (id) => {
    if (!checkMove.includes(id)) {
      if (turn === "x") {
        boxTxt[id - 1] = "x";
        setTurn("o");
        setBoxTxt((prev) => {
          let arr = [...prev];
          arr[Number(id) - 1] = turn;
          return [...arr];
        });
      } else {
        boxTxt[id - 1] = "o";
        setTurn("x");
        setBoxTxt((prev) => {
          let arr = [...prev];
          arr[Number(id) - 1] = turn;

          return [...arr];
        });
      }
      setCheckMove((prev) => [...prev, id]);
    }
  };
  return (
    <section className="w-full h-screen grid place-content-center text-center">
      <div>
        <p>Tic-Tac-Toe</p>
      </div>

      {winner ? (
        <div>
          <p className="text-3xl">{winner} won</p>
          <button
            onClick={() => handleReset()}
            className="border rounded-xl border-black px-14 py-1 m-6 hover:bg-slate-100 shadow-md"
          >
            reset
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-5">
            <span className="text-3xl">{turn}</span>'s turn
          </p>
          <div className="w-[316px] h-[316px] bg-black flex flex-wrap items-center justify-center p-1 gap-1">
            {girdArray.map((id) => (
              <Grid
                handleClick={handleClick}
                txt={boxTxt[id - 1]}
                key={id}
                id={id}
              />
            ))}
          </div>
          <button
            onClick={() => handleReset()}
            className="border rounded-xl border-black px-14 py-1 m-6 hover:bg-slate-100 shadow-md"
          >
            reset
          </button>
        </div>
      )}
    </section>
  );
};

export default TIC;
