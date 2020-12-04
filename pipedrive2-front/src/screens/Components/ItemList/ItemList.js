import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import ItemHeader from './ItemHeader/ItemHeader'
import Item from "./Item/Item";
// Componente que lista los items recibidos
function ItemList(props) {



    console.log("RENDERING ITEMLIST");
    return (
        <div>
            <div>
                <Table bordered={true}>
                    <thead>
                        <ItemHeader fields={props.fields} />
                    </thead>
                    <tbody>{
                        props.products.map(product => <Item data={product} id={product.id} />)
                    }</tbody>
                </Table>
            </div>
        </div>
    );
};

export default ItemList;

/*

*/
