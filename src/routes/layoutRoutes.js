import React from 'react';
import {path} from "./path";
import siteConfig from "../Config/siteConfig";
import CommonLayout from '../Layouts/CommonLayout';

let DelayTime = siteConfig.lazy_suspense_delay;
let SiteName = `| ${siteConfig.company_name}`;

const Home = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "Home" */ "../pages/Home/Home.View"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const AboutUs = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "AboutUs" */ "../pages/AboutUs/AboutUs"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const ContactUs = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "contactUs" */ '../pages/PlaceOrder/PlaceOrder.view'), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const SingleProduct = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "singleProducts" */ "../pages/SingleProduct/SingleProduct.view"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const PlaceOrder = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "singleProducts" */ "../pages/PlaceOrder/PlaceOrder.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});




export const private_routes = [
    { path: `${path.aboutUs}`, Component: <AboutUs pageTitle={`Default ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.contactUs}`, Component: <ContactUs pageTitle={`Contact ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.order}`, Component: <PlaceOrder pageTitle={`Orders ${SiteName}`} />, Layout: <CommonLayout /> },
]

export const public_routes = [
    // { path: `${process.env.PUBLIC_URL}${path.login}`, Component: <Login pageTitle={`Login ${SiteName}`} />, Layout: <TheAuthLayout /> },
    
]

// ************ Example for public private route *********** //
export const public_private_routes = [
    { path: `${path.home}`, Component: <Home pageTitle={`Home |${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.single_products +'/:productId'}`, Component: <SingleProduct pageTitle={`products |${SiteName}`} />, Layout: <CommonLayout /> },
    
    // {path: `${process.env.PUBLIC_URL}${path.registration}`, Component: <Signup pageTitle={`Sign Up ${SiteName}`}/>, Layout: <TheAuthLayout/> },
]
