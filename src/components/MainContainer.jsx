import React, { useState } from "react";

const MainContainer = ({ money, setMoney }) => {
  const [budget, setBudget] = useState(0);
  return (
    <div className="bg-white w-4/5 rounded-md shadow-xl absolute top-32 ml-auto mr-auto left-0 right-0 p-5 flex flex-col gap-5 justify-center items-center">
      {money > 0 ? (
        <>
          <div>Grafica</div>
          <div className="flex flex-col gap-2">
            <button className="container bg-red-500 rounded-md shadow-md" onClick={() => setMoney(0)}>Reset App</button>
            <h3 className="text-blue-500 font-bold text-2xl">
              Budget: <span className=" text-slate-500 font-normal">$200</span>
            </h3>
            <h3 className="text-blue-500 font-bold text-2xl">
              Available:{" "}
              <span className=" text-slate-500 font-normal">$200</span>
            </h3>
            <h3 className="text-blue-500 font-bold text-2xl">
              Expensed:{" "}
              <span className=" text-slate-500 font-normal">$200</span>
            </h3>
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl">Set a Budget</h2>
          <input
            type="number"
            className="border-2 w-1/2 p-2 font-light text-center"
            onChange={(e) => setBudget(e.target.value)}
          />
          <button
            onClick={() => setMoney(budget)}
            className="bg-blue-800 hover:bg-blue-900 shadow-md w-36 rounded-md p-2 font-bold text-white"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default MainContainer;
