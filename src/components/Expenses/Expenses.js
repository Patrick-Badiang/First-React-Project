import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import Card from "../UI/Card";
import {useState} from 'react';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
        <Card className = "expenses">
            <ExpenseFilter onChangeFilter = {filterChangeHandler} selected = {filteredYear}/>

            <ExpenseItem 
            title={props.item[0].title} 
            amount={props.item[0].amount} 
            date = {props.item[0].date}
            />
            <ExpenseItem 
            title={props.item[1].title} 
            amount={props.item[1].amount} 
            date = {props.item[1].date}
            />
            <ExpenseItem 
            title={props.item[2].title} 
            amount={props.item[2].amount} 
            date = {props.item[2].date}
            />
        </Card>
        </div>
    );
}

export default Expenses;