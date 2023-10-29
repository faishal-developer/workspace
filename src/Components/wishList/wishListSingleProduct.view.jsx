import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../routes/path';
import { cal_discounted_price, cal_subtotal, changeRoute } from '../../helper/CommonFunction';
import Commonbutton from '../Button/Button.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import { useDispatch } from 'react-redux';
import useWishList from './wishList.presenter';
import AddToCartModal from '../Card/AddToCartModal.view';
import { useTranslation } from 'react-i18next';
import { delete_WishList_product } from '../../Store/wishListSlice';
import DeleteModal from '../DeleteModal/DeleteModal.view';
// import { delete_cart_product } from '../../Store/sampleCartSlice';
// import AddToCartModal from '../Card/AddToCartModal.view';


//todo: add confirmation model to delete item
const WishListSingleProduct = (props) => {
    const {t}= useTranslation();
    const dispatch = useDispatch();
    let {data,loader} = props;
    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(false);
    const [deleteWishlistModal,setDeleteWishListModal]=useState(false);

    return (       
          <li key={data.id} className="wishlist-item">
            <div className="item-image">
              <img src={data?.product?.images?.[0]} alt={data?.product?.name}/>
            </div>
            <div className="item-details">
              <p className="item-name">
                  <Link to={path.single_products+"/"+data?.product_id}>{data?.product?.name}</Link>
              </p>
              <p className="item-price">
                      {data?.product?.discount ? <del className='price'>{t('money')} {data?.product?.price} </del>:null}
                  <span className='high-light price'>{t('money')} {cal_discounted_price(data?.product?.price, data?.product?.discount)} </span>
                  {data?.product.discount?(
                    <span className='price'> Save Tk.{data?.product?.price - cal_discounted_price(data?.product?.price, data?.product?.discount)}</span>
                  ):''}
              </p>
            </div>
            <div className="item-actions">
              <Commonbutton
                  type="button"
                  onclickCallback={() => { 
                      setShowModal(true);
                   }}
                  className="button"
                  btnText="+ Add To Cart"
                  isLoading={false}
                  disabled={false}
              />
              <Commonbutton
              type="button"
              onclickCallback={()=>setDeleteWishListModal(true)}
              className="button remove-button"
              btnText={"Delete"}
              isLoading={false}
              disabled={false}
              />
            </div>
            <DeleteModal
              show={deleteWishlistModal}
              setShow={setDeleteWishListModal}
              handleDelete={()=>dispatch(delete_WishList_product(data.id))}
            />

            <AddToCartModal show={showModal} setShow={setShowModal} product={data.product}/>

        </li>
    );
};

export default WishListSingleProduct;

