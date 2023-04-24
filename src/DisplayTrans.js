import React from 'react';

function DisplayTrans({ data }) {
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

export default DisplayTrans;
