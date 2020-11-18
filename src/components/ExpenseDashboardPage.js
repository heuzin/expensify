import React from 'react';
import ExpeseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpensesSummary';

const ExpenaseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseSummary />
        <ExpeseList />
    </div>
);

export default ExpenaseDashboardPage;