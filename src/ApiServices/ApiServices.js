import siteConfig from "../Config/siteConfig";
import { Endpoints } from "./apiEndPoints"
import axios from 'axios';

function authHeader(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let idToken;
    idToken = userData !== null ? userData['idToken'] : '';
    const content_type = 'application/json';
    return {
            'Content-Type': content_type,
            'Accept-Language': siteConfig.defaultLang,
            Authorization: `Bearer ${idToken}`
        };
}


export const getService=(url,{thenCB,catchCB,finallyCB})=>{
    const requestHeader= authHeader();

    axios.get(Endpoints.base + url, {
        headers: requestHeader
    })
        .then((res)=>thenCB(res))
        .catch((err)=>catchCB(err))
        .finally(()=>finallyCB);
}

export const PostPutPatch=(url,body,{thenCB,catchCB,finallyCB,method})=>{
    const requestHeader= authHeader();

    axios[method](Endpoints.base + url,body, {
        headers: requestHeader
    })
        .then((res)=>thenCB(res))
        .catch((err)=>catchCB(err))
        .finally(()=>finallyCB);
}

export const deleteService = (url, { thenCB, catchCB, finallyCB }) => {
    const requestHeader = authHeader();

    axios.get(Endpoints.base + url, {
        headers: requestHeader
    })
        .then((res) => thenCB(res))
        .catch((err) => catchCB(err))
        .finally(() => finallyCB);
}

