import React from 'react'
import ExpenseForm from './ExpenseForm'
import './styles/NewExpense.css'

const NewExpense= (props)=>{

  const SaveExpenseDateHandler=(enteredDate)=>{
    const expenseDate={
      ...enteredDate,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseDate)
  }
  return(
    <div className='new-expense'>
      <ExpenseForm  onSaveExpenseDate={SaveExpenseDateHandler}/>
    </div>
  )
}


export default NewExpense;