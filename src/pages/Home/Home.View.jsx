import React from 'react';
import { pagetitle } from '../../helper/CommonFunction';
import {useTranslation} from "react-i18next"
import './Home.scss';

const Home = (props) => {
    pagetitle(props.pageTitle);
    const {t} = useTranslation();
    
    return (
        <div className={`home-container `}>
            this is home
        </div>
    );
};

export default Home;