// Styles
import { Wrapper } from "./ExpenseItem.styles";
import Card from "../../UI/Card/Card";

// Components
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  return (
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
};

export default ExpenseItem;
