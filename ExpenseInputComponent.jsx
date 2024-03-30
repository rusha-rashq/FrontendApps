import React, { useState } from 'react';

function ExpenseInputComponent() {
    const [expense, setExpense] = useState({
        amount: '',
        category: '',
        description: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExpense(prevExpense => ({
            ...prevExpense,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle the submission of the expense data
        console.log('Expense submitted:', expense);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={expense.amount}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={expense.category}
                    onChange={handleInputChange}
                >
                    <option value="">Select a category</option>
                    <option value="food">Food</option>
                    <option value="transportation">Transportation</option>
                    <option value="housing">Housing</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={expense.description}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseInputComponent;
