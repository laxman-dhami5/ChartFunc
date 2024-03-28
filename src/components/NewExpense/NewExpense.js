import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
   const [isEditing,setEditing]=useState(false);
   const onSaveExpenseDataHandler=(enteredExpenseData)=>{
   const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
   }
   props.onAddExpense(expenseData)
   setEditing(false);
   }

   const startEditingHandeler=()=>{
      setEditing(true);
   }
      const stopEditingHandeler=()=>{
         setEditing(false);
      
   }
   return(
    <div className="new-expense">
      {!isEditing &&<button onClick={startEditingHandeler}>Add New Expense</button>}
     {isEditing&&<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandeler}/>}
    </div>
   )
}
export default NewExpense;  