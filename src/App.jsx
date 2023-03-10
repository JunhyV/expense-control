import React, { useState } from "react";
import MainContainer from "./components/MainContainer";

const App = () => {
  const [money, setMoney] = useState(0);
  return (
        <div className="h-screen">
          <div className="w-full h-1/2 bg-blue-500 relative">
            <h1 className="font-bold text-white text-center text-4xl pt-16">
              Expense Control
            </h1>
            <MainContainer setMoney={setMoney} money={money}/>
          </div>
          <div className="w-full h-1/2 bg-slate-100">
            {money > 0 
            ? <div>filter</div>
            : null}

          </div>
        </div>
  );
};

export default App;
