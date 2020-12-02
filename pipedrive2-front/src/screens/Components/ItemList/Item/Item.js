import React from 'react'

import ItemDetailsContainer from '../../../Containers/ItemDetailsContainer/ItemDetailsContainer';

function Item(props) {
    console.log('props data on item', props.data)

    return (
        <tr onClick={() => (<ItemDetailsContainer item={props.data}/>)} key={props.data.id}>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.code}</td>
        </tr>);
}
export default Item;

