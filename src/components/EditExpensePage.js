import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense} 
                onSubmit={(expense) => {
                    props.onSubmitEditExpense(props.match.params.id, expense)
                    props.history.push('/')
                }}
            />
            <button onClick={(e) => {
                props.onSubmitRemoveExpense({ id: props.match.params.id })
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

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        onSubmitRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);