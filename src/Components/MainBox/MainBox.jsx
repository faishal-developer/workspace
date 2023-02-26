import React, { useEffect, useState } from 'react';
import CardView from '../Card/Card.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import SearchBar from './SearchBar/SearchBar';
import './Static/MainBox.scss'
import jsonData from './fakeData.json'
import { stickyPosition } from '../../helper/CommonFunction';

const icons={...iconList};
const MainBox = (props) => {
    const {className} = props;
    const [data,setData] = useState([]);

   useEffect(()=>{
        setData(jsonData);
       stickyPosition("icons", "p_sticky40")

    },[])
    return (
        <div className={`${className} main_box`}>
            <div className='banner'>banner</div>
            <SearchBar />
            <div >
                <div id="icons" className='icons'>
                  {
                    Object.values(icons).map((v, i) => (
                        <span key={i}><FontAwesome icon={v} /></span>
                    ))
                  }               
                </div>
            </div>
            <div className='cards'>
                {
                    data.length>=1?(data.map((el,i)=>(
                        <CardView
                            product={el}
                            border='border_green'
                        />
                    ))):null
                }
            </div>
        </div>
    );
};

export default MainBox;