import React from 'react';

function TableItem(props) {
    return <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.type}</td>
    </tr>;
}


TableItem.defaultProps = {
    id: -1,
    name: "name",
    type: "type"
}

export default TableItem;
