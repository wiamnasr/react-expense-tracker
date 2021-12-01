// This is Stateless/presentational/dumb Component (Doesn't have internal state => just there to output some data)

import React from "react";

// Styles
import { Wrapper } from "./ExpenseItem.styles";
import Card from "../../UI/Card/Card";

// Components
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => (
  <Wrapper>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>£{props.amount}</div>
      </div>
    </Card>
  </Wrapper>
);

export default ExpenseItem;
