
//Component Tree
//Holds other components
//Within each of those components holds mini tasks

import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expense = [
  { id: "e1", title: 'Car Insurance', amount: "814", date: new Date(2021, 2, 28) },
  { id: "e2", title: 'Home Insurance', amount: "174", date: new Date(2021, 4, 15) },
  { id: "e3", title: 'Job Insurance', amount: "234", date: new Date(2021, 1, 5) },
]; 
function App() {
  const [expenses, setExpenses] = useState(dummy_expense);

  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} 
      //Allows for the children to reference this and interract with this component (the parent)
      />
      
      <Expenses item = {expenses}/>

    </div>
  );
}
// Can change the text in here and it results in the website text changing as well
//JSX (html code in javascript)

//<ExpenseItem></ExpenseItem> executes the component (</ExpenseItem>)'ExpenseItem' that is within the file "ExpenseItem"
//Props
// - passes data thorugh the help of Attributes

//Taught how to build user interfaces by building and combining components
//Learned how to share data


export default App;
