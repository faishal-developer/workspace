import { useSelector, useDispatch } from 'react-redux';
import { PostPutPatch, getService } from '../../ApiServices/ApiServices';
import { Endpoints } from '../../ApiServices/apiEndPoints';
import {toast} from 'react-toastify';
import { create_data as createSubCatData } from '../../Store/Sub_catSlice';
import { create_data } from '../../Store/Cat_slice';


const useHome = () => {
    const dispatch = useDispatch();

    const get_categories=({setCatLoader})=>{
        setCatLoader(true);
        PostPutPatch(Endpoints.get_categories,{},{
            thenCB: (res) => { dispatch(create_data(res.data[0]))},
            catchCB:(err)=>{toast.error("Something went wrong")},
            finallyCB:()=>{setCatLoader(false)},
            method:'post'
        })
    }

    const get_Subcategories=(setLoader)=>{
        setLoader(true);
        PostPutPatch(Endpoints.getSub_cat+`?limit=60`,{},{
            thenCB: (res) => { dispatch(createSubCatData(res.data[0]))},
            catchCB:()=>{toast.error("Something went wrong")},
            finallyCB:()=>{setLoader(false)},
            method:'post'
        })
    }

    return {
        get_categories,
        get_Subcategories
    }
};

export default useHome;