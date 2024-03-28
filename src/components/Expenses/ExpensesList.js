import React from "react";
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList=(props)=>{
if(props.expenses.length===1){
    return <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
}
return (
    <ul className='expenses-list'>
        {props.expenses.map((expense)=>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
            />
))}
    </ul>
)
}
export default ExpensesList;