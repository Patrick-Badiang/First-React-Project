
//Component Tree
//Holds other components
//Within each of those components holds mini tasks

import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenseList = [
    { title: 'Car Insurance', amount: "814", date: new Date(2021, 2, 28) },
    { title: 'Home Insurance', amount: "174", date: new Date(2021, 4, 15) },
    { title: 'Job Insurance', amount: "234", date: new Date(2021, 1, 5) },
  ]
  return (
    <div>
      <Expenses item = {expenseList}/>

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
