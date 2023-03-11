import React from "react";

const ExpenseContainer = () => {
  return (
    <div className="bg-white shadow-md rounded-md flex flex-col items-center justify-between gap-2 p-5">
      <div className="w-full flex items-center justify-around">
        <img src="" alt="X" />
        <div>
          <h3 className="font-bold text-slate-400">Category</h3>
          <p className="font-bold text-slate-500">Expense</p>
          <div>
            <p className="font-bold text-slate-500">Added on: </p>
            <p>fecha</p>
          </div>
        </div>
      </div>
      <p className="font-bold text-2xl">$money</p>
    </div>
  );
};

export default ExpenseContainer;
