import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/Blog",
    headers: {
        "Content-type": "application/json"
    }
});