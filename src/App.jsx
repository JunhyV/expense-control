import { stringify } from 'postcss';
import React, { useEffect, useState } from 'react'
import ExpenseControl from './components/ExpenseControl';
import Start from './components/Start'

const App = () => {
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const itemLS = JSON.parse(localStorage.getItem("budget"));
    setBudget(parseInt(itemLS));
  }, [])

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget))
  }, [budget])
  
  return (
    <div>
      {budget > 0 
      ? <ExpenseControl budget={budget} setBudget={setBudget}/> 
      :<Start setBudget={setBudget}/>}
    </div>
  )
}

export default App