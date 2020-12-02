import axios from "axios";

const API_PIPE="https://developers.pipedrive.com/docs/api/v1/#!/Products"
const API = axios.create({
    baseURL: API_PIPE,
});

export default API;
