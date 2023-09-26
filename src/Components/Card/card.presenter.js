import { useDispatch, useSelector } from "react-redux";
import { create_WishList } from "../../Store/wishListSlice";
import { toast } from "react-toastify";

const useCardLogic = () => {
   const dispatch = useDispatch();
   const {products} = useSelector(state=>state.wishListSlice)

   const changeRoute = (method,url) =>{
        return method(url);
   }

   const addToWishList=(product)=>{
        dispatch(create_WishList(product));
        toast.success("Added to wishlist");
    }

    const wishListChecker=(id)=>{
      let isExist =false;
      products.forEach(el => {
         if(el.product_id===id){
            isExist=true;
            return;
         }
      });
      return isExist;
    }
   return {
    changeRoute,addToWishList,wishListChecker
   }
};

export default useCardLogic;