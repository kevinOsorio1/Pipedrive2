import API from "./config";
import ItemsEndpoints from "./Endpoints/Endpoints";

const ItemService = {
    getAll: () =>
        new Promise((resolve, reject) => {
            API.get(ItemsEndpoints.LIST_ITEMS)
                .then((response) => response.data.data.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        }),

    get: (id) =>
        new Promise((resolve, reject) => {
            API.get(ItemsEndpoints.ITEM_DETAIL + id)
                .then((res) => res.data.data)
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        }),

    post: (item) =>
        new Promise((resolve, reject) => {
            API.post(ItemsEndpoints.CREATE_ITEM, item);
        }),
};

export default ItemService;
