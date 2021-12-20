import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import {useState} from 'react';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    // const expenseForYear = props.item.filter(props.item > {props.item.date == filteredYear});

    const expenseForYear = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear});
    
    
    return (
        <div>
        <Card className = "expenses">
            <ExpenseFilter 
            onChangeFilter = {filterChangeHandler} 
            selected = {filteredYear}
            />
            <ExpensesChart expenses = {expenseForYear}/>
            <ExpensesList item = {expenseForYear}/>
            
        </Card>
        </div>
    );
}

export default Expenses;