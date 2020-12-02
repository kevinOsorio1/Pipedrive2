import React from 'react'

function Item(props) {
    console.log('props data on item', props.data)

    return (<tr key={props.data.id}>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        <td>{props.data.code}</td>
    </tr>);
}
export default Item;

