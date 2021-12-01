import React, { useState } from "react";

import { Wrapper } from "./NewExpense.styles";

// components
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Wrapper>
      <div className='new-expense'>
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense </button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default NewExpense;
