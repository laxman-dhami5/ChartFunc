import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,seteEnteredDate]=useState('')
    const titleChangeHandeler=(event)=>{
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandeler=(event)=>{
      setEnteredAmount(event.target.value)
    }
    
    const dateChangeHandeler=(event)=>{
        seteEnteredDate(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            date:new Date(enteredDate),
            amount:enteredAmount
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        seteEnteredDate('')
        
    }
    
   return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandeler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandeler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023--01-01" value={enteredDate} onChange={dateChangeHandeler}></input>
            </div>
        </div>
        <div className=".new-expense__action">
            <button type="submit">Add Expenses</button>
        </div>
    </form>
   )
}
export default ExpenseForm;