import React,{useState} from'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import './ExpenseItem.css';

const ExpenseItem=(props)=> {
  const [price,setPrice]=useState(props.price)
  console.log('ExpenseItem Evaluated By React')
  const clickHandler = () => {
   setPrice(100)
    console.log(price)
  }; 

  return (
    <Card className="expense-item"> 
      <ExpenseDate date={props.date}/> 
      <div className="expense-item__description">
        <h2>{props.title}</h2> 
        <div className="expense-item__price">${price} </div> 
        <button  onClick={clickHandler}>Change Expense</button>
      </div>
      
    </Card> 
  );
}


export default ExpenseItem;



