import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {path} from "./path";
// import { userData } from "../Config/sessionKeys";

export const RouteRestriction = (props) => {
    // a simple route restriction implemented here, but in real case we should work with jwt
    const user = JSON.parse(localStorage.getItem('user'));

    return props.type === "private" ? (
        user ? <Outlet /> : <Navigate to={`${path.login}`} />
    ) : (
        <>
            <Outlet/>
        </>
    )
}
