import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
   const[filteredYear,setFilteredYear] = useState('2019');
   const handleSelectedYear = (selectedYear) =>{
     setFilteredYear(selectedYear) ;
   }
   const filteredExpenses = props.items.filter((expense) => {
   return expense.date.getFullYear().toString() === filteredYear
  });
   
     return(
       <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectedYear={handleSelectedYear}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
        </Card>
        </div>
      );
}
export default Expenses;