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
    let data = fakeData[20];
    let sizes=['m-1','l-2']
    let quantity = 2;

    return (
        <div className='cart-product card animate'>
            <div className='body'>
                <div className="data">
                    <p className='high-light'><Link to={path.single_products+"/"+data._id}>{data.name}</Link></p>
                    <p><span className='high-light'>Price:</span>
                        {data.discount ? <del>{data.price} </del>:null}
                        <span className='high-light'>{cal_discounted_price(data.price, data.discount)}</span>
                    </p>
                    <p><span className='high-light'>Sizes:</span>{sizes.join(',')}</p>
                    <p><span className='high-light'>Quantity:</span>{quantity}</p>
                    <p><span className='high-light'>Subtotal:</span>
                        {data.discount ? <del>{data.price*quantity}</del>:null}
                        <span className='high-light'>{cal_discounted_price(data.price, data.discount) * quantity}</span>
                    </p>
                </div>
                <figure>
                    <LazyLoader placeholder={<TableSkeleton count={1} height={150}/>}>
                        <img src={data.images[0]} alt={data.name}/>
                    </LazyLoader>
                </figure>
            </div>
            <div className='buttons'>
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
                    className="button delete"
                    btnText={<FontAwesome icon={iconList.trash}/>}
                    isLoading={false}
                    disabled={false}
                />
                
            </div>
        </div>
    );
};

export default CartSproduct;