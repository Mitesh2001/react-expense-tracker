import  React,{useState,useEffect} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPESNSES = [];

const App = () => {

    const [expenses,setExpenses] = useState(DUMMY_EXPESNSES);

    const fetchData = () => {
        fetch('http://react_api.local/api/expense')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            setExpenses(data);
        });
    }

    useEffect(() => {
        fetchData();
    },[]);

    const addExpenseHandler = (expense) => {
        fetch('http://react_api.local/api/expense',{
            method:'POST',
            body : JSON.stringify(expense),
            headers:{
                'content-type' : 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        );
    }

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler} />
            <Expenses item = {expenses} />
        </div>
    );
}

export default App;