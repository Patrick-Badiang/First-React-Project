import React from 'react';


import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); //interracting with the parent through the help of "props"
    }
    return <div className = "new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} /> 
        
    </div>

};

export default NewExpense;