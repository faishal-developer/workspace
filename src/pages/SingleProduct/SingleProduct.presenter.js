import { useState } from "react";
import { getService } from "../../ApiServices/ApiServices";
import { toast } from "react-toastify";
import { createDataLS, getDataLS, properties } from "../../helper/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { create_cart } from "../../Store/sampleCartSlice";

const useSingleProduct = () => {
    const dispatch = useDispatch();
    const product = useSelector(state=>state.cartSlice.cart)
    const [sProduct,setSProduct] = useState({});
    const [sLoader,setSLoader] = useState(true)
    const [cart,setCart] = useState(1);
    const [size,setSize] = useState('');
    const [sizeEr,setSizeEr] = useState(false);

    const getProduct =(url)=>{
        getService(url,{
            thenCB:(res)=>{setSProduct(res.data.product)},
            catchCB:(err)=>{toast.error("Something Went Wrong")},
            finallyCB:()=>{setSLoader(false)}
        })
    }

    const sizeHandler=(str)=>{
        if(str){
            setSizeEr(false)
            setSize(str);
        }
    }

    const handleAddtoCartBtn=(str)=>{
        if(str==='-'){
            if(cart>1)setCart(cart-1)
        }
        if(str==='+'){
            setCart(cart+1)
        }
    }

    const handleCart=(product,func)=>{
        if(!size){
            setSizeEr(true);
            return;
        }else{
            setSizeEr(false);
            console.log(sProduct,product,sProduct._id);
            if(!product?._id && !sProduct?._id){
                toast.error("Failed to add in cart");
                return;
            }
            dispatch(create_cart({product:product?._id ? product :sProduct,cart,size}));
            toast.success("Added to cart successfully");
            func && func(false)
        }
    }

    const removeFromCart=(productId)=>{
        let cartLS = getDataLS(properties.cart);
        cartLS = cartLS.filter((p)=>p.product!==productId);
        createDataLS(cartLS);
        toast.info('Deleted Successfully')
    }

    return { removeFromCart,getProduct, handleCart, sProduct, sLoader, handleAddtoCartBtn, cart, sizeHandler, size, sizeEr };
};

export default useSingleProduct;