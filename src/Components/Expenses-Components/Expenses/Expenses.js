import React from "react";

// Styles
import { Wrapper } from "./Expenses.styles";

// Components
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";

const Expenses = ({ items }) => (
  <Wrapper>
    <Card className='expenses'>
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  </Wrapper>
);

export default Expenses;
