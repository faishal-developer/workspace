import React from 'react';
import { useTranslation } from 'react-i18next';
import '../static/Navbar.scss'
import BP from '../../../scss/CommonClass';
import FontAwesome,{iconList} from '../../FontAwesome/FontAwesome';
import Language from '../../Language/Language';
import { Link } from 'react-router-dom';
import { path } from '../../../routes/path';
import { useSelector } from 'react-redux';
import useFireBase from '../../../Config/useFireBase';

const Topbar = () => {
    const { t } = useTranslation();
    const user = useSelector(state=>state.userSlice.user);
    const {logOut} = useFireBase();
    
    return (
        <div className='topbar'>
            <div className={`top-Navbar ${BP.container}`}>
                <div className='exclusive'>
                    <p>
                        <span className='electric'>
                            <FontAwesome icon={iconList.Bolt} />
                        </span>
                        {/* todo: load special items and enable page loader */}
                        {t('exclusive')}
                    </p>
                </div>
                <div className='menues'>
                    <ul>
                        <li className='bulk'>
                            <Link className='bulk' to={path.contactUs}>
                                <span>{<FontAwesome icon={iconList.Car} />}</span>
                                {t('order_bulk')}
                            </Link>
                        </li>
                        <li className='language'>
                            {t('language')}
                            <span className='mt_1'><FontAwesome icon={iconList.AngleDown}/></span>
                            <Language/>
                        </li>
                        <li className='help'>
                            <Link to={path.help}>
                                <span className='mr_4'><FontAwesome icon={iconList.cir_question} /></span>
                                {t('help')}
                            </Link>
                        </li>
                        <li>
                            {
                                user.name?(
                                    <span onClick={logOut}>
                                        <span className='mr_4'><FontAwesome icon={iconList.logout} /></span>
                                        {t('auth.logout')}
                                    </span>
                                ):(
                                    <Link to={path.login}>
                                        <span className='mr_4'><FontAwesome icon={iconList.login} /></span>
                                        {t('login')}
                                    </Link>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Topbar;