import React from 'react';
import { pagetitle } from '../helper/CommonFunction';
import { useTranslation } from "react-i18next"
import '../pages/Home/Home.scss';
import AsideBar from '../Components/AsideBar/AsideBar';
import BP from '../scss/CommonClass';
import { Outlet } from 'react-router-dom';

const Home = (props) => {
    pagetitle(props.pageTitle);
    const { t } = useTranslation();

    return (
        <div className={`home-container ${BP.container} `}>
            <main className='main'>
                {/* <AsideBar className="asideBar" /> */}
                <Outlet />
            </main>
        </div>
    );
};

export default Home;