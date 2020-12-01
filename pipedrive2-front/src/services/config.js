import axios from "axios";
const BASE_URL = "https://developers.pipedrive.com/docs/api/v1/#!/Products";

const API = axios.create({
    baseUrl: BASE_URL,
});

export default API;
