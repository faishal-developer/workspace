import React from 'react';
import ModalBootstrap from '../Modal/Modal.view';
import { NumberByLang, cal_discounted_price, capitalize, stringSlicer } from '../../helper/CommonFunction';
import SizeSelectBtn from '../sizeSelectBtn/sizeSelectBtn.view';
import './static/card.scss';
import { useTranslation } from 'react-i18next';
import useSingleProduct from '../../pages/SingleProduct/SingleProduct.presenter';
import Commonbutton from '../Button/Button.view';

const AddToCartModal = (props) => {
    const { t } = useTranslation();
    const {show,product,setShow} = props;
    // const {price,discount,sizes} = product;
    const { handleCart, sizeEr, handleAddtoCartBtn, cart, sizeHandler,size } = useSingleProduct();

    return (
        <ModalBootstrap
            show={show}
            handleClose={()=>setShow(false)}
            size='md'
            class=''
            title={<h6>Product Details</h6>}
            footer={
                <div >
                    <Commonbutton
                        type="button"
                        onclickCallback={() => setShow(false)}
                        className="button reddish_btn"
                        btnText="Cancel"
                        isLoading={false}
                        disabled={false}
                    />
                    <Commonbutton
                        type="button"
                        onclickCallback={()=>{
                            handleCart(product);
                            setShow(false)
                            // getData();
                        }}
                        className="button"
                        btnText="Add To Cart"
                        isLoading={false}
                        disabled={false}
                    />
                    
                </div>
            }
        >
            <div className='body'>
                <figure>
                    <img src={product?.images[0]} alt={product?.name}/>
                </figure>
                <div className='main-content'>
                    <h6 className='product-name'>{stringSlicer(capitalize(product?.name),50)}</h6>
                    <div className='price'>
                        {
                            Number(product?.discount) > 0 ? (
                                <del>{`${t("money")} ${NumberByLang(product?.price, t)}`}</del>
                            ) : null
                        }
                        <p>{`${t("money")} ${NumberByLang(Math.floor(cal_discounted_price(product?.price, product?.discount)), t)}`}</p>
                        <p>
                            {
                                Number(product?.discount) > 0 ? (
                                    <p className='save'>{t('singleProduct.save')}{product?.price - Math.floor(cal_discounted_price(product?.price, product?.discount))}</p>
                                ) : null
                            }
                        </p>
                    </div>
                    {
                        product?.sizes.length >= 1 ? (
                            <div className='sizes'>
                                <h6>{t('singleProduct.size')}</h6>
                                <SizeSelectBtn sData={size} clickHandler={sizeHandler} data={product?.sizes} />
                                {sizeEr && <p className='text-danger mb-0'>Please Select Size</p>}
                            </div>
                        ) : null
                    }
                    <div className='add-to-cart'>
                        <h6>Select Product Number</h6>
                        <SizeSelectBtn clickHandler={(v)=>handleAddtoCartBtn(v)} data={['-', NumberByLang(cart, t), '+']} />
                        {/* <Commonbutton
                            onclickCallback={handleCart}
                            className="button ml_10"
                            btnText={t('singleProduct.addToCart')}
                        /> */}
                    </div>
                            
                </div>
            </div>
        </ModalBootstrap>
    );
};

export default AddToCartModal;