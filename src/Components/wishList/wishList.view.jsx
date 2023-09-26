import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useWishList from './wishList.presenter';
import CartScardSkeleton from '../skeleton/cartScard.view';
import WishListSingleProduct from './wishListSingleProduct.view';


const WishList = (props) => {
    //todo:translate
    // const {t} = useTranslation();
    // const location = useLocation();
    const {getData,loader,wishListStore:wishListData}= useWishList();

    useEffect(()=>{
        getData();
    },[])
    return (
        <div className='wishlist-items'>
            {
                loader ? (<div className='my-3'><CartScardSkeleton/></div>):(
                    wishListData?.length? (
                        wishListData.map((sData,i)=><WishListSingleProduct data={wishListData[i]} loader={loader} key={sData._id} />)
                    ) : <p className='text-danger'>No Product added to WishList</p>
                )
            }
        </div>
    );
};

export default WishList;