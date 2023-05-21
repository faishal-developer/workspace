import { useState } from "react";
import { getDataLS } from "../../helper/localStorage";
import { PostPutPatch } from "../../ApiServices/ApiServices";
import { Endpoints } from "../../ApiServices/apiEndPoints";
import { cal_discounted_price } from "../../helper/CommonFunction";
import { useDispatch, useSelector } from "react-redux";
import { create_data } from "../../Store/cartSlice";
import { toast } from "react-toastify";

const useCart = () => {
    const [data,setData]=useState([]);
    const [cart,setCart]= useState([]);
    const [loader,setLoader]= useState(true);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cartSlice.products)


    const getData=()=>{
        let newDataLS = getDataLS('cart');
        setCart(newDataLS);
        let productIds = newDataLS.map(p=>{
            return p.product;
        })
        let payload = {ids:productIds};

        PostPutPatch(`${Endpoints.products}`,payload,{
            thenCB:(res)=>{
                setData(res.data.products);
                let newData = res.data.products;
                newData.forEach((item)=>{
                    let newItem = newDataLS.find((p)=>item._id===p.product);
                    item.quantity=newItem.quantity;

                });
                dispatch(create_data(newData))
            },
            catchCB:(err)=>{
                console.log(err);
                toast.error("Something went wrong");
            },
            finallyCB:()=>{setLoader(false)},
            method:'post'
        })
    }

    const getTotal=(newData)=>{
        let t=0;
        newData = newData || state;

        newData.forEach((el,i) => {
            t += cal_discounted_price(el.price, el.discount) * el.quantity;
        });
        return t;
    }

    return{
        data,getData,loader,cart,getTotal
    }
};

export default useCart;