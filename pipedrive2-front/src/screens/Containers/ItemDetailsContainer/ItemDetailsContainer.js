import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';
import { findById } from "../../../services/ItemServices";
import ItemDetail from '../../Components/ItemDetail/ItemDetal';
function ItemDetailsContainer() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log('id', id);
    useEffect(() => {
        setProduct(() => findById(id));
    }, [id]);
    console.log('product', product);
    return (

        <ItemDetail product={product} />
    )
}

export default ItemDetailsContainer;