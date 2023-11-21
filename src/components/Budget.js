import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, totalExpenses, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const upperLimitValue = 20000;
  const handleBudgetChange = (event) => {
    let valueToDispatch = 0;
    if (event.target.value > upperLimitValue) {
      alert(
        `You cannot increase the budget value upper than the limit, currently of ${currency}${upperLimitValue}`
      );
      setNewBudget(upperLimitValue);
      valueToDispatch = upperLimitValue;
    } else if (event.target.value < totalExpenses) {
      alert(`You cannot reduce the budget value lower or equal than the spending, currently of ${currency}${totalExpenses}`);
      setNewBudget(totalExpenses);
      valueToDispatch = totalExpenses;
    } else {
      setNewBudget(event.target.value);
      valueToDispatch = event.target.value;
    }

    dispatch({
      type: "SET_BUDGET",
      payload: valueToDispatch,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
