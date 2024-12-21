import React, { useState } from 'react'
import "./static/tabs.scss";

const CustomTab = ({allTabs}) => {
    const [current,setCurrent]=useState({title:allTabs[0].title,component:allTabs[0].component})
    
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