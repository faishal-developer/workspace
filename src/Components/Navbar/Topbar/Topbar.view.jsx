import React from 'react';
import { useTranslation } from 'react-i18next';
import '../static/Navbar.scss'
import BP from '../../../scss/CommonClass';
import FontAwesome,{iconList} from '../../FontAwesome/FontAwesome';
import Language from '../../Language/Language';

const Topbar = () => {
    const { t } = useTranslation();

    return (
        <div className='topbar'>
            <div className={`top-Navbar ${BP.container}`}>
                <div className='exclusive'>
                    <p>
                        <span className='electric'>
                            <FontAwesome icon={iconList.Bolt} />
                        </span>
                        {t('exclusive')}
                    </p>
                </div>
                <div className='menues'>
                    <ul>
                        <li className='bulk'>
                            <span>{<FontAwesome icon={iconList.Car}/>}</span>
                            {t('order_bulk')}
                        </li>
                        <li className='language'>
                            {t('language')}
                            <span className='mt_1'><FontAwesome icon={iconList.AngleDown}/></span>
                            <Language/>
                        </li>
                        <li className='help'>
                            <span className='mr_4'><FontAwesome icon={iconList.cir_question} /></span>
                            {t('help')}
                        </li>
                        <li>
                            <span className='mr_4'><FontAwesome icon={iconList.login} /></span>
                            {t('login')}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Topbar;