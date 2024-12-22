import React, { useEffect, useState } from 'react'
import "./static/tabs.scss";
import { useLocation } from 'react-router-dom';

const CustomTab = ({allTabs}) => {
    const [current,setCurrent]=useState({title:allTabs[0].title,component:allTabs[0].component})
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);


    useEffect(()=>{
        const param1 = queryParams.get('tab')
        if(param1){
            setCurrent(
                allTabs.find((el)=>el.title===param1) ?? allTabs[0]
            )
        }
    },[location])
    
  return (
    <div className='tab-container'>
        <div className='container-card'>
            <div>
                <div className='tab-header tab'>
                    {allTabs.map((item)=>(
                        <p className={item.title===current.title?"active":''} onClick={()=>setCurrent(item)} key={item.title}>
                            {item.title}
                        </p>
                    ))}
                </div>
                <hr className='hr'/>
            </div>
            <div className='component'>
                {current.component}
            </div>
        </div>
    </div>
  )
}

export default CustomTab