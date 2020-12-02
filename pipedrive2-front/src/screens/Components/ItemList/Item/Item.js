import React from 'react'

import ItemDetailsContainer from '../../../Containers/ItemDetailsContainer/ItemDetailsContainer';
import { useHistory } from "react-router-dom";

function Item(props) {
    console.log('props data on item', props.data)
    let history = useHistory();
    function handleClick() {
        history.push(`/product/${props.data.id}`);
    }
    const displayItemEdit = () =>{
        return (<ItemDetailsContainer item={props.data}/>);
    }
    return (
        <tr  onClick={handleClick} key={props.data.id}>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.code}</td>
        </tr>);
}
export default Item;

