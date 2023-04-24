import React from 'react';
import InputField from '../../Components/InputFeild/InputFeild.view';
import BP from '../../scss/CommonClass';
import { pagetitle } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Cart from '../../Components/cartProduct/cart.view'
import './placeOrder.scss';
import Commonbutton from '../../Components/Button/Button.view';

const PlaceOrder = (props) => {
    pagetitle(props.pageTitle);
    const { t } = useTranslation();

    return (
        <div className={`${BP.container} place-order`}>
            <div className='checkout-info'>
                <div className='header'>
                    <h3>Checkout Info</h3>
                </div>
                <form autoComplete='off'>
                    <div>
                        <div className='input'>
                            <h6>Contact Info</h6>
                            <InputField
                                placeHolder="Full Name"
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
                                    placeHolder="Email"
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
                                    placeHolder="Phone Number"
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
                                <h6 className=''>Shipping Info</h6>
                                <InputField
                                    placeHolder="Detailed Address"
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
                                        placeHolder="City/Village"
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
                                        placeHolder="Upazilla/Thana"
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
                                        placeHolder="District"
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
                                        placeHolder="Alt. Phone"
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
                                    placeHolder="Note For Us"
                                    textType="text"
                                    inputName="address"
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
                    <p className='header'>Total payable amount</p>
                    <h3>{`${t('money')} ${1295}`}</h3>
                    <h6>Breakdown</h6>
                    <p>Total:<span className='pal-green'>{t('money')} {1200}</span> </p>
                    <p>Shipping: <span className='pal-green'>{t('money')} {95}</span></p>
                </div>
                <div className='payment'>
                    <h6>Payment Options</h6>
                    {/* todo: implement later */}
                    <Commonbutton
                        type="button"
                        onClick={() => { }}
                        className="button"
                        btnText="Confirm Order"
                        isLoading={false}
                        disabled={false}
                    />
                </div>
            </div>
            <div className={`${BP.card} cart-overview cart-two`}>
                <h3>Cart Overview</h3>
                <Cart>
                    <div className={`${BP.card} summary`}>
                        <p className='header'>Total payable amount</p>
                        <h3>{`${t('money')} ${1295}`}</h3>
                        <h6>Breakdown</h6>
                        <p>Total:<span className='pal-green'>{t('money')} {1200}</span> </p>
                        <p>Shipping: <span className='pal-green'>{t('money')} {95}</span></p>
                    </div> 
                </Cart>
            </div>
        </div>
    );
};

export default PlaceOrder;