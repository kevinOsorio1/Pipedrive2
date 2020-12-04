import React from 'react'


import { useHistory } from "react-router-dom";

function Item(props) {

    let history = useHistory();
    function handleClick() {
        history.push(`/product/${props.data.id}`);
    }

    return (
        <tr onClick={handleClick} key={props.data.id}>
            { Object.keys(props.data).map((key, value) => {
                if (key !== 'id') {
                    return <td key={Math.random().toString()}>{props.data[key]}</td>
                }
                return '';
            })}
        </tr>);
}
export default Item;

