

function StaticTable({ data }){
    const renderedRows = data.map((club_event) => {
        if (club_event.status){
        return (
            <tr>
                <td>{club_event.name}</td>
                <td>{club_event.club}</td>
                <td>{club_event.time}</td>
            </tr>
        );}
    });

    return (<table className='static-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Club</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>);
}

export default StaticTable;
