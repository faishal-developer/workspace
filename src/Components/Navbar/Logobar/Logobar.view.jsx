import React, { useState } from 'react';
import siteConfig from "../../../Config/siteConfig"
import '../static/Navbar.scss'
import BS from '../../../scss/CommonClass'
import { useTranslation } from 'react-i18next';
import FontAwesome, { iconList } from '../../FontAwesome/FontAwesome';
import CustomOffcanvas from '../../Offcanvas/OffCanvas';
import NavbarUtils from '../NavbarUtils';

const Logobar = () => {
    const { t } = useTranslation();
    const [show,setShow] = useState(false);
    const [index,setIndex] = useState(0);

    return (
        <div className={`${BS.container}`}>
            <div className='logobar'>
                <div className='logo'>
                    <div>
                        <img src={siteConfig.company_logo1} alt="customPoint"/>
                    </div>
                    <p className='Custom'>{siteConfig.company_name}</p>
                </div>
                <div className='right_bar'>
                    <div className='shop'>
                        {
                            NavbarUtils(t).map((el,i)=>(
                                <p 
                                    className={`shop_p ${i===index && 'active'}`}
                                    onClick={()=>setIndex(i)}
                                >
                                    {el}
                                </p>
                            ))
                        }
                        {/* <p className='shop_p'>{t('design')}</p> */}
                    </div>
                    <div>
                        <ul className='list'>
                            <li>
                                <FontAwesome icon={iconList.cart}/>
                                {t("cart")}
                            </li>
                            <li>
                                <FontAwesome icon={iconList.heart} />
                                {t("wish")}
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
                                    <p
                                        className={`shop_p ${i === index && 'active'}`}
                                        onClick={() => setIndex(i)}
                                    >
                                        {el}
                                    </p>
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
                                <FontAwesome icon={iconList.heart} />
                                {t("wish")}
                            </p>
                            <p className='user'><FontAwesome icon={iconList.user} />{t('profile')}</p>
                        </div>
                    </div>

                </CustomOffcanvas>
            </div>
            
        </div>
    );
};

export default Logobar;