import { useState } from "react";
import { getService } from "../../ApiServices/ApiServices";
import { toast } from "react-toastify";
import { createDataLS, getDataLS, properties } from "../../helper/localStorage";

const useSingleProduct = () => {
    const [sProduct,setSProduct] = useState({});
    const [sLoader,setSLoader] = useState(true)
    const [cart,setCart] = useState(1);
    const [size,setSize] = useState('');
    const [sizeEr,setSizeEr] = useState(false);

    const getProduct =(url)=>{
        getService(url,{
            thenCB:(res)=>{setSProduct(res.data.product)},
            catchCB:(err)=>{console.log(err);toast.error("Something Went Wrong")},
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

    const handleCart=()=>{
        if(!size){
            setSizeEr(true);
            return;
        }else{
            setSizeEr(false);
            let cartLS = getDataLS(properties.cart) ?? [];
            let cartObj = {}
            cartObj.product = sProduct._id;
            cartObj.quantity = cart;
            cartObj.sizes=size;
            cartObj.price = sProduct.price*cart;
            cartLS.push(cartObj);
            createDataLS(cartLS,properties.cart);
            toast.success("Added to cart successfully");
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