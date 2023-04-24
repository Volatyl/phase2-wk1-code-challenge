import React, { useEffect, useState } from "react";
import "./app.css";
import FilterData from "./FilterData";
import DisplayTrans from "./DisplayTrans";
import AddNewTransaction from "./AddNewTransaction";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  console.log(search);
  function handleSearch(value) {
    setSearch(value);
  }

  const filteredData = data.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <FilterData onSearch={handleSearch} />
      <DisplayTrans data={filteredData} />
      <AddNewTransaction data={data} setData={setData} />
    </div>
  );
}

export default App;
