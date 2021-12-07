import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    

    /*const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });*/

    const titleChangeHandler = (event) =>{ 
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
        This approach is wrong because we depend on the previous state
        setUserInput((prevState) => {
            return{...prevState, enteredTitle: event.target.value};
        }); This ensures that we are working on the altest state snapshot
        */
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault(); //Default JS behavior

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (//Two way binding is very common for forms since it allows for input
            //but at the same time is able to reset those values
    <form onSubmit ={submitHandler}> 
        <div className = 'new-expense__controls'>
            <div className = 'new-expense__control'>
                <label>Title</label>
                <input 
                type = 'text' 
                value ={enteredTitle} //Allows for what is called "Two-way binding"
                onChange = {titleChangeHandler}
                />
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input 
                type = 'number' 
                min = "0.01" 
                step = "0.01"
                value ={enteredAmount}
                onChange = {amountChangeHandler}
                />
            </div>
            <div className = 'new-expense__control'>
                <label>Date</label>
                <input 
                type = 'date' 
                min = "2019-01-01" 
                max = "2022-12-31" 
                value ={enteredDate}
                onChange = {dateChangeHandler}/>
            </div>
        </div>
        <div className =  'new-expense__actions'>
            <button type ="submit">AddExpense</button>    
        </div>
    </form>
    )
};

export default ExpenseForm;