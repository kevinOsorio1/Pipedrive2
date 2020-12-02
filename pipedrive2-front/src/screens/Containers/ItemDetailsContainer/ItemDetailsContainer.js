import React, { useState } from "react";

function ItemDetailsContainer(props) {
    const [product, setProduct] = useState(props.item);
    return(
        <div>
            {product.name}
        </div>
    );
}

export default ItemDetailsContainer;