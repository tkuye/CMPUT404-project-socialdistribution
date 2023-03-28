import API from "./api";
import APIClient from "./api-client"
import NodeManager from "./node-manager";
import NodeClient from "./node-client";

const LocalNode = new API(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/service', {
    auth:{
        username: process.env.NEXT_PUBLIC_FE_UNAME || "credential env failure",
        password: process.env.NEXT_PUBLIC_FE_PW || "credential env failure"
    }
}, 'local');

const Team7 = new API('https://sd7-api.herokuapp.com/api', {
    auth:{
        username: process.env.NEXT_PUBLIC_T7_UNAME || "credential env failure",
        password: process.env.NEXT_PUBLIC_T7_PW || "credential env failure"
    }
}, 'remote');

const Team17 = new API('https://social-distribution-w23-t17.herokuapp.com', {
    auth:{
        username: process.env.NEXT_PUBLIC_T17_UNAME || "credential env failure",
        password: process.env.NEXT_PUBLIC_T17_PW || "credential env failure"
    }
}, 'remote');

const Team12 = new API('https://cmput404-project-data.herokuapp.com/service', {
    auth:{
        username: process.env.NEXT_PUBLIC_T12_UNAME || "credential env failure",
        password: process.env.NEXT_PUBLIC_T12_PW || "credential env failure"
    }
}, 'remote');


const nodeManager = new NodeManager({
    local: LocalNode,
    team12: Team12,
    team7: Team7,
    team17: Team17
});


const NextAPI = new APIClient();

const nodeClient = new NodeClient(NextAPI);

export {
    nodeClient as NodeClient,
    nodeManager as NodeManager
}
