import environments from "../../.env";
const PIPE_ENDPOINTS={
    
}
const ItemsEndpoints = {
    LIST_ITEMS: "pipedrive2/api/api/product" ,
     //URL para llamar a todos los items
    ITEM_DETAIL: "pipedrive2/api/api/product/id/", //URL para llamar a un item en especifico
    CREATE_ITEM: "pipedrive2/api/api/product", // URl para crear producto
};

export default ItemsEndpoints;
