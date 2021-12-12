/*

We have a list but still have to add the logic

In the expenses js file we render by individually have the list elements. 
This isn't dynamic and is a problem

First step is to pass our expenses down via props which we do alaready
We are passing <Expenses items = {expenseList} /> showing that we are passing in the prop items which stores the
expenses (espenseList)

So in the expenses component we are currently getting our expenseList but we aren't using it at the moment.

We want to render one ExpenseItem per element in the List

"{}" shows dynamic expression allowing us to reach out to the data 
so {props.items.map()} creates an array based on the props.items array and transforms every element 
within the array

{props.items.map(expense => <ExpenseItem title =(expense.title) (*Continue this for amount and date)/>)} 
maps every element into an expenseItem js


EPISODE 3 (65)

How to add the array whenever a new expense is added?

We need to go to "App.js" because that is where we have the "expensesList" or the expense array.
We also have a "addExpenseHandler" function that is triggers whenever a new expense is added, and we receive
expense as a parameter
So all we have to do is Add the parameter "expense" to the rest of the array but just ebcause we added it
doesn't mean that it will change because it doesn't update the component so we need to use State.

Import useState from react and take the expenseList and take it our of the function "App" and name it 
"dummy expenses"

In the App function call "useState(Dummy expenses) and store it as [expenses, setExpenses]

Now that we integrated "useState" we can now call setExpenses() whenever we add a new Expense
Different ways to update the expense into the array

METHOD 1 Spreading the array
SetExpense(expense, ...expenseList)

However, this isn't really the correct way because we are depending on the previous state

METHOD 2
SetExpense(prevExpense => { return [expense, ...prevExpenses]});

Cleaner way to update our array 


EPISODE 4 (66)

Currently the code on an expense is added runs through all the elements and rewrites it causing the
performance to be lackluster
This is also a problem because any state that was being used for the element gets bugged out.

To fix:
Go to where we output the list of items then add a prop "key"
- key is a prop you can add to any item no matter the component
- It helps react identify the item
Give the item a value of "key" by setting it equal to the expense id

This allows react to identify an item and lets react know not to replace the current item with the new one
Therefore, fixing the bug of states being bugged out

Episode 5 (67)

Currently, when we select a year that has no expenses it just has an empty Ui so 
we should add a message.
A way to do this is by going to the Expenses file and use a condition (not an if condition)

{list.kength === 0 ? <p>No expenses. </> : *expense code*}
Syntax

{ *condition* ? *met* : *not met*}

Another method
{list.length === 0 && <p> No expenses Found. </p>}
The "&&" opperator means that if the first coniditon is met then it moves onto the next
and then returns the value

so instead of {list.length === 0 ? *met* : *not met*}
we can do {list.length === 0 && *no expense*}
and {list.length > 0 && *expense code*}

Another method
Add a variable and assign a default variable and add an "if" statement checking if length is > 0
then if met then overwrite the variable with the expenseitem code
then allowing us to reference the variable in the return.

Episode 6 (68)
Restructe the Expenses file
Extract the list component to make the expenses component a little cleaner

This list component will have a function that receives props and exports it
The filter logic will be in the expenses component still
And just take the snippit of the list logic and put it into the new component
This means we need to import the ExpenseItem class since the snippet will include <Expense Item>

The expenses item will now have to have a <list component/>
and have the import of the lsit component and can get ride of the expense item import
The list will receive the props "item" or jsut a value that will store the expenses for that year

Inside the list component it will have a className "expenses-list" *part of the css code*
and also will return the expenses list
and now the if statement will actually check if the length = 0 and return the empty list text
this also allows us to remove the variable from before
*/
