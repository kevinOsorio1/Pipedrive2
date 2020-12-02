import axios from "axios";

const API_PIPE="https://api.pipedrive.com/v1/"
const API = axios.create({
    baseURL: "http://agustinfranchetti.pythonanywhere.com/",
});

export default API;
