import environments from "../../.env";
/*const PIPE_ENDPOINTS={
    LIST_ITEMS: "/product" ,
     //URL para llamar a todos los items
    ITEM_DETAIL: "pipedrive2/api/api/product/id/", //URL para llamar a un item en especifico
    CREATE_ITEM: "pipedrive2/api/api/product",
}
const API_ENDPOINTS={
    LIST_ITEMS: "pipedrive2/api/api/product" ,
     //URL para llamar a todos los items
    ITEM_DETAIL: "pipedrive2/api/api/product/id/", //URL para llamar a un item en especifico
    CREATE_ITEM: "pipedrive2/api/api/product",
}*/
const ItemsEndpoints = {
    LIST_ITEMS: "pipedrive2/api/api/product" ,
     //URL para llamar a todos los items
    ITEM_DETAIL: "pipedrive2/api/api/product/id/", //URL para llamar a un item en especifico
    CREATE_ITEM: "pipedrive2/api/api/product", // URl para crear producto
    UPDATE_ITEM: "pipedrive2/api/api/product/",
    FIND_CATEGORY: "pipedrive2/api/api/category/",
};

export default ItemsEndpoints;
