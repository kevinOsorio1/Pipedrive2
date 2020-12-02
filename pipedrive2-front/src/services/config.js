import axios from "axios";
const BASE_URL = "https://api.pipedrive.com/v1";

const API = axios.create({
    baseUrl: "https://api.pipedrive.com/v1",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': '5e0c57f012b8c4af1fb8c084edd9171619140d53'
        
    },
});

export default API;
