import React from 'react';
import fakeData from '../MainBox/fakeData.json';
import LazyLoader from '../LazyLoader/LazyLoader.view';
import TableSkeleton from '../skeleton/Skeleton';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../routes/path';
import { cal_discounted_price, changeRoute } from '../../helper/CommonFunction';
import Commonbutton from '../Button/Button.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';

const CartSproduct = (props) => {
    const {data,loader,cart} = props;
    const navigate = useNavigate();
    let sizes= cart.sizes;
    return (       
        <div className='cart-product card animate'>
            <div className='body'>
                <div className="data">
                    <p className='high-light'><Link to={path.single_products+"/"+data._id}>{data.name}</Link></p>
                    <p><span className='high-light'>Price:</span>
                        {data.discount ? <del>{data.price} </del>:null}
                        <span className='high-light'>{cal_discounted_price(data.price, data.discount)}</span>
                    </p>
                    <p><span className='high-light'>Size:</span>{sizes}</p>
                    <p><span className='high-light'>Quantity:</span>{cart.quantity}</p>
                    <p><span className='high-light'>Subtotal:</span>
                        {data.discount ? <del>{data.price*cart.quantity}</del>:null}
                        <span className='high-light'>{cal_discounted_price(data.price, data.discount) * cart.quantity}</span>
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
                    onclickCallback={() => { changeRoute(navigate,path.single_products+'/'+data._id) }}
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