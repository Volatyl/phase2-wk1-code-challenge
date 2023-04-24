import React, { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  function DisplayTransactions({ data }) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  function AddNewTransaction() {
    return (
      <form className="form">
       <label>DATE<input type="text" value="date" /></label> 
       <label>DESCRIPTION<input type="text" value="description"/></label> 
       <label>CATEGORY<input type="text" value="category" /></label> 
       <label>AMOUNT<input type="text" value="amount" /></label> 
      </form>
    );
  }

  return (
    <div>
      {/* <DisplayTransactions data={data} /> */}
      <AddNewTransaction />
    </div>
  );
}

export default App;
