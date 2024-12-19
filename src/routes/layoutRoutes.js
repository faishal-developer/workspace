import React from 'react';
import {path} from "./path";
import siteConfig from "../Config/siteConfig";
import CommonLayout from '../Layouts/CommonLayout';
import AuthLayout from '../Layouts/AuthLayout';

let DelayTime = siteConfig.lazy_suspense_delay;
let SiteName = `| ${siteConfig.company_name}`;

const Home = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "Home" */ "../pages/Home/Home.View"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const Login = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "Home" */ "../pages/Login/Login.view"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const ForgetPassword = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "Home" */ "../pages/ForgotPassword/ForgotPassword.view"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const AddUser = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "Home" */ "../pages/AddUser/AddUser.view"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});

export const private_routes = [
]

export const public_routes = [
    
    // { path: `${process.env.PUBLIC_URL}${path.login}`, Component: <Login pageTitle={`Login ${SiteName}`} />, Layout: <TheAuthLayout /> },
    
]

// ************ Example for public private route *********** //
export const public_private_routes = [
    { path: `${path.home}`, Component: <Home pageTitle={`Home ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.login}`, Component: <Login pageTitle={`Login ${SiteName}`} />, Layout: <AuthLayout /> },
    { path: `${path.forget_password}`, Component: <ForgetPassword pageTitle={`Forget Password ${SiteName}`} />, Layout: <AuthLayout /> },
    { path: `${path.add_user}`, Component: <AddUser pageTitle={`Add User ${SiteName}`} />, Layout: <CommonLayout /> },
    // {path: `${process.env.PUBLIC_URL}${path.registration}`, Component: <Signup pageTitle={`Sign Up ${SiteName}`}/>, Layout: <TheAuthLayout/> },
]
