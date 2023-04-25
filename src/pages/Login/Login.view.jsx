import React from 'react';
import { pagetitle } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import InputField from '../../Components/InputFeild/InputFeild.view';
import BP from '../../scss/CommonClass';
import Commonbutton from '../../Components/Button/Button.view';
import './auth.scss';
import FontAwesome, { iconList } from '../../Components/FontAwesome/FontAwesome';
import { Link } from 'react-router-dom';
import {path} from '../../routes/path';

const Login = (props) => {
    pagetitle(props.pageTitle);
    const { t } = useTranslation();

    return (
        <div className={`${BP.card} auth-layout`}>
             <form>
                <div className='login'>
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
                    btnText={` ${t('auth.login')}`}
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
                            <span>{t('auth.l_google')}</span>
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
                            <span>{t('auth.r_facebook')}</span>
                        </span>
                    )}
                    isLoading={false}
                    disabled={false}
                />
            </div>
            <Link to={path.register}>{t('auth.not_r')}</Link>
        </div>
    );
};

export default Login;