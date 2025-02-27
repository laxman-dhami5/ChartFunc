import React,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const DUMMY_EXPENSES = [
  { id: "1", date: new Date(2024, 7, 15), title: "Insurance", price: 100 },
  { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10 },
  { id: "3", date: new Date(2025, 10, 11), title: "Pen", price: 1 },
  { id: "4", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
];
const App=(props)=> {
 const [expenses,setExpenses]= useState(DUMMY_EXPENSES)

  

  const addExpenseHandler=(expense)=>{
   setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses]
   });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
 