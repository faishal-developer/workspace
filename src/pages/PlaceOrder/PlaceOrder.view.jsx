import React, { useEffect } from 'react';
import InputField from '../../Components/InputFeild/InputFeild.view';
import BP from '../../scss/CommonClass';
import { NumberByLang, getTotal, pagetitle, scrollToTop } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Cart from '../../Components/cartProduct/cart.view'
import './placeOrder.scss';
import Commonbutton from '../../Components/Button/Button.view';
import useCart from '../../Components/cartProduct/cart.presenter';
import { useSelector } from 'react-redux';
import siteConfig from '../../Config/siteConfig';
import usePlaceOrder from './placeOrder.presenter';
import { useFormik } from 'formik';


const PlaceOrder = (props) => {
    pagetitle(props.pageTitle);
    const { t } = useTranslation();
    const state = useSelector((state) => state.sampleCartSlice.products);
    // const { getTotal }= useCart();
    const { formFormik,submitFormik }= usePlaceOrder();
    const { getData }= useCart();


    useEffect(()=>{
        getData();
        scrollToTop();
    },[])
    
    return (
        <div className={`${BP.container} place-order`}>
            <div className='checkout-info animate'>
                <div className='header'>
                    <h3>{t('placeorder.checkout')}</h3>
                </div>
                {/* <form autoComplete='off'> */}
                    <div>
                        <div className='input'>
                            <h6>{t('placeorder.contact')}</h6>
                            <InputField
                                placeHolder={t('placeorder.fullName')}
                                textType="text"
                                inputName="name"
                                asterisk={true}
                                whiteSpace={false}
                                onBlur={formFormik.handleBlur}
                                value={formFormik.values.name}
                                onchangeCallback={formFormik.handleChange}
                                inputClassName={formFormik.touched.name && formFormik.errors.name ? " is-invalid" : ""}
                                requiredMessage={formFormik.touched.name && formFormik.errors.name}
                                requiredMessageLabel={formFormik.touched.name || formFormik.isSubmitting ? formFormik.errors.name : ""}
                            />
                            <div className='grid-item'>
                                <InputField
                                    placeHolder={t('placeorder.email')}
                                    textType="email"
                                    inputName="email"
                                    asterisk={true}
                                    whiteSpace={false}
                                    onBlur={formFormik.handleBlur}
                                    value={formFormik.values.email}
                                    onchangeCallback={formFormik.handleChange}
                                    inputClassName={formFormik.touched.email && formFormik.errors.email ? " is-invalid" : ""}
                                    requiredMessage={formFormik.touched.email && formFormik.errors.email}
                                    requiredMessageLabel={formFormik.touched.email || formFormik.isSubmitting ? formFormik.errors.email : ""}
                                />
                                <InputField
                                    placeHolder={t('placeorder.phone')}
                                    textType="text"
                                    inputName="phone"
                                    asterisk={true}
                                    whiteSpace={false}
                                    onBlur={formFormik.handleBlur}
                                    value={formFormik.values.phone}
                                    onchangeCallback={formFormik.handleChange}
                                    inputClassName={formFormik.touched.phone && formFormik.errors.phone ? " is-invalid" : ""}
                                    requiredMessage={formFormik.touched.phone && formFormik.errors.phone}
                                    requiredMessageLabel={formFormik.touched.phone || formFormik.isSubmitting ? formFormik.errors.phone : ""}
                                />
                            </div>
                            <div className='ship-info'>
                                <h6 className=''> {t('placeorder.shipping')}</h6>
                                <InputField
                                    placeHolder={t('placeorder.address')}
                                    textType="text"
                                    inputName="address"
                                    asterisk={true}
                                    whiteSpace={false}
                                    onBlur={formFormik.handleBlur}
                                    value={formFormik.values.address}
                                    onchangeCallback={formFormik.handleChange}
                                    inputClassName={formFormik.touched.address && formFormik.errors.address ? " is-invalid" : ""}
                                    requiredMessage={formFormik.touched.address && formFormik.errors.address}
                                    requiredMessageLabel={formFormik.touched.address || formFormik.isSubmitting ? formFormik.errors.address : ""}
                                />
                                <div className='info-flex2'>
                                    <InputField
                                        placeHolder={t('placeorder.city')}
                                        textType="text"
                                        inputName="city"
                                        asterisk={true}
                                        whiteSpace={false}
                                        onBlur={formFormik.handleBlur}
                                        value={formFormik.values.city}
                                        onchangeCallback={formFormik.handleChange}
                                        inputClassName={formFormik.touched.city && formFormik.errors.city ? " is-invalid" : ""}
                                        requiredMessage={formFormik.touched.city && formFormik.errors.city}
                                        requiredMessageLabel={formFormik.touched.city || formFormik.isSubmitting ? formFormik.errors.city : ""}
                                    />
                                    <InputField
                                        placeHolder={t('placeorder.upazilla')}
                                        textType="text"
                                        inputName="upazilla"
                                        asterisk={true}
                                        whiteSpace={false}
                                        onBlur={formFormik.handleBlur}
                                        value={formFormik.values.upazilla}
                                        onchangeCallback={formFormik.handleChange}
                                        inputClassName={formFormik.touched.upazilla && formFormik.errors.upazilla ? " is-invalid" : ""}
                                        requiredMessage={formFormik.touched.upazilla && formFormik.errors.upazilla}
                                        requiredMessageLabel={formFormik.touched.upazilla || formFormik.isSubmitting ? formFormik.errors.upazilla : ""}
                                    />
                                    
                                </div>
                                <div className='info-flex1'>
                                    
                                    <InputField
                                        placeHolder={t('placeorder.district')}
                                        textType="text"
                                        inputName="district"
                                        asterisk={true}
                                        whiteSpace={false}
                                        onBlur={formFormik.handleBlur}
                                        value={formFormik.values.district}
                                        onchangeCallback={formFormik.handleChange}
                                        inputClassName={formFormik.touched.district && formFormik.errors.district ? " is-invalid" : ""}
                                        requiredMessage={formFormik.touched.district && formFormik.errors.district}
                                        requiredMessageLabel={formFormik.touched.district || formFormik.isSubmitting ? formFormik.errors.district : ""}
                                    />
                                    <InputField
                                        placeHolder={t('placeorder.altPhone')}
                                        textType="text"
                                        inputName="phone_2"
                                        asterisk={true}
                                        whiteSpace={false}
                                        onBlur={formFormik.handleBlur}
                                        value={formFormik.values.phone_2}
                                        onchangeCallback={formFormik.handleChange}
                                        inputClassName={formFormik.touched.phone_2 && formFormik.errors.phone_2 ? " is-invalid" : ""}
                                        requiredMessage={formFormik.touched.phone_2 && formFormik.errors.phone_2}
                                        requiredMessageLabel={formFormik.touched.phone_2 || formFormik.isSubmitting ? formFormik.errors.phone_2 : ""}
                                    />
                                </div>
                                
                                <InputField
                                    placeHolder={t('placeorder.note')}
                                    textType="text"
                                    inputName="note"
                                    asterisk={false}
                                    whiteSpace={false}
                                    onBlur={formFormik.handleBlur}
                                    value={formFormik.values.note}
                                    onchangeCallback={formFormik.handleChange}
                                    inputClassName={formFormik.touched.note && formFormik.errors.note ? " is-invalid" : ""}
                                    requiredMessage={formFormik.touched.note && formFormik.errors.note}
                                    requiredMessageLabel={formFormik.touched.note || formFormik.isSubmitting ? formFormik.errors.note : ""}
                                />
                            </div>
                        </div>
                    </div>
                {/* </form> */}
                <div className={`${BP.card} summary`}>
                    <p className='header'>{t('placeorder.payable')}</p>
                    <h3>{`${t('money')} ${NumberByLang(getTotal(state)+siteConfig.delivery_charge,t)}`}</h3>
                    <h6>{t('placeorder.breakdown')}</h6>
                    <p>{t('placeorder.total')}<span className='pal-green'>{t('money')} {NumberByLang(getTotal(state),t)}</span> </p>
                    <p>{t('placeorder.ship')} <span className='pal-green'>{t('money')} {NumberByLang(siteConfig.delivery_charge,t)}</span></p>
                </div>
                <div className={`${BP.card} summary`}>
                    <p>{t('placeorder.payment_comment')}</p>
                </div>
                <div>
                    <InputField
                        placeHolder={t('placeorder.bikash')}
                        textType="text"
                        inputName="bikash_number"
                        asterisk={false}
                        whiteSpace={false}
                        onBlur={formFormik.handleBlur}
                        value={formFormik.values.bikash_number}
                        onchangeCallback={formFormik.handleChange}
                        inputClassName={formFormik.touched.bikash_number && formFormik.errors.bikash_number ? " is-invalid" : ""}
                        requiredMessage={formFormik.touched.bikash_number && formFormik.errors.bikash_number}
                        requiredMessageLabel={formFormik.touched.bikash_number || formFormik.isSubmitting ? formFormik.errors.bikash_number : ""}
                    />
                    <InputField
                        placeHolder={t('placeorder.transaction_id')}
                        textType="text"
                        inputName="transaction_id"
                        asterisk={false}
                        whiteSpace={false}
                        onBlur={formFormik.handleBlur}
                        value={formFormik.values.transaction_id}
                        onchangeCallback={formFormik.handleChange}
                        inputClassName={formFormik.touched.transaction_id && formFormik.errors.transaction_id ? " is-invalid" : ""}
                        requiredMessage={formFormik.touched.transaction_id && formFormik.errors.transaction_id}
                        requiredMessageLabel={formFormik.touched.transaction_id || formFormik.isSubmitting ? formFormik.errors.transaction_id : ""}
                    />
                </div>
                <div className='payment'>
                    <h6>{t('placeorder.payment')}</h6>
                    {/* todo: implement later */}
                    <Commonbutton
                        type="button"
                        onclickCallback={formFormik.handleSubmit}
                        className="button"
                        btnText={t('placeorder.order')}
                        isLoading={false}
                        disabled={false}
                    />
                </div>
            </div>
            <div className={`${BP.card} cart-overview cart-two animate`}>
                <h3>{t('placeorder.cartOverView')}</h3>
                <Cart>
                    <div className={`${BP.card} summary`}>
                        <p className='header'>{t('placeorder.payable')}</p>
                        <h3>{`${t('money')} ${NumberByLang(getTotal(state) + siteConfig.delivery_charge, t)}`}</h3>
                        <h6>{t('placeorder.breakdown')}</h6>
                        <p>{t('placeorder.total')}<span className='pal-green'>{t('money')} {NumberByLang(getTotal(state), t)}</span> </p>
                        <p>{t('placeorder.ship')} <span className='pal-green'>{t('money')} {NumberByLang(siteConfig.delivery_charge,t)}</span></p>
                    </div> 
                </Cart>
            </div>
        </div>
    );
};

export default React.memo(PlaceOrder);