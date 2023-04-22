import React from 'react';
import fakeData from '../MainBox/fakeData.json';
import LazyLoader from '../LazyLoader/LazyLoader.view';
import TableSkeleton from '../skeleton/Skeleton';
import { Link } from 'react-router-dom';
import { path } from '../../routes/path';
import { cal_discounted_price } from '../../helper/CommonFunction';
import Commonbutton from '../Button/Button.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';

const CartSproduct = () => {
    let data = fakeData[0];
    let sizes=['m-1','l-2']
    let quantity = 2;

    return (
        <div className='cart-product'>
            <div className='body'>
                <div>
                    <p><Link to={path.single_products+"/"+data._id}>{data.name}</Link></p>
                    <p>Price:
                        {data.discount && <del>{data.price} </del>}
                        {cal_discounted_price(data.price, data.discount)}
                    </p>
                    <p>Sizes:{sizes.join(',')}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Subtotal:
                        {data.discount && <del>{data.price*quantity}</del>}
                        {cal_discounted_price(data.price, data.discount)*quantity}
                    </p>
                </div>
                <figure>
                    <LazyLoader placeholder={<TableSkeleton count={1} height={60}/>}>
                        <img src={data.images[0]} alt={data.name}/>
                    </LazyLoader>
                </figure>
            </div>
            <div>
                <Commonbutton
                    type="button"
                    onClick={()=>{}}
                    className="button"
                    btnText="+ Add Another Size"
                    isLoading={false}
                    disabled={false}
                />
                <Commonbutton
                    type="button"
                    onClick={()=>{}}
                    className="button"
                    btnText={<FontAwesome icon={iconList.trash}/>}
                    isLoading={false}
                    disabled={false}
                />
                
            </div>
        </div>
    );
};

export default CartSproduct;