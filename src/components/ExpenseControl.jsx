import React, { useEffect, useState } from "react";
import newExpense from "../assets/nuevo-gasto.svg";
import AsideData from "./AsideData";
import ExpenseContainer from "./ExpenseContainer";
import Modal from "./Modal";

const ExpenseControl = ({ budget, setBudget }) => {
  const [expenses, setExpenses] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    setExpenses([1, 2]);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 over">
      <h1 className=" bg-blue-500 font-black text-4xl text-white flex justify-center items-center h-20">
        Expense Control
      </h1>

      <AsideData budget={budget} setBudget={setBudget} />

      <div className="bg-slate-100 pt-16 p-5 relative flex flex-col gap-5">
        {expenses.length > 0 ? (
          expenses.map((exp) => <ExpenseContainer />)
        ) : (
          <h2 className="font-bold text-2xl text-slate-500">No expense yet</h2>
        )}

        <img
        onClick={() => setDisplayForm(!displayForm)}
          className="w-10 absolute top-3 right-3 cursor-pointer"
          src={newExpense}
          alt="add-expense-btn"
        />
      </div>
      {displayForm ? <Modal setDisplayForm={setDisplayForm} displayForm={displayForm}/> : null}
      
    </div>
  );
};

export default ExpenseControl;
