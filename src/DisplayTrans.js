import React from "react";

function DisplayTrans({ data, updateData }) {
  function handleDelete(id) {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
      .then((res) =>
        res ? res.json : Promise.reject("Failed to delete transaction")
      )
      .then(() => updateData(data.filter((item) => item.id !== id)));
  }

  function handleSort(e) {
    const btn = e.target.textContent.toLowerCase();
    updateData([...data].sort((a, b) => a[btn].localeCompare(b[btn])));
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={handleSort}>DATE</th>
          <th onClick={handleSort}>DESCRIPTION</th>
          <th onClick={handleSort}>CATEGORY</th>
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
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DisplayTrans;
