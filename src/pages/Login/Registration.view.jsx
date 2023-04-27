import React from 'react';
import BP from '../../scss/CommonClass';
import InputField from '../../Components/InputFeild/InputFeild.view';
import { pagetitle } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Commonbutton from '../../Components/Button/Button.view';
import FontAwesome, { iconList } from '../../Components/FontAwesome/FontAwesome';
import { path } from '../../routes/path';
import { Link } from 'react-router-dom';
import './auth.scss';

const Registration = (props) => {
    pagetitle(props.pageTitle);
    const { t } = useTranslation();

    return (
        <div className={`${BP.card} auth-layout animate`}>
            <form>
                <div className='login'>
                    <InputField
                        placeHolder={t('placeorder.fullName')}
                        textType="name"
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
                    <InputField
                        placeHolder={t('placeorder.phone')}
                        textType="phone"
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
                    <InputField
                        placeHolder={t('placeorder.email')}
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
                        placeHolder={t('auth.password')}
                        textType="password"
                        inputName="password"
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
                <Commonbutton
                    type="submit"
                    onClick={() => { }}
                    className="button login-btn"
                    btnText={` ${t('auth.register')}`}
                    isLoading={false}
                    disabled={false}
                />
            </form>
            <div className='social'>
                <Commonbutton
                    type="button"
                    onClick={() => { }}
                    className="button login-btn google-btn"
                    btnText={(
                        <span >
                            <span className='google'><FontAwesome icon={iconList.google} /></span>
                            <span> {t('auth.r_google')}</span>
                        </span>
                    )}
                    isLoading={false}
                    disabled={false}
                />
                <Commonbutton
                    type="button"
                    onClick={() => { }}
                    className="button login-btn"
                    btnText={(
                        <span >
                            <span className='google'><FontAwesome icon={iconList.facebook} /></span>
                            <span> {t('auth.r_facebook')}</span>
                        </span>
                    )}
                    isLoading={false}
                    disabled={false}
                />
            </div>
            <Link to={path.login}>{t('auth.allReady_R')}</Link>
        </div>
    );
};

export default Registration;