import React, { useState } from "react";
import Box from "./Box";

const Gameboard = () => {
  const initialState = Array(9).fill(null);

  const [state, setState] = useState(initialState);

  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    const copyState = [...state];
    console.log(state[index] === "O" || state[index] === "X");
    if (state[index] === "O" || state[index] === "X") {
      return;
    } else {
      copyState[index] = isXTurn ? "X" : "O";
    }

    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let winner of winningConditions) {
      const [a, b, c] = winner;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    if (state.every((value) => value !== null)) {
      return "draw";
    }
    return false;
  };

  const gotWinner = checkWinner();

  const handleReset = () => {
    setState(initialState);
  };

  return (
    <>
      {gotWinner ? (
        gotWinner === "draw" ? (
          <div className="text-center">
            <div className="text-2xl text-purple-600">Oops! Game Draw</div>
            <button
              onClick={handleReset}
              className="px-6 py-3 text-white rounded-full bg-yellow-400 m-4 uppercase text-xl"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-2xl text-gray-600">
              Congratulations! Winner is :
              <span className="font-bold "> {gotWinner}</span>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 text-white rounded-full bg-green-500 uppercase m-4 text-xl"
            >
              New Game
            </button>
          </div>
        )
      ) : (
        <div className=" text-center">
          <div className="flex justify-center gap-2 m-2">
            <Box onclick={() => handleClick(0)} value={state[0]} />
            <Box onclick={() => handleClick(1)} value={state[1]} />
            <Box onclick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="flex justify-center gap-2 m-2">
            <Box onclick={() => handleClick(3)} value={state[3]} />
            <Box onclick={() => handleClick(4)} value={state[4]} />
            <Box onclick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="flex justify-center gap-2 m-2">
            <Box onclick={() => handleClick(6)} value={state[6]} />
            <Box onclick={() => handleClick(7)} value={state[7]} />
            <Box onclick={() => handleClick(8)} value={state[8]} />
          </div>
          <button
            onClick={handleReset}
            className="px-6 py-3 text-white rounded-full bg-red-600 uppercase mt-8 text-xl"
          >
            Reset Game
          </button>
        </div>
      )}
    </>
  );
};

export default Gameboard;
