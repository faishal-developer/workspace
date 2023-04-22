import React, { useState } from 'react';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import BP from '../../scss/CommonClass';
import fakedata from '../MainBox/fakeData.json';
import CartSproduct from './cartSproduct.view';
import './cart.scss';

//todo: check if bp.container works or not
const Cart = (props) => {
    const [show,setShow] = useState(false);
    const data = fakedata.slice(1,5);

    return (
        <div className='cart'>
            <div>
                {
                    data.length? (
                        data.map((sData)=><CartSproduct/>)
                    ) : <p>No Product added to Cart</p>
                }
            </div>
        </div>
    );
};

export default Cart;