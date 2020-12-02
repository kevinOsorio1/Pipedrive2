import axios from "./config";
import ItemsEndpoints from "./Endpoints/Endpoints";
import React from "react";
import Api from './config'
const BASE_URL = "https://api.pipedrive.com/v1";
export async function findAll() {
    let res = await Api
        .get(
            ItemsEndpoints.LIST_ITEMS
        )
        .then((response) => {
            console.log(response);
            return response.data}).then((res)=> res.data).then(res => res.product)
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
    let res = await Api
        .get(ItemsEndpoints.ITEM_DETAIL + id
    )
        .then((res) => res.data);
    return res;
}
export async function create(item) {
    console.log(``);
    const procecedItem = {
        name: item.name,
        code: item.code,
        unit: item.unit,
        tax: item.tax,
    };

    console.log(procecedItem);

    let res = await Api
        .post(ItemsEndpoints.CREATE_ITEM,
            procecedItem,
            
        )
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}
