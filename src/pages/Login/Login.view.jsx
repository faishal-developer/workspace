import React, { useState } from 'react';
import { pagetitle } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import InputField from '../../Components/InputFeild/InputFeild.view';
import BP from '../../scss/CommonClass';
import Commonbutton from '../../Components/Button/Button.view';
import './auth.scss';
import FontAwesome, { iconList } from '../../Components/FontAwesome/FontAwesome';
import { Link } from 'react-router-dom';
import {path} from '../../routes/path';
import useFireBase from '../../Config/useFireBase';
import { useFormik } from 'formik';
import { useLogin } from './Login.logic';

const Login = (props) => {
    const [googleSigninLoader,setGoogleSigninLoader] = useState(false)
    pagetitle(props.pageTitle);
    const { t } = useTranslation();
    const {googleSignin} = useFireBase();
    const {loginFormik,loginLoader} = useLogin();
    
    return (
        <div className={`${BP.card} auth-layout animate`}>
             <form onSubmit={loginFormik.handleSubmit}>
                <div className='login'>
                    <InputField
                        placeHolder={t('placeorder.email')}
                        textType="email"
                        inputName="email"
                        asterisk={true}
                        whiteSpace={false}
                        onBlur={loginFormik.handleBlur}
                        value={loginFormik.values.email}
                        onchangeCallback={loginFormik.handleChange}
                        inputClassName={loginFormik.touched.email && loginFormik.errors.email ? " is-invalid" : ""}
                        requiredMessage={loginFormik.touched.email && loginFormik.errors.email}
                        requiredMessageLabel={loginFormik.touched.email || loginFormik.isSubmitting ? loginFormik.errors.email : ""}
                    />
                    <InputField
                        placeHolder={t('auth.password')}
                        textType="password"
                        inputName="password"
                        asterisk={true}
                        whiteSpace={false}
                        onBlur={loginFormik.handleBlur}
                        value={loginFormik.values.password}
                        onchangeCallback={loginFormik.handleChange}
                        inputClassName={loginFormik.touched.password && loginFormik.errors.password ? " is-invalid" : ""}
                        requiredMessage={loginFormik.touched.password && loginFormik.errors.password}
                        requiredMessageLabel={loginFormik.touched.password || loginFormik.isSubmitting ? loginFormik.errors.password : ""}
                    />
                </div>
                <Commonbutton
                    type="submit"
                    // onClick={() => { }}
                    className="button login-btn"
                    disabled_className="btn-disabled login-btn"
                    btnText={` ${t('auth.login')}`}
                    isLoading={loginLoader}
                    disabled={loginLoader}
                />
             </form>
            <div className='social'>
                <Commonbutton
                    type="button"
                    disabled={googleSigninLoader}
                    onclickCallback={() => {googleSignin(setGoogleSigninLoader) }}
                    className={`button login-btn google-btn`}
                    disabled_className="btn-disabled"
                    btnText={(
                        <span >
                            <span className='google'><FontAwesome icon={iconList.google} /></span>
                            <span> {t('auth.l_google')}</span>
                        </span>
                    )}
                    isLoading={googleSigninLoader}
                />
                
            </div>
            <Link to={path.register}>{t('auth.not_r')}</Link>
        </div>
    );
};

export default Login;