import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {i18nextLng} from "../../Config/sessionKeys"
import langlist from "../../Language/Langlist.json"
const Language = () => {
    const {i18n} = useTranslation();
    const [selected,setSelected] = useState(localStorage.getItem(i18nextLng))
    
    const changeLanguage=(lng)=>{
        i18n.changeLanguage(lng);
        setSelected(lng);
    }
    return (
        <ul className='lang'>
           {
            langlist.map((item,index)=>(
                <li key={item.name} onClick={()=>changeLanguage(item.code)}>
                    {item.name}
                </li>
            ))
           } 
        </ul>
    );
};

export default Language;