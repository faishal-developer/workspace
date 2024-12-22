import React from 'react';
import Style from './CustomPageLoader.module.scss';

export default function CustomPageLoader(props) {
    // common page loader(reuable) 
    return (
        props.pageLoader ? <>
            <div className={`${Style.overlayed}`} />
            <div className={`rotate dotted ${Style.loader} ${props.className}`} />
            {/*<img src={ctSmallLogo} alt="" className={`${Style.loadinglogoct} ${props.className}`}/>*/}
        </> : props.default ? <div className={`${Style.defaultDesign}`}><span className={`${Style.rotate} ${Style.dotted}`} /></div> : ""
    );
}
