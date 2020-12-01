import React from "react";
import Table from "react-bootstrap/Table";
// Componente que lista los items recibidos 
const itememList = (props) => {
    console.log("RENDERING ITEMLIST");
    return (
        <Table>
            <thead>
                <tr scrollable={true}>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>codigo de producto</th>
                </tr>
            </thead>
            <tbody>
                {(props.data || []).map((item) => {
                    return (
                        <tr key={item.id}>          
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.itemCode}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default itememList;

/*

*/
