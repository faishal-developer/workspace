import React from 'react';
import { Link } from 'react-router-dom';
import { pagetitle, scrollToTop } from '../../helper/CommonFunction';

const ContactUs = (props) => {
    pagetitle(props.pageTitle)
    scrollToTop();
    console.log("contacat us page")
    return (
        <div>
            <Link to="/">that is contact us page</Link>
        </div>
    );
};

export default ContactUs;