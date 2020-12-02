import environments from "../../.env";

const ItemsEndpoints = {
    LIST_ITEMS: "/products" + environments.REACT_APP_API_KEY,
     //URL para llamar a todos los items
    ITEM_DETAIL: "/products/" + environments.REACT_APP_API_KEY, //URL para llamar a un item en especifico
    CREATE_ITEM: "/products/products?api_token=5e0c57f012b8c4af1fb8c084edd9171619140d53", // URl para crear producto
};

export default ItemsEndpoints;
