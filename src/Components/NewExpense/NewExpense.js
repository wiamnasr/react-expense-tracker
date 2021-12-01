import React from "react";

import { Wrapper } from "./NewExpense.styles";

// components
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = () => {
  return (
    <Wrapper>
      <div className='new-expense'>
        <ExpenseForm />
      </div>
    </Wrapper>
  );
};

export default NewExpense;
