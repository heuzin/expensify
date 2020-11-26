import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth'

// const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
// Store Creation
    const store = createStore (
        combineReducers({
            expenses: expenseReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );

    return store
};