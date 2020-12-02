import API from "./config";
import ItemsEndpoints from "./Endpoints/Endpoints";

const ItemService = {
    findAll: () =>
        new Promise((resolve, reject) => {
            API.get(ItemsEndpoints.LIST_ITEMS)
                .then((response) => response.data.data.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        }),

    findById: (id) =>
        new Promise((resolve, reject) => {
            API.get(ItemsEndpoints.ITEM_DETAIL + id)
                .then((res) => res.data.data)
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        }),

    create: (item) =>
        new Promise((resolve, reject) => {
            API.post(ItemsEndpoints.CREATE_ITEM, item)
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        }),
};

export default ItemService;
