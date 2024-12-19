import React, { useState } from 'react';
import { pagetitle } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import InputField from '../../Components/InputFeild/InputFeild.view';
import Commonbutton from '../../Components/Button/Button.view';
import './auth.scss';
import FontAwesome, { iconList } from '../../Components/FontAwesome/FontAwesome';
import { Link } from 'react-router-dom';
import {path} from '../../routes/path';
import { useFormik } from 'formik';
import { useLogin } from './Login.logic';
import LoginForm from '../../Components/Login/Login.view';

const Login = (props) => {
    pagetitle(props.pageTitle);
    const { t } = useTranslation();
    const {loginFormik,loginLoader} = useLogin();
    
    return (
        // <div className={` auth-layout animate`}>
        //      <form onSubmit={loginFormik.handleSubmit}>
        //         <div className='login'>
        //             <InputField
        //                 placeHolder={t('email')}
        //                 textType="email"
        //                 inputName="email"
        //                 asterisk={true}
        //                 whiteSpace={false}
        //                 onBlur={loginFormik.handleBlur}
        //                 value={loginFormik.values.email}
        //                 onchangeCallback={loginFormik.handleChange}
        //                 inputClassName={loginFormik.touched.email && loginFormik.errors.email ? " is-invalid" : ""}
        //                 requiredMessage={loginFormik.touched.email && loginFormik.errors.email}
        //                 requiredMessageLabel={loginFormik.touched.email || loginFormik.isSubmitting ? loginFormik.errors.email : ""}
        //             />
        //             <InputField
        //                 placeHolder={"Password"}
        //                 textType="password"
        //                 inputName="password"
        //                 asterisk={true}
        //                 whiteSpace={false}
        //                 onBlur={loginFormik.handleBlur}
        //                 value={loginFormik.values.password}
        //                 onchangeCallback={loginFormik.handleChange}
        //                 inputClassName={loginFormik.touched.password && loginFormik.errors.password ? " is-invalid" : ""}
        //                 requiredMessage={loginFormik.touched.password && loginFormik.errors.password}
        //                 requiredMessageLabel={loginFormik.touched.password || loginFormik.isSubmitting ? loginFormik.errors.password : ""}
        //             />
        //         </div>
        //         <Commonbutton
        //             type="submit"
        //             // onClick={() => { }}
        //             className="button login-btn"
        //             disabled_className="btn-disabled login-btn"
        //             btnText={`Login`}
        //             isLoading={loginLoader}
        //             disabled={loginLoader}
        //         />
        //      </form>
        //     <div className='social'>
                
        //     </div>
        //     <Link to={path.signup}>If you are not registered yet, please register</Link>
        // </div>
        // <LoginForm/>
        <LoginForm/>
    );
};

export default Login;