import React, { useEffect } from 'react';
import InputField from '../../Components/InputFeild/InputFeild.view';
import BP from '../../scss/CommonClass';
import { getTotal, pagetitle, scrollToTop } from '../../helper/CommonFunction';
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
    const state = useSelector((state) => state.cartSlice.products);
    // const { getTotal }= useCart();
    const {  submitFormik, validateFormik }= usePlaceOrder();

    let formik = useFormik({
        initialValues: {},
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateFormik,
        onSubmit: submitFormik,
    })

    useEffect(()=>{
        scrollToTop();
    },[])
    
    return (
        <div className={`${BP.container} place-order`}>
            <div className='checkout-info animate'>
                <div className='header'>
                    <h3>{t('placeorder.checkout')}</h3>
                </div>
                <form autoComplete='off'>
                    <div>
                        <div className='input'>
                            <h6>{t('placeorder.contact')}</h6>
                            <InputField
                                placeHolder={t('placeorder.fullName')}
                                textType="text"
                                inputName="name"
                                asterisk={true}
                                whiteSpace={false}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                onchangeCallback={formik.handleChange}
                                inputClassName={formik.touched.name && formik.errors.name ? " is-invalid" : ""}
                                requiredMessage={formik.touched.name && formik.errors.name}
                                requiredMessageLabel={formik.touched.name || formik.isSubmitting ? formik.errors.name : ""}
                            />
                            <div className='grid-item'>
                                <InputField
                                    placeHolder={t('auth.password')}
                                    textType="email"
                                    inputName="email"
                                    asterisk={true}
                                    whiteSpace={false}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    onchangeCallback={formik.handleChange}
                                    inputClassName={formik.touched.email && formik.errors.email ? " is-invalid" : ""}
                                    requiredMessage={formik.touched.email && formik.errors.email}
                                    requiredMessageLabel={formik.touched.email || formik.isSubmitting ? formik.errors.email : ""}
                                />
                                <InputField
                                    placeHolder={t('placeorder.phone')}
                                    textType="text"
                                    inputName="phone"
                                    asterisk={true}
                                    whiteSpace={false}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    onchangeCallback={formik.handleChange}
                                    inputClassName={formik.touched.phone && formik.errors.phone ? " is-invalid" : ""}
                                    requiredMessage={formik.touched.phone && formik.errors.phone}
                                    requiredMessageLabel={formik.touched.phone || formik.isSubmitting ? formik.errors.phone : ""}
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
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}
                                    onchangeCallback={formik.handleChange}
                                    inputClassName={formik.touched.address && formik.errors.address ? " is-invalid" : ""}
                                    requiredMessage={formik.touched.address && formik.errors.address}
                                    requiredMessageLabel={formik.touched.address || formik.isSubmitting ? formik.errors.address : ""}
                                />
                                <div className='info-flex2'>
                                    <InputField
                                        placeHolder={t('placeorder.city')}
                                        textType="text"
                                        inputName="city"
                                        asterisk={true}
                                        whiteSpace={false}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.city}
                                        onchangeCallback={formik.handleChange}
                                        inputClassName={formik.touched.city && formik.errors.city ? " is-invalid" : ""}
                                        requiredMessage={formik.touched.city && formik.errors.city}
                                        requiredMessageLabel={formik.touched.city || formik.isSubmitting ? formik.errors.city : ""}
                                    />
                                    <InputField
                                        placeHolder={t('placeorder.upazilla')}
                                        textType="text"
                                        inputName="upazilla"
                                        asterisk={true}
                                        whiteSpace={false}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.upazilla}
                                        onchangeCallback={formik.handleChange}
                                        inputClassName={formik.touched.upazilla && formik.errors.upazilla ? " is-invalid" : ""}
                                        requiredMessage={formik.touched.upazilla && formik.errors.upazilla}
                                        requiredMessageLabel={formik.touched.upazilla || formik.isSubmitting ? formik.errors.upazilla : ""}
                                    />
                                    
                                </div>
                                <div className='info-flex1'>
                                    
                                    <InputField
                                        placeHolder={t('placeorder.district')}
                                        textType="text"
                                        inputName="district"
                                        asterisk={true}
                                        whiteSpace={false}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.district}
                                        onchangeCallback={formik.handleChange}
                                        inputClassName={formik.touched.district && formik.errors.district ? " is-invalid" : ""}
                                        requiredMessage={formik.touched.district && formik.errors.district}
                                        requiredMessageLabel={formik.touched.district || formik.isSubmitting ? formik.errors.district : ""}
                                    />
                                    <InputField
                                        placeHolder={t('placeorder.altPhone')}
                                        textType="text"
                                        inputName="phone_2"
                                        asterisk={true}
                                        whiteSpace={false}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone_2}
                                        onchangeCallback={formik.handleChange}
                                        inputClassName={formik.touched.phone_2 && formik.errors.phone_2 ? " is-invalid" : ""}
                                        requiredMessage={formik.touched.phone_2 && formik.errors.phone_2}
                                        requiredMessageLabel={formik.touched.phone_2 || formik.isSubmitting ? formik.errors.phone_2 : ""}
                                    />
                                </div>
                                
                                <InputField
                                    placeHolder={t('placeorder.note')}
                                    textType="text"
                                    inputName="note"
                                    asterisk={false}
                                    whiteSpace={false}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.note}
                                    onchangeCallback={formik.handleChange}
                                    inputClassName={formik.touched.note && formik.errors.note ? " is-invalid" : ""}
                                    requiredMessage={formik.touched.note && formik.errors.note}
                                    requiredMessageLabel={formik.touched.note || formik.isSubmitting ? formik.errors.note : ""}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className={`${BP.card} summary`}>
                    <p className='header'>{t('placeorder.payable')}</p>
                    <h3>{`${t('money')} ${getTotal(state)+siteConfig.delivery_charge}`}</h3>
                    <h6>{t('placeorder.breakdown')}</h6>
                    <p>{t('placeorder.total')}<span className='pal-green'>{t('money')} {getTotal(state)}</span> </p>
                    <p>{t('placeorder.ship')} <span className='pal-green'>{t('money')} {siteConfig.delivery_charge}</span></p>
                </div>
                <div className='payment'>
                    <h6>{t('placeorder.payment')}</h6>
                    {/* todo: implement later */}
                    <Commonbutton
                        type="button"
                        onclickCallback={formik.handleSubmit}
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
                        <h3>{`${t('money')} ${getTotal(state)+siteConfig.delivery_charge}`}</h3>
                        <h6>{t('placeorder.breakdown')}</h6>
                        <p>{t('placeorder.total')}<span className='pal-green'>{t('money')} {getTotal(state)}</span> </p>
                        <p>{t('placeorder.ship')} <span className='pal-green'>{t('money')} {siteConfig.delivery_charge}</span></p>
                    </div> 
                </Cart>
            </div>
        </div>
    );
};

export default React.memo(PlaceOrder);