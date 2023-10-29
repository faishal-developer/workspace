import React, { useEffect, useState } from 'react';
import LazyLoader from '../LazyLoader/LazyLoader.view';
import TableSkeleton from '../skeleton/Skeleton';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../routes/path';
import { cal_discounted_price, cal_subtotal, changeRoute } from '../../helper/CommonFunction';
import Commonbutton from '../Button/Button.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import { useDispatch } from 'react-redux';
import { delete_cart_product } from '../../Store/sampleCartSlice';
import AddToCartModal from '../Card/AddToCartModal.view';
import DeleteModal from '../DeleteModal/DeleteModal.view';


//todo: add confirmation model to delete cart item
const CartSproduct = (props) => {
    const dispatch = useDispatch();
    let {data,loader} = props;
    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(false);
    const [deleteModalShow,setDeleteModalShow]=useState(false);

    return (       
        <div className='cart-product card animate'>
            <div className='body'>
                <div className="data">
                    <p className='high-light'><Link to={path.single_products+"/"+data?.product}>{data?.product_data?.name}</Link></p>
                    <p><span className='high-light'>Price:</span>
                        {data?.product_data?.discount ? <del>{data?.product_data?.price} </del>:null}
                        <span className='high-light'>{cal_discounted_price(data?.product_data?.price, data?.product_data?.discount)}</span>
                    </p>
                    <p><span className='high-light'>Size:</span>{data?.product_data?.sizes}</p>
                    <p><span className='high-light'>Quantity:</span>{data?.product_data?.quantity}</p>
                    <p><span className='high-light'>Subtotal:</span>
                        {data?.product_data?.discount ? <del>{data?.product_data?.price*data?.quantity}</del>:null}
                        <span className='high-light'>{
                            cal_subtotal({
                                price:data?.product_data?.price,
                                discount:data?.product_data?.discount,
                                quantity:data?.quantity
                            })
                        }</span>
                    </p>
                </div>
                <figure>
                    {/* <LazyLoader> */}
                        <img src={data?.product_data?.images?.[0]} alt={data?.product_data?.name}/>
                    {/* </LazyLoader> */}
                </figure>
            </div>
            <div className='buttons'>
                <Commonbutton
                    type="button"
                    onclickCallback={() => { 
                        setShowModal(true);
                     }}
                    className="button"
                    btnText="+ Add Another Size"
                    isLoading={false}
                    disabled={false}
                />
                <Commonbutton
                type="button"
                onclickCallback={()=>setDeleteModalShow(true)}
                className="button delete"
                btnText={<FontAwesome icon={iconList.trash}/>}
                isLoading={false}
                disabled={false}
                />

            </div>
            <DeleteModal
                show={deleteModalShow}
                setShow={setDeleteModalShow}
                handleDelete={()=>{dispatch(delete_cart_product(data.id))}}
            />
            <AddToCartModal show={showModal} setShow={setShowModal} product={data.product_data}/>
        </div>



    );
};

export default CartSproduct;