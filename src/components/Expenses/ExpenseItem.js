import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//Component = function
function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title); //Hooks must be in react component functions
    //useState returns an array where the 1st element is the value and the second is the update value
    //Always returns two values in that order



    const clickHandler = () => { //We are not setting the value through an "=" so therefore a Const
                                 //is valid for title.
        setTitle('Updated!'); 
    }

    return (
            <Card className = "expense-item">
                <ExpenseDate date = {props.date}/>
                    <div className = "expense-item__description">
                        <h2>{title}</h2>
                        <div className = "expense-item__price">{props.amount}</div>
                    </div>
                    <button onClick = {clickHandler}>Change Title</button>
            </Card>
            );
    //<div>Date</div><div><h2>Title</h2></div><div>Amount</div> Doesn't work because you can only have one root snippet per each return
    //And we have 2 root elements in the commented code.
    //The stylistic design was achieved through the "ExpenseItem.css"
}

export default ExpenseItem;