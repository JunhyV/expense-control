import React, { useState } from "react";

const Start = ({ setBudget }) => {
  const [money, setMoney] = useState(0);

  return (
    <div className="h-screen">
      <div className="bg-blue-500 h-1/2">
        <h1 className="h-1/2 flex items-center justify-center font-black text-4xl text-white">
          Expense Control
        </h1>
      </div>
      <div className="bg-slate-100 h-1/2"/>
      <div className="bg-white w-4/5 h-1/2 absolute ml-auto mr-auto mt-auto mb-auto top-0 bottom-0 left-0 right-0 rounded-md flex flex-col items-center justify-center gap-3 p-5 shadow-md">
        <h2 className="font-bold text-2xl">Set budget</h2>
        <input
          className="border-2 w-full rounded-md text-right"
          type="number"
          onChange={(e) => setMoney(e.target.value)}
        />
        <button 
        onClick={() => setBudget(money)}
        className="bg-red-500 font-bold text-white w-full rounded-md shadow-md p-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Start;
