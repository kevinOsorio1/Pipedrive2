import Endpoints from "./Endpoints/Endpoints";
import { APIFields } from './config'

export async function findAllFields() {
    return await
        APIFields.get(Endpoints.PRODUCT_FIELDS).then(data => data.data.data).then(data => {

            const loadedField = [];
            data.map((item) => {

                return loadedField.push({
                    id: item.id,
                    name: item.name

                })

            }

            )

            return loadedField;
        });
};


