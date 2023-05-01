import { useState } from "react";
import { getService } from "../../ApiServices/ApiServices";
import { toast } from "react-toastify";

const useSingleProduct = () => {
    const [sProduct,setSProduct] = useState({});
    const [sLoader,setSLoader] = useState(true)

    const getProduct =(url)=>{
        getService(url,{
            thenCB:(res)=>{setSProduct(res.data.product)},
            catchCB:(err)=>{console.log(err);toast.error("Something Went Wrong")},
            finallyCB:()=>{setSLoader(false)}
        })
    }

    const handleAddtoCartBtn=(str)=>{
        console.log(str,'workingbutn');
        if(str==='-'){
            console.log('-working')
        }
        if(str==='+'){
            console.log('+working')
        }
    }

    return { getProduct, sProduct, sLoader, handleAddtoCartBtn };
};

export default useSingleProduct;