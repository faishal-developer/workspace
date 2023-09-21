import { useState } from "react";
import { getDataLS } from "../../helper/localStorage";
import { PostPutPatch } from "../../ApiServices/ApiServices";
import { Endpoints } from "../../ApiServices/apiEndPoints";
import { cal_discounted_price, cal_subtotal } from "../../helper/CommonFunction";
import { useDispatch, useSelector } from "react-redux";
import { create_data } from "../../Store/cartSlice";
import { toast } from "react-toastify";
import { update_cart } from "../../Store/sampleCartSlice";

const useCart = () => {
    const [data,setData]=useState([]);
    const [cart,setCart]= useState([]);
    const [loader,setLoader]= useState(true);
    const dispatch = useDispatch();
    const {products:cartStore} = useSelector(state=>state.sampleCartSlice);


    const getData=()=>{
        setLoader(true)
        setCart(cartStore);
        let productIds = cartStore.map(p=>{
            return p.product;
        })
        let payload = {ids:productIds};

        PostPutPatch(`${Endpoints.products}?limit=100`,payload,{
            thenCB:(res)=>{
                setData(res.data.products);
                let newData = res.data.products;
                const expectedData = cartStore.map((item)=>{
                    const newItem={...item};
                    const product = newData.find(p=>p._id===item.product);
                    newItem.images = [...product.images];
                    newItem.name = product.name;
                    newItem.price=product.price;
                    newItem.discount=product.discount;
                    // newItem.product_id=product._id;
                    newItem.product_data= product;
                   return newItem;
                });
                dispatch(update_cart(expectedData))
            },
            catchCB:(err)=>{
                toast.error("Something went wrong");
            },
            finallyCB:()=>{setLoader(false)},
            method:'post'
        })
    }

    const getTotal=(newData)=>{
        let t=0;
        newData = newData || cartStore;

        newData.forEach((el,i) => {
            t += cal_discounted_price(el.price, el.discount) * el.quantity;
        });
        return t;
    }

    return{
        data,getData,loader,cart,cartStore
    }
};

export default useCart;