import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"
import data from "../tempJson.json";
import '../static/asideBar.scss'
import { Category } from '../UtilsAsideBar';
import useasideDropDown from './asideDropDown.presenter';
import FontAwesome, { iconList } from '../../FontAwesome/FontAwesome';
import BP from '../../../scss/CommonClass';
import { widthDetector } from '../../../helper/CommonFunction';

const AsideDropDown = () => {
    const { t } = useTranslation();
    const [activeId,setActiveId] = useState(0);
    const {filterCategory} = useasideDropDown();
    const [subCat,setSubcat] = useState([])
    const [showSubCat,setShowSubCat] = useState(false);

    useEffect(()=>{
        filterCategory(activeId,Category(t),setSubcat);
    },[activeId])
    return (
        <div className='aside_main'>
            <div className='circles'>
                {
                    Category(t).length>=1 ? Category(t).map((el,i)=>(
                        <div 
                            onClick={()=>setActiveId(el.id)}
                            key={i}
                            className={`circle ${el.bg_color} ${activeId===el.id?"active":''}`}
                        >
                            {el.name}
                        </div>
                    )):null
                }
            </div>
            <div className='sub_cat'>
                <p onClick={() => setShowSubCat(!showSubCat)}>
                    {t('aside.subcat')}
                    <span className={widthDetector(767, 0) ? 'arrow_down' : BP.dnone}>
                        {
                            showSubCat ? (
                                <FontAwesome icon={iconList.AngleDown} />
                            ) : (
                                <FontAwesome icon={iconList.AngleDown} />
                            )
                        }
                    </span>
                </p>
                <ul className={!showSubCat && widthDetector(767, 0) ? BP.dnone :''}>
                    {
                        subCat? subCat.map((el,i)=>(
                            <li key={i} className={'item'}>{el}</li>
                        )):null
                    }
                </ul>
            </div>
        </div>
    );
};

export default AsideDropDown;