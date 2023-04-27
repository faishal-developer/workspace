import React, { useEffect, useState } from 'react';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import BP from '../../scss/CommonClass';
import fakedata from '../MainBox/fakeData.json';
import CartSproduct from './cartSproduct.view';
import './cart.scss';
import Commonbutton from '../Button/Button.view';
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../routes/path';
import { useTranslation } from 'react-i18next';

const Cart = (props) => {
    const data = fakedata.slice(1,5);
    const {t} = useTranslation();
    const location = useLocation();
    useEffect(()=>{
        console.log(location.pathname)
    },[location])
    return (
        <div className='cart'>
            <div>
                {
                    data.length? (
                        data.map((sData)=><CartSproduct/>)
                    ) : <p>No Product added to Cart</p>
                }
            </div>
            {
                location.pathname!==path.order ? (
                    <div className='place_order'>
                        <p>Total: {t('money')}{500}</p>
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