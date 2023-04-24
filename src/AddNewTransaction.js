import React, { useState } from 'react';

function AddNewTransaction({ data, setData }) {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    function onSubmit(e) {
      e.preventDefault();
      const formData = {
        date: date,
        description: description,
        category: category,
        amount: amount,
      };
      setData([...data, formData]);
    }

    return (
      <form className="form" onSubmit={onSubmit}>
        <label>
          DATE
          <input
            type="text"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          DESCRIPTION
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          CATEGORY
          <input
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label>
          AMOUNT
          <input
            type="text"
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }

export default AddNewTransaction;
