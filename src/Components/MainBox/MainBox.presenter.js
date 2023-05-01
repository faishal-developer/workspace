import { useLocation, useNavigate } from "react-router-dom";
import { addQueryParams, scrollToTop, stickyPosition } from "../../helper/CommonFunction";
import { PostPutPatch } from "../../ApiServices/ApiServices";
import { Endpoints } from "../../ApiServices/apiEndPoints";
import {toast} from 'react-toastify';
import { useEffect, useMemo, useState } from "react";

const useMainBox = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [mLimit, setMLimit] = useState(20);
    const [mTotal, setMTotal] = useState(0)
    const [fLoader, setFLoader] = useState(true);
    const location = useLocation();
    const search = location.search;
    const queryParams = new URLSearchParams(search);
    const cat_ids = queryParams.get('cat');
    const subcat_ids = queryParams.get('s_cat');
    const keyword = queryParams.get('key');
    const ispopular = queryParams.get('popular');
    const islatest = queryParams.get('latest');
    const isdiscounted = queryParams.get('discounted');
    const [popular, setPopular] = useState([]);
    const [popularLoader, setPopularLoader] = useState(true)
    const [latest, setLatest] = useState([]);
    const [latestLoader, setLatestLoader] = useState(true)
    const [discounted, setDiscounted] = useState([]);
    const [discountedLoader, setDiscountedLoader] = useState(true)

    const handleChange = (e, setSearchTxt)=>{
        setSearchTxt(e.target.value); 
    }

    const handleSearch = (e,text)=>{
        text= text?.trim();
        if(e?.key==='Enter'){
            addQueryParams(navigate,location,{key:"key",value:e.target.value})
        }
        else if(text){
            addQueryParams(navigate, location, { key: "key", value: text })
        }
    }

    const getProducts = ({ query, body }, { setData, setLoader, setMTotal })=>{
        setLoader(true)
        PostPutPatch(Endpoints.products+`?${query}`,body,{
            thenCB:(res)=>{
                setData(res.data);
                setMTotal && setMTotal(res.data);
            },
            catchCB:(err)=>{toast.error("Something Went Wrong");console.log(err)},
            finallyCB: () => { setLoader(false)},
            method:'post'
        })
    }

    const queryMaker =(obj)=>{
        const query = {};
        for(const key in obj){
            if(obj[key]){
                if(Array.isArray(obj[key])){
                    if(obj[key][0]!=null)query[key] = obj[key];
                }else query[key] = obj[key];
            }
        }
        return query;
    }

    const initialCall=() => {
        //todo:view all click korle popular latest manage
        let body = queryMaker({ cat_ids: [cat_ids], subcat_ids: [subcat_ids], keyword })
        let query = `limit=${mLimit}&page=${page}`
        scrollToTop()
        if (ispopular) {
            query += `&ispopular=true`;
            getProducts({ query, body:{} }, { setData: (data) => setData(data[0]), setLoader: setFLoader, setMTotal:(data)=>data[1] });
            return
        }
        if (islatest) {
            query += `&isLatest=true`;;
            getProducts({ query, body:{} }, { setData: (data) => setData(data[0]), setLoader: setFLoader, setMTotal:(data)=>data[1] });
            return
        }
        if (isdiscounted) {
            query += `&discounted=true`;
            getProducts({ query, body:{} }, { setData: (data) => setData(data[0]), setLoader: setFLoader, setMTotal:(data)=>data[1] });
            return
        }
        getProducts({ query, body }, { setData: (data) => setData(data.products), setLoader: setFLoader, setMTotal:(data)=>setMTotal(data.total) });
    }

    const initialCall2=() => {
        const pQuery = `limit=${10}&page=${1}&ispopular=true`
        getProducts({ query: pQuery, body: {} }, { setData:(data)=>setPopular(data[0]), setLoader: setPopularLoader });
        const dQuery = `limit=${10}&page=${1}&discounted=true`
        getProducts({ query: dQuery, body: {} }, { setData: (data) => setDiscounted(data[0]) , setLoader: setDiscountedLoader });
        const lQuery = `limit=${10}&page=${1}&islatest=true`
        getProducts({ query: lQuery, body: {} }, { setData: (data) => setLatest(data[0]), setLoader: setLatestLoader });
    }

    return{
        handleChange,handleSearch,getProducts,queryMaker,data,setData,page,setPage,mLimit,setMLimit,mTotal,setMTotal,fLoader,setFLoader,popular,popularLoader,latest,latestLoader,discounted,discountedLoader,initialCall,initialCall2
    }
};

export default useMainBox;