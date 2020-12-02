import React from "react";
import Table from "react-bootstrap/Table";
import Aux from "../../../hoc/Aux";
import Item from "./Item/Item";
// Componente que lista los items recibidos
const itememList = (props) => {
    console.log("RENDERING ITEMLIST");
    return (
        <div>
            <Aux>
                <Table bordered={true}>
                    <thead>
                        <tr>
                            <th>Nombre de Producto</th>
                            <th>codigo de producto</th>
                        </tr>
                    </thead>
                    <tbody>{<Item data={props.data}></Item>}</tbody>
                </Table>
            </Aux>
        </div>
    );
};

export default itememList;

/*

*/
