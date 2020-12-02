import axios from "./config";
import ItemsEndpoints from "./Endpoints/Endpoints";
import React from "react";

const BASE_URL = "https://api.pipedrive.com/v1";
export async function findAll() {
    let res = await axios
        .get(
            "https://api.pipedrive.com/v1/products?start=0&api_token=5e0c57f012b8c4af1fb8c084edd9171619140d53"
        )
        .then((response) => response.data).then(res=> res.data)
        .then((data) => {
            const loadedItems = [];
            for (const key in data) {
                loadedItems.push({
                    id: data[key].id,
                    name: data[key].name,
                    code: data[key].code,
                    unit: data[key].unit,
                    tax: data[key].tax,
                });
            }
            console.log(loadedItems);
            return loadedItems;
        })

    return res;
}

export async function findById(id) {
    let res = await axios
        .get(BASE_URL + ItemsEndpoints.ITEM_DETAIL + id)
        .then((res) => res.data.data);
    return res;
}
export async function create(item) {
    console.log(ItemsEndpoints.CREATE_ITEM);
    const procecedItem = {
        name: item.name,
        code: item.code,
        unit: item.unit,
        tax: item.tax,
    };

    console.log(procecedItem);

    let res = await axios
        .post(
            "https://api.pipedrive.com/v1/products?api_token=5e0c57f012b8c4af1fb8c084edd9171619140d53",
            procecedItem,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        )
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}
