import React from 'react';
import { pagetitle, scrollToTop } from '../helper/CommonFunction';

const Error400 = (props) => {
    scrollToTop();
    pagetitle(props.pageTitle)
    return (
        <div>
            this is error 400
        </div>
    );
};

export default Error400;