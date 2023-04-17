import React from 'react';
import { pagetitle } from '../../helper/CommonFunction';
import {useTranslation} from "react-i18next"
import './Home.scss';
import AsideBar from '../../Components/AsideBar/AsideBar';
import MainBox from '../../Components/MainBox/MainBox';
import BP from '../../scss/CommonClass';

const Home = (props) => {
    pagetitle(props.pageTitle);
    const {t} = useTranslation();
    
    return (
        <div className={`home-container ${BP.container} `}>
            <main className='main'>
                <AsideBar className="asideBar" />
                <MainBox className="mainBox" />
            </main>
        </div>
    );
};

export default Home;