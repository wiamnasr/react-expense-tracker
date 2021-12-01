// Importing useState hook to use inside my component function
import React, { useState } from "react";

// Styles
import { Wrapper } from "./ExpenseItem.styles";
import Card from "../../UI/Card/Card";

// Components
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => setTitle("Updated!");
  return (
    <Wrapper>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>£{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </Wrapper>
  );
};

export default ExpenseItem;
