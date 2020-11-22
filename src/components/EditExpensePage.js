import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense} 
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.match.params.id, expense))
                    props.history.push('/')
                }}
            />
            <button onClick={(e) => {
                props.dispatch(startRemoveExpense({ id: props.match.params.id }))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);