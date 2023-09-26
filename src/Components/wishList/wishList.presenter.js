import { useState } from "react";
import { PostPutPatch } from "../../ApiServices/ApiServices";
import { Endpoints } from "../../ApiServices/apiEndPoints";
// import { cal_discounted_price } from "../../helper/CommonFunction";
import { useDispatch, useSelector } from "react-redux";
import { update_WishList } from "../../Store/wishListSlice";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
// import { update_cart } from "../../Store/sampleCartSlice";

const useWishList = () => {
    const [loader,setLoader]= useState(true);
    const dispatch = useDispatch();
    const {products:wishListStore} = useSelector(state=>state.wishListSlice);


    const getData=()=>{
        setLoader(true)
        let productIds = wishListStore.map(p=>{
            return p.product_id;
        })
        let payload = {ids:productIds};

        PostPutPatch(`${Endpoints.products}?limit=100`,payload,{
            thenCB:(res)=>{
                let newData = res.data.products;
                const expectedData =[];
                 wishListStore.forEach((item)=>{
                    const newItem={...item};
                    const product = newData.find(p=>p._id===item.product_id);
                    if(product){
                        newItem.product= product;
                        expectedData.push(newItem);
                    }
                });
                dispatch(update_WishList(expectedData))
            },
            catchCB:(err)=>{
                toast.error("Something went wrong");
            },
            finallyCB:()=>{setLoader(false)},
            method:'post'
        })
    }

    return{
        getData,loader,wishListStore
    }
};

export default useWishList;