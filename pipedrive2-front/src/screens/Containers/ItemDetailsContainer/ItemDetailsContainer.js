import React, { useState,useEffect } from "react";
import {findById} from '../../../services/ItemServices';
import {useParams} from 'react-router-dom'
function ItemDetailsContainer(props) {
    const [product, setProduct] = useState(props.item);
    let {id} = useParams();

    useEffect(() => {
        findById(parseInt(id)).then((data) => {
            console.log('find by id',data)
            setProduct(data) })
    })
    return(
        <div>
            
        </div>
    );
}

export default ItemDetailsContainer;