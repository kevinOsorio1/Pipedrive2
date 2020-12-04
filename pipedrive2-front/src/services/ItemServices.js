
import Endpoints from "./Endpoints/Endpoints";

import { APIProduct } from './config'

export async function findAllItems() {
    return await APIProduct
        .get(
            Endpoints.PRODUCTS, { params: { start: '0' } }
        )
        .then((response) => {

            return response.data.data;
        })
        .then((data) => {
            const loadedItems = [];
            data.map((item) => {
                const loadItem = { id: item.id, name: item.name, code: item.code, unit: item.unit, tax: item.tax };
                return loadedItems.push(loadItem);
            })

            return loadedItems;
        }).catch((err) => console.error(err));


}

export async function findById(id) {

    return await APIProduct.get(Endpoints.PRODUCTS + '/' + id).then((response) => {
        console.log(response.data);

        return response.data.data;

    }).catch((err) => console.error(err));
}
export async function create(item) {
    console.log(item);
    const processedItem = {
        ...item,
        active_flag: '1', selectable: '1'
    };
    console.log(processedItem);
    let response = await APIProduct
        .post(Endpoints.PRODUCTS,
            processedItem,
        );
    console.log(response);
    return response;
}

export async function update(id, item) {

    console.log(item);
    return await APIProduct.put(Endpoints.PRODUCTS + id, { ...item });
}
