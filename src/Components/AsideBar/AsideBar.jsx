import React from 'react';
import { useTranslation } from 'react-i18next';
import { themeChange } from '../../helper/CommonFunction';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import Language from '../Language/Language';
import AsideDropDown from './asideDropDown/asideDropDown.view';
import './static/asideBar.scss';
import { themes } from './UtilsAsideBar';

const AsideBar = (props) => {
    const {className} = props;
    const { t } = useTranslation();

    return (
        <div className={`${className} aside_bar`}>
            <div className='lang_theme'>
                <div className='lang'>
                    {t('language')}
                    <span className='mt_1'><FontAwesome icon={iconList.AngleDown} /></span>
                    <Language />
                </div>
                <div className='lang'>
                    {t('theme')}
                    <span className='mt_1'><FontAwesome icon={iconList.AngleDown} /></span>
                    <div className='lang'>
                        {
                            themes(t).map((el, i) => (
                                <React.Fragment key={i}>
                                    <li onClick={() => themeChange(el.value)}>{el.name}</li>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='main'>
                <AsideDropDown/>
            </div>
        </div>
    );
};

export default AsideBar;