import React, { useState } from 'react';
import siteConfig from "../../../Config/siteConfig"
import '../static/Navbar.scss'
import BS from '../../../scss/CommonClass'
import { useTranslation } from 'react-i18next';
import FontAwesome, { iconList } from '../../FontAwesome/FontAwesome';
import CustomOffcanvas from '../../Offcanvas/OffCanvas';
import NavbarUtils from '../NavbarUtils';
import CartIcon from '../../cartIcon/cartIcon.view';
import { Link } from 'react-router-dom';
import { path } from '../../../routes/path';


//todo:change cart icon
const Logobar = () => {
    const { t } = useTranslation();
    const [show,setShow] = useState(false);
    const [index,setIndex] = useState(0);

    return (
        <div className={`${BS.container}`}>
            <div className='logobar'>
                <div className='logo'>
                    <Link to={path.home}>
                        <div>
                            <img src={siteConfig.company_logo1} alt="customPoint" />
                        </div>
                        <p className='Custom'>{siteConfig.company_name}</p>
                    </Link>
                </div>
                <div className='right_bar'>
                    <div className='shop'>
                        {
                            NavbarUtils(t).map((el,i)=>(
                                <Link key={el.data} to={el.link}>
                                    <p
                                        className={`shop_p ${i === index && 'active'}`}
                                        onClick={() => setIndex(i)}
                                        
                                    >
                                        {el.data}
                                    </p>
                                </Link>
                            ))
                        }
                        {/* <p className='shop_p'>{t('design')}</p> */}
                    </div>
                    <div>
                        <ul className='list'>
                            <li>
                                {/* <FontAwesome icon={iconList.cart}/>
                                <span className='text'>{t("cart")}</span> */}
                                <CartIcon productNum={30} p={t("cart")}/>
                            </li>
                            <li>
                                <FontAwesome icon={iconList.heart} />
                                <span className='text'>{t("wish")}</span>
                            </li>
                            <li className='user'><FontAwesome icon={iconList.user} /></li>
                        </ul>
                        <ul className='bar' onClick={()=>setShow(true)}>
                            {
                                show ? <FontAwesome icon={iconList.cros} /> : <FontAwesome icon={iconList.bar} />
                            }
                        </ul>
                        
                    </div>
                </div>
                <CustomOffcanvas show={show} handleClose={() => setShow(false)}>
                    <div className='canvas'>
                        <div className='shop'>
                            {
                                NavbarUtils(t).map((el, i) => (
                                    <Link key={el.data} to={el.link}>
                                        <p
                                            className={`shop_p ${i === index && 'active'}`}
                                            onClick={() => setIndex(i)}
                                            
                                        >
                                            {el.data}
                                        </p>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className='exclusive'>
                            <p>
                                <span className='electric'>
                                    <FontAwesome icon={iconList.Bolt} />
                                </span>
                                {t('exclusive')}
                            </p>
                            <p>
                                <FontAwesome icon={iconList.cart} />
                                {t("cart")}
                            </p>
                            <p>
                                {/* nexttodo: it will open a popup like cart */}
                                <FontAwesome icon={iconList.heart} />
                                {t("wish")}
                            </p>
                            {/* nexttodo:linking to profile page */}
                            <p className='user'><FontAwesome icon={iconList.user} />{t('profile')}</p>
                        </div>
                    </div>

                </CustomOffcanvas>
            </div>
            
        </div>
    );
};

export default Logobar;