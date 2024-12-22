import siteConfig from "../Config/siteConfig";
import { Endpoints } from "./apiEndPoints"
import axios from 'axios';

// common function that is reusable for all api call 

function authHeader(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let idToken;
    idToken = userData !== null ? userData['idToken'] : '';
    const content_type = 'application/json';
    return {
            'Content-Type': content_type,
            'Accept-Language': siteConfig.defaultLang,
            Authorization: `${idToken}`
        };
}


export const getService=(url,{thenCB,catchCB,finallyCB})=>{
    const requestHeader= authHeader();

    axios.get(Endpoints.base + url, {
        headers: requestHeader
    })
        .then((res)=>thenCB(res))
        .catch((err)=>catchCB(err))
        .finally(()=>finallyCB());
}

export const PostPutPatch=(url,body,{thenCB,catchCB,finallyCB,method})=>{
    const requestHeader= authHeader();
    console.log(requestHeader,Endpoints.base,url,body,method,Endpoints.base)
    try{
        axios[method](Endpoints.base + url,body, {
            headers: requestHeader
        })
            .then((res)=>thenCB && thenCB(res))
            .catch((err)=>catchCB && catchCB(err))
            .finally(()=>{finallyCB && finallyCB();});
    }catch(e){
        console.log(e)
    }
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

