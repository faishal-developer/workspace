import React from 'react';
import LazyLoad from 'react-lazyload';
import placeholder from "../../assets/images/placeholder.jpg";

const LazyLoader = (props) => {
    return (
        <LazyLoad
            scroll={true}

            height={props.height || 400}
            placeholder={props.dummy || <img src={placeholder} alt="placeholder"/>}
        >
            {props.children}
        </LazyLoad>
    );
};

export default LazyLoader;