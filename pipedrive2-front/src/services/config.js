import axios from "axios";

const API_PIPE_Products = "https://api.pipedrive.com/v1/";
const API_PIPE_Fields = "https://api.pipedrive.com/v1/productFields/";

export const APIProduct = axios.create({
    baseURL: API_PIPE_Products,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    params: { api_token: "5e0c57f012b8c4af1fb8c084edd9171619140d53" },
});

export const APIFields = axios.create({
    baseURL: API_PIPE_Fields,
    headers: {
        Accept: "application/json",
    },
    params: { api_token: "5e0c57f012b8c4af1fb8c084edd9171619140d53" },
})
