import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//Component = function
function ExpenseItem(props) {
    

    return (
            <Card className = "expense-item">
                <ExpenseDate date = {props.date}/>
                    <div className = "expense-item__description">
                        <h2>{props.title}</h2>
                        <div className = "expense-item__price">{props.amount}</div>
                    </div>
            </Card>
            );
    //<div>Date</div><div><h2>Title</h2></div><div>Amount</div> Doesn't work because you can only have one root snippet per each return
    //And we have 2 root elements in the commented code.
    //The stylistic design was achieved through the "ExpenseItem.css"
}

export default ExpenseItem;