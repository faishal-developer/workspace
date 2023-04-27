import React from 'react';
import InputField from '../../Components/InputFeild/InputFeild.view';
import BP from '../../scss/CommonClass';
import { pagetitle, scrollToTop } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Cart from '../../Components/cartProduct/cart.view'
import './placeOrder.scss';
import Commonbutton from '../../Components/Button/Button.view';

const PlaceOrder = (props) => {
    pagetitle(props.pageTitle);
    const { t } = useTranslation();
    scrollToTop();

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
                            // onBlur={addProjectFormik.handleBlur}
                            // value={addProjectFormik.values.title}
                            // onchangeCallback={addProjectFormik.handleChange}
                            // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                            // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                            // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
                            />
                            <div className='grid-item'>
                                <InputField
                                    placeHolder={t('auth.password')}
                                    textType="email"
                                    inputName="email"
                                    asterisk={true}
                                    whiteSpace={false}
                                // onBlur={addProjectFormik.handleBlur}
                                // value={addProjectFormik.values.title}
                                // onchangeCallback={addProjectFormik.handleChange}
                                // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                                // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                                // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
                                />
                                <InputField
                                    placeHolder={t('placeorder.phone')}
                                    textType="text"
                                    inputName="phone"
                                    asterisk={true}
                                    whiteSpace={false}
                                // onBlur={addProjectFormik.handleBlur}
                                // value={addProjectFormik.values.title}
                                // onchangeCallback={addProjectFormik.handleChange}
                                // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                                // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                                // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
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
                                // onBlur={addProjectFormik.handleBlur}
                                // value={addProjectFormik.values.title}
                                // onchangeCallback={addProjectFormik.handleChange}
                                // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                                // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                                // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
                                />
                                <div className='info-flex2'>
                                    <InputField
                                        placeHolder={t('placeorder.city')}
                                        textType="text"
                                        inputName="city"
                                        asterisk={true}
                                        whiteSpace={false}
                                    // onBlur={addProjectFormik.handleBlur}
                                    // value={addProjectFormik.values.title}
                                    // onchangeCallback={addProjectFormik.handleChange}
                                    // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                                    // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                                    // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
                                    />
                                    <InputField
                                        placeHolder={t('placeorder.upazilla')}
                                        textType="text"
                                        inputName="upazilla"
                                        asterisk={true}
                                        whiteSpace={false}
                                    // onBlur={addProjectFormik.handleBlur}
                                    // value={addProjectFormik.values.title}
                                    // onchangeCallback={addProjectFormik.handleChange}
                                    // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                                    // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                                    // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
                                    />
                                    
                                </div>
                                <div className='info-flex1'>
                                    
                                    <InputField
                                        placeHolder={t('placeorder.district')}
                                        textType="text"
                                        inputName="district"
                                        asterisk={true}
                                        whiteSpace={false}
                                    // onBlur={addProjectFormik.handleBlur}
                                    // value={addProjectFormik.values.title}
                                    // onchangeCallback={addProjectFormik.handleChange}
                                    // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                                    // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                                    // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
                                    />
                                    <InputField
                                        placeHolder={t('placeorder.altPhone')}
                                        textType="text"
                                        inputName="phone_2"
                                        asterisk={true}
                                        whiteSpace={false}
                                    // onBlur={addProjectFormik.handleBlur}
                                    // value={addProjectFormik.values.title}
                                    // onchangeCallback={addProjectFormik.handleChange}
                                    // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                                    // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                                    // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
                                    />
                                </div>
                                
                                <InputField
                                    placeHolder={t('placeorder.note')}
                                    textType="text"
                                    inputName="note"
                                    asterisk={false}
                                    whiteSpace={false}
                                // onBlur={addProjectFormik.handleBlur}
                                // value={addProjectFormik.values.title}
                                // onchangeCallback={addProjectFormik.handleChange}
                                // inputClassName={addProjectFormik.touched.title && addProjectFormik.errors.title ? " is-invalid" : ""}
                                // requiredMessage={addProjectFormik.touched.title && addProjectFormik.errors.title}
                                // requiredMessageLabel={addProjectFormik.touched.title || addProjectFormik.isSubmitting ? addProjectFormik.errors.title : ""}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className={`${BP.card} summary`}>
                    <p className='header'>{t('placeorder.payable')}</p>
                    <h3>{`${t('money')} ${1295}`}</h3>
                    <h6>{t('placeorder.breakdown')}</h6>
                    <p>{t('placeorder.total')}<span className='pal-green'>{t('money')} {1200}</span> </p>
                    <p>{t('placeorder.ship')} <span className='pal-green'>{t('money')} {95}</span></p>
                </div>
                <div className='payment'>
                    <h6>{t('placeorder.payment')}</h6>
                    {/* todo: implement later */}
                    <Commonbutton
                        type="button"
                        onClick={() => { }}
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
                        <h3>{`${t('money')} ${1295}`}</h3>
                        <h6>{t('placeorder.breakdown')}</h6>
                        <p>{t('placeorder.total')}<span className='pal-green'>{t('money')} {1200}</span> </p>
                        <p>{t('placeorder.ship')} <span className='pal-green'>{t('money')} {95}</span></p>
                    </div> 
                </Cart>
            </div>
        </div>
    );
};

export default PlaceOrder;