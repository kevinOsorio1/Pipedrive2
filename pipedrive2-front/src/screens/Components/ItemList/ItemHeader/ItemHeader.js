import React from 'react'


import { useHistory } from "react-router-dom";

function ItemHeader(props) {

    return (
        <tr key={props.fields.id}>
            { props.fields.map((field) => {

                return <th key={Math.random().toString()}>{field.name}</th>
            })}
        </tr>);
}
export default ItemHeader;
