import axios from "./config";
import ItemsEndpoints from "./Endpoints/Endpoints";
import React from "react";
import Api from './config'
const BASE_URL = "https://api.pipedrive.com/v1";
export async function findAll() {
    const res = await Api
        .get(
            ItemsEndpoints.LIST_ITEMS
        )
        .then((response) => {
            console.log(response);
            return response.data
        }).then((res) => res.data).then(res => res.product)
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

    return await Api.get(ItemsEndpoints.ITEM_DETAIL + id).then((response) => {
        console.log(response);
        return response.data
    }).then((res) => {
        console.log(res);
        return res.data;
    }).then(res => {
        console.log(res.product)
        return res.product
    })
        .then((data) => {
            
            const loadedItems = [];
            for (const key in data) {
                loadedItems.push({
                    id: data[key].id,
                    name: data[key].name,
                    code: data[key].code,
                    unit: data[key].unit,
                });
            }
            console.log(loadedItems);
            return loadedItems;
        });
}
export async function create(item) {
    console.log(``);
    const procecedItem = {
        name: item.name,
        code: item.code,
        unit: item.unit,
        owner_id: 1
    };

    console.log(procecedItem);

    const res = await Api
        .post(ItemsEndpoints.CREATE_ITEM,
            procecedItem,

        )
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}

export async function update(id, item) {
    const procecedItem = {
        name: item.name,
        code: item.code,
        unit: item.unit,
        owner_id: 1
    };
    return await Api.put(ItemsEndpoints.UPDATE_ITEM + id, procecedItem);
}
