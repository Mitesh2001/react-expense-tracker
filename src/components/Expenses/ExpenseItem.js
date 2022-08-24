import  React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            
            <div className="expense-item__description">
                <ExpenseDate date = {new Date(props.date)} />
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    );

}

export default ExpenseItem;