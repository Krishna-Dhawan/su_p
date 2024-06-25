import React, { useState } from 'react';
import DynamicTable from './DynamicTable';
import StaticTable from './StaticTable'
import './App.css'

function App() {
  const [tableData, setTableData] = useState([]);
  const handleTableData = (data) => {
    setTableData(data);
  };

  const [isAdmin, setIsAdmin] = useState(true);
  const handleSwitch = () => {
    setIsAdmin(!isAdmin);
  }

  let buttonValue = isAdmin? "switch to user": "switch to admin";
  let content = isAdmin? <DynamicTable onSubmit={handleTableData} />: <StaticTable data={tableData} />;

  return (
    <div>
      <header>
        <h1>Events</h1>
      </header>
      {content}
      <input type='button' value={buttonValue} onClick={handleSwitch} />
    </div>
  );
}

export default App;
