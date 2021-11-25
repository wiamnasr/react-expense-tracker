// Components
import Expenses from "./Components/Expenses-Components/Expenses/Expenses";

const App = () => {
  const expenses = [
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

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
