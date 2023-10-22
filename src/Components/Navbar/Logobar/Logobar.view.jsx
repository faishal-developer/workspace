import React, { useEffect, useState } from 'react';
import siteConfig from "../../../Config/siteConfig"
import '../static/Navbar.scss'
import BS from '../../../scss/CommonClass'
import { useTranslation } from 'react-i18next';
import FontAwesome, { iconList } from '../../FontAwesome/FontAwesome';
import CustomOffcanvas from '../../Offcanvas/OffCanvas';
import NavbarUtils from '../NavbarUtils';
import CartIcon from '../../cartIcon/cartIcon.view';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { path } from '../../../routes/path';
import { useSelector } from 'react-redux';
import CustomPopover from '../../popovers/PopOver';
// import { getCartFromLocalStorage } from '../../../helper/CommonFunction';


const Logobar = () => {
    const {products:carts} = useSelector(state=>state.sampleCartSlice);
    const user = useSelector(state=>state.userSlice.user)
    const { t } = useTranslation();
    const [show,setShow] = useState(false);
    const [index,setIndex] = useState(0);
    const location = useLocation();
    const navigate=useNavigate();
    
    useEffect(()=>{
        NavbarUtils(t).forEach((item,i)=>{
            if(item.link===location.pathname)setIndex(i);
        })
    },[])
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
                                <CartIcon productNum={carts?.length || 0} p={t("cart")}/>
                            </li>
                            <li>
                                <Link to={path.wishList}>
                                    <FontAwesome icon={iconList.heart} />
                                    <span className='wish-list text'>{t("wish")}</span>
                                </Link>
                            </li>
                            {
                                user.email && (
                                    <li className='user'>
                                        {
                                            <CustomPopover
                                                // title='Profile'
                                                body={
                                                    <span className='pop-over'>
                                                      <p>{user.name}</p>
                                                      <p>{user.email}</p>
                                                    </span>
                                                }
                                            >
                                                {
                                                    user.photoURL?(
                                                        <img src={user.photoURL} alt={user.name}/>
                                                    ):(
                                                        <FontAwesome icon={iconList.user} />
                                                    )
                                                }
                                            </CustomPopover>
                                        }
                                    </li>
                                )
                            }
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
                            <p onClick={()=>navigate(`${path.home}?discounted=true`)}>
                                <span className='electric'>
                                    <FontAwesome icon={iconList.Bolt} />
                                </span>
                                {t('exclusive')}
                            </p>
                            <p>
                                <CartIcon productNum={carts?.length || 0} p={t("cart")}/>
                            </p>
                            <p>
                                <Link to={path.wishList}>
                                    <FontAwesome icon={iconList.heart} />
                                    {t("wish")}
                                </Link>
                            </p>
                            {/* nexttodo:linking to profile page */}
                            {
                                user.email && (
                                    <p className='user'>
                                        {
                                            user.photoURL?(
                                                <img src={user.photoURL} alt={user.name}/>
                                            ):(
                                                <FontAwesome icon={iconList.user} />
                                            )
                                        }
                                    </p>
                                )
                            }
                            {/* <p className='user'><FontAwesome icon={iconList.user} />{t('profile')}</p> */}
                        </div>
                    </div>

                </CustomOffcanvas>
            </div>
            
        </div>
    );
};

export default Logobar;