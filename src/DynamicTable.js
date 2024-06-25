import { useState } from 'react';

function DynamicTable({ onSubmit }){
  const [rows, setRows] = useState([{name: 'Solo Dance', club: 'Cypher', time: 900, status: true},
    {name: 'Band performance', club: 'Music Club', time: 1015, status: true},
    {name: 'Nukkad Natak', club: 'Crimson Curtain', time: 1530, status: true},
  /*Only for demonstration*/]);
    onSubmit(rows);

  const handleAddRow = () => {
    setRows([...rows, { name: '', club: '', time: '', status: false }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    // const newRows = [...rows];
    rows[index][name] = value;
    // sort according to time
    const newRows = [];
    const timeTemp = []
    for (let i = 0; i < rows.length; i++){
      timeTemp.push(rows[i]['time']);
    }
    timeTemp.sort(function(a, b){return a - b});
    let i = 0;
    while (timeTemp[i] === ''){
      timeTemp.shift();
      timeTemp.push('');
    }
    for (let i = 0; i < timeTemp.length; i++){
      let j = 0
      looop: {for (j; j < rows.length; j++){
        if (rows[j]['time'] === timeTemp[i]){
          newRows.push(rows[j]);
          rows.splice(j, 1);
          break looop;
        }
      }}
    }
    setRows(newRows);

    event.preventDefault();
    onSubmit(rows);
  };

  const handleStatusChange = (index, event) => {
    const { name, value } = event.target;
    const updatedStatus = [...rows];
    updatedStatus[index]['status'] = !rows[index]['status'];
    setRows(updatedStatus);

    event.preventDefault();
    onSubmit(rows);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(rows);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Club</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={row.name}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="club"
                  value={row.club}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="time"
                  value={row.time}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="button"
                  name="status"
                  value={row.status? "Approved": "Not Approved"}
                  onClick= {(e) => handleStatusChange(index, e)}
                />
                <label>{row.status}</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleAddRow}>
        Add Row
      </button>
    </form>
  );
};

export default DynamicTable;
