import environments from "../../.env";

const ItemsEndpoints = {
    LIST_ITEMS: "/products" + environments.REACT_APP_API_KEY,
     //URL para llamar a todos los items
    ITEM_DETAIL: "/products/" + environments.REACT_APP_API_KEY, //URL para llamar a un item en especifico
    CREATE_ITEM: "/products", // URl para crear producto
};

export default ItemsEndpoints;
