import React, { useState } from "react";

//  Style
import { Wrapper } from "./App.styles";

// Components
import Expenses from "./Components/Expenses-Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.66,
    date: new Date(2021, 10, 28),
  },
  {
    id: "e2",
    title: "Mortgage Payment",
    amount: 500.42,
    date: new Date(2021, 11, 23),
  },
  {
    id: "e3",
    title: "Bike Repair",
    amount: 94.02,
    date: new Date(2021, 10, 18),
  },
  {
    id: "e4",
    title: "Ice Cream",
    amount: 14.44,
    date: new Date(2021, 11, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <Wrapper>
      <div className='mainApp'>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </Wrapper>
  );
};

export default App;
