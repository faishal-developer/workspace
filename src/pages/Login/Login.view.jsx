import React, { useState } from 'react';
import { pagetitle } from '../../helper/CommonFunction';
import LoginForm from '../../Components/Login/Login.view';

const Login = (props) => {
    // title is too important for onpage seo
    pagetitle(props.pageTitle);

    return (
        <LoginForm/>
    );
};

export default Login;