import React, { useEffect, useMemo } from 'react';
import CartSproduct from './cartSproduct.view';
import './cart.scss';
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../routes/path';
import { useTranslation } from 'react-i18next';
import useCart from './cart.presenter';
import CartScardSkeleton from '../skeleton/cartScard.view';
import { getTotal } from '../../helper/CommonFunction';

const Cart = (props) => {
    const {t} = useTranslation();
    const location = useLocation();
    const {getData,loader,cartStore:cartData}= useCart();

    useEffect(()=>{
        getData();
    },[])
    // todo: No Product added to Cart set it middle
    return (
        <div className='cart'>
            <div>
                {
                    loader ? (<div className='my-3'><CartScardSkeleton/></div>):(
                        cartData?.length? (
                            cartData.map((sData,i)=><CartSproduct data={cartData[i]} loader={loader} key={sData._id} />)
                        ) : <p className='text-danger'>No Product added to Cart</p>
                    )
                }
            </div>
            {
                location.pathname!==path.order ? (
                    <div className='place_order'>
                        <p>Total: {t('money')}{getTotal(cartData)}</p>
                        {/* <Commonbutton
                            type="button"
                            onClick={() => { }}
                            className="button"
                            btnText="Place Order"
                            isLoading={false}
                            disabled={false}
                        /> */}
                        <span className='button'>
                            <Link onClick={()=>props.setShow(false)} to={path.order}>Place Order</Link>
                        </span>
                    </div>
                ): props.children
            }
        </div>
    );
};

export default Cart;