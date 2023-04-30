import { useLocation, useNavigate } from "react-router-dom";
import { addQueryParams } from "../../helper/CommonFunction";
import { PostPutPatch } from "../../ApiServices/ApiServices";
import { Endpoints } from "../../ApiServices/apiEndPoints";
import {toast} from 'react-toastify';

const useMainBox = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
        console.log(query);
        PostPutPatch(Endpoints.products+`?${query}`,body,{
            thenCB:(res)=>{
                setData(res.data.products);
                setMTotal(res.data.total)
                console.log(res.data)
            },
            catchCB:(err)=>{toast.error("Something Went Wrong")},
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

    return{
        handleChange,
        handleSearch,
        getProducts,
        queryMaker
    }
};

export default useMainBox;