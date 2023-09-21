import React from 'react';
import './404.scss'
import { pagetitle, scrollToTop } from '../../helper/CommonFunction';

const Error400 = (props) => {
    scrollToTop();
    pagetitle(props.pageTitle)
    return (
        <div className="not-found-container">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-text">Oops! The page you are looking for could not be found.</p>
          <a href="/" className="not-found-link">Go back to the homepage</a>
        </div>
    </div>
    );
};

export default Error400;