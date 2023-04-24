import React from 'react';
import { pagetitle } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import InputField from '../../Components/InputFeild/InputFeild.view';
import BP from '../../scss/CommonClass';
import Commonbutton from '../../Components/Button/Button.view';
import './auth.scss';

const Login = (props) => {
    pagetitle(props.pageTitle);
    const { t } = useTranslation();

    return (
        <div className={`${BP.card} auth-layout`}>
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
                type="button"
                onClick={() => { }}
                className="button"
                btnText={` Login`}
                isLoading={false}
                disabled={false}
            />
        </div>
    );
};

export default Login;