import React from 'react';
import {path} from "./path";
import siteConfig from "../Config/siteConfig";
import CommonLayout from '../Layouts/CommonLayout';

let DelayTime = siteConfig.lazy_suspense_delay;
let SiteName = `| ${siteConfig.company_name}`;

const Home = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "Home" */ "../pages/Home/Home.View"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});

const Flights = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/Flights/Flights.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});

const FlightDetailsPage = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/FlightDetails/FlightDeails.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});

const Bookings = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/Bookings/Bookings.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});

const Signin = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/signin/Signin.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});

const Signup = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/signup/signup.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const Profile = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/profile/profile.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const AdminBookings = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/AdminBookings/AdminBookings.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const CreateFlight = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/createFlight/createFlight.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});
const FlightManagement = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "flights" */ "../pages/FlightManagement/FlightManagement.view.jsx"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});



export const private_routes = [
]

export const public_routes = [
    
    // { path: `${process.env.PUBLIC_URL}${path.login}`, Component: <Login pageTitle={`Login ${SiteName}`} />, Layout: <TheAuthLayout /> },
    
]

// ************ Example for public private route *********** //
export const public_private_routes = [
    { path: `${path.home}`, Component: <Home pageTitle={`Home ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.flights}`, Component: <Flights pageTitle={`Flights ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.flight_details+'/:flightId'}`, Component: <FlightDetailsPage pageTitle={`Flight Details ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.bookings}`, Component: <Bookings pageTitle={`Bookings ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.signin}`, Component: <Signin pageTitle={`SignIn ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.signup}`, Component: <Signup pageTitle={`Signup ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.profile+'/:userId'}`, Component: <Profile pageTitle={`Profile ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.adminBookings}`, Component: <AdminBookings pageTitle={`Profile ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.createFlights}`, Component: <CreateFlight pageTitle={`Create Flight ${SiteName}`} />, Layout: <CommonLayout /> },
    { path: `${path.flightManagement}`, Component: <FlightManagement pageTitle={`Flight Management ${SiteName}`} />, Layout: <CommonLayout /> }
    // {path: `${process.env.PUBLIC_URL}${path.registration}`, Component: <Signup pageTitle={`Sign Up ${SiteName}`}/>, Layout: <TheAuthLayout/> },
]
