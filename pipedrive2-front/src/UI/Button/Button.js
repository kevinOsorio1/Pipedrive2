import React from "react";
import Button from "react-bootstrap/Button";

function ButtonContext(props) {
    return (
        <Button variant={props.type} onClick={props.clicked}>
            {props.children}
        </Button>
    );
}

export default ButtonContext;
