import React from "react";

// Style
import { Wrapper } from "./ExpensesList.styles";

// components
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <Wrapper>
        <h2 className='expenses-list__fallback'>Found no expenses</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ul className='expenses-list'>
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default ExpensesList;
