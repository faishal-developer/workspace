// components/ContactPage.js
import React from 'react';
import  './contactpage.scss';

const ContactPage = () => {
  return (
    <div className={'contactPage'}>
      <h1 className={'title'}>Contact Us</h1>
      <div className={'contactInfo'}>
        <div className={'contactItem'}>
          <h2 className={'contactItemTitle'}>Email</h2>
          <ul className={'contactItemInfo'}>
            <li><a href="mailto:foysal.profession@gmail.com" className={'contactItemLink'}>foysal.profession@gmail.com</a></li>
            <li><a href="mailto:mdfaishal329@gmail.com" className={'contactItemLink'}>mdfaishal329@gmail.com</a></li>
            <li><a href="mailto:sales@example.com" className={'contactItemLink'}>sales@example.com</a></li>
          </ul>
        </div>
        <div className={'contactItem'}>
          <h2 className={'contactItemTitle'}>Phone</h2>
          <ul className={'contactItemInfo'}>
            <li className={'contactItemPhone'}>+880-1310-023613</li>
            <li className={'contactItemPhone'}>+880-1688-422699</li>
            <li className={'contactItemPhone'}>+1-555-555-5555</li>
          </ul>
        </div>
        <div className={'contactItem'}>
          <h2 className={'contactItemTitle'}>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/md-faishal-4bb8b3219/" className={'contactItemLink'} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
