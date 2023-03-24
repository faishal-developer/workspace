import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import siteConfig from '../../Config/siteConfig';
import useasideDropDown from '../AsideBar/asideDropDown/asideDropDown.presenter';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import FooterUtils from './Footer.utils';
import { Category } from '../AsideBar/UtilsAsideBar';
import './static/Footer.scss'

const paymentMethods=[{name:"paypal"}]
const delivary=[{}]
const Footer = () => {
    const {t} = useTranslation();
    const { filterCategory } = useasideDropDown();
   
    const data=(activeId)=>{
        const newData= filterCategory(activeId, Category(t), ()=>{});
        console.log('newData',newData);
        return newData;
    }

    return (
        <footer className='footer'>
            <div className='subscription'>
                <p>{t('footer.getIn')}</p>
            </div>
            <div className='three_sec'>
                <div className='section'>
                    <div>
                        <div><FontAwesome icon={iconList.Lock}/></div>
                        <h5>{t('footer.securePay')}</h5>
                        <ul>
                            {
                                paymentMethods.map((v,i)=>(
                                    <li>{v.img}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='section'>
                    <div><FontAwesome icon={iconList.smily} /></div>
                    <h5>{t('footer.satisfiction')}</h5>
                    <p>{t('footer.madeWith')}</p>
                </div>
                <div className='section'>
                    <div><FontAwesome icon={iconList.truck} /></div>
                    <h5>{t("footer.delivery")}</h5>
                    <ul> 
                        {
                            delivary.map((v,i)=>(
                                <li key={i}>{v.img}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='social_link'>
                <ul>
                    <li className='facebook'>
                        <FontAwesome icon={iconList.facebook}/>
                    </li>
                    <li className='twitter'>
                        <FontAwesome icon={iconList.twitter}/>
                    </li>
                    <li className='linkedin'>
                        <FontAwesome icon={iconList.linkedin}/>
                    </li>
                </ul>
            </div>
            <div className='sub_items'>
                <div className='foot_item items'>
                    <h6 className='company_name'>{siteConfig.company_name}</h6>
                    {
                        FooterUtils(t).map((v,i)=>(
                            <p key={v.name}>
                                <Link to={v.value}>{v.name}</Link>
                            </p>
                        ))
                    }
                </div>
                <div className='sub_item items'>
                    <h6 >{t('aside.cloth')}</h6>
                    {
                        data(3).map((v,i)=>(
                            <p key={v.name}>
                                <Link to={v.value}>{v}</Link>
                            </p>
                        ))
                    }
                </div>
                <div className='sub_item items'>
                    <h6 >{t('aside.3d')}</h6>
                    {
                        data(2).map((v,i)=>(
                            <p key={v.name}>
                                <Link to={v.value}>{v}</Link>
                            </p>
                        ))
                    }
                </div>
                <div className='sub_item items'>
                    <h6 >{t('aside.laser')}</h6>
                    {
                        data(1).map((v,i)=>(
                            <p key={v.name}>
                                <Link to={v.value}>{v}</Link>
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className='nav_items'>
                <p>{t('shop')}</p>
                <p>{t('design')}</p>
                <p>{t('d_library')}</p>
            </div>
            <div className='copy_right'>
                <p>{t("footer.copywright")}</p>
            </div>
        </footer>
    );
};

export default Footer;