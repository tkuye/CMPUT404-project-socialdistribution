import axios from "axios";

const LOCALHOST = false;
// const FOREIGN_NODES = true;
const URL = "https://sd16-api.herokuapp.com/service";

const instance = axios.create({
    baseURL: (LOCALHOST) ? "http://localhost:8000/service" : URL,
    auth: {
        username: process.env.NEXT_PUBLIC_FE_UNAME || "default",
        password: process.env.NEXT_PUBLIC_FE_PW || "default" 
    },
    headers: {
        "Content-Type": "application/json",
    }
});

// if (FOREIGN_NODES) {
export const remoteInstances = [
    // TEAM 7
    axios.create({
        baseURL: "https://sd7-api.herokuapp.com/api",
        auth: {
            username: process.env.NEXT_PUBLIC_T7_UNAME || "default",
            password: process.env.NEXT_PUBLIC_T7_PW || "default"
        },
        headers: {
            "Content-Type": "application/json",
        }
    })
];
// }

export default instance;