import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import Item from "./Item/Item";
// Componente que lista los items recibidos
function ItemList(props) {

    console.log('products item list', props.data);
    console.log("RENDERING ITEMLIST");
    return (
        <div>
            <div>
                <Table bordered={true}>
                    <thead>
                        <tr>
                            <th>Nombre de Producto</th>
                            <th>codigo de producto</th>
                        </tr>
                    </thead>
                    <tbody>{(props.data || []).map((item) => {
                        for (const keys in item) {
                            return (<Item data={item}></Item>);
                        }

                    })}</tbody>
                </Table>
            </div>
        </div>
    );
};

export default ItemList;

/*

*/
