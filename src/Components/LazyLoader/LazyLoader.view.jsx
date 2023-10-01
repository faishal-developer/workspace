import React from 'react';
import LazyLoad from 'react-lazyload';
import placeholder from "../../assets/images/placeholder.jpg";

const LazyLoader = (props) => {
    return (
        <LazyLoad
            scroll={true}
            offset={100}
            height={props.height || 200}
            debounce={80}
            placeholder={props.placeholder || <img src={placeholder} alt="placeholder" />}
        >
            {props.children}
        </LazyLoad>
    );
};

export default LazyLoader;