import React, { useEffect } from 'react';
import CartSproduct from './cartSproduct.view';
import './cart.scss';
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../routes/path';
import { useTranslation } from 'react-i18next';
import useCart from './cart.presenter';
import CartScardSkeleton from '../skeleton/cartScard.view';

const Cart = (props) => {
    const {t} = useTranslation();
    const location = useLocation();
    const {data,getData,loader,cart,getTotal}= useCart();

    useEffect(()=>{
        getData();
    },[])
    return (
        <div className='cart'>
            <div>
                {
                    loader ? (<div className='my-3'><CartScardSkeleton/></div>):(
                        data?.length? (
                            data.map((sData,i)=><CartSproduct cart={cart[i]} data={data[i]} loader={loader} key={sData._id} />)
                        ) : <p className='text-danger'>No Product added to Cart</p>
                    )
                }
            </div>
            {
                location.pathname!==path.order ? (
                    <div className='place_order'>
                        <p>Total: {t('money')}{getTotal()}</p>
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