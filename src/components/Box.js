import React from "react";

const Box = ({ value, onclick }) => {
  return (
    <div
      onClick={onclick}
      className="w-32 h-32 text-center p-2 bg-slate-400 rounded-xl text-8xl cursor-pointer"
    >
      {value}
    </div>
  );
};

export default Box;
