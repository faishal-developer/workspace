import React from 'react';
import BP from '../../scss/CommonClass';
import CustomCarousel from '../carousel/Carousel.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import SearchBar from './SearchBar/SearchBar';
import './Static/MainBox.scss'

const icons={...iconList};
const MainBox = (props) => {
    const {className} = props;
    return (
        <div className={`${className} main_box`}>
            <div className='banner'>banner</div>
            <div>
                <SearchBar/>
                <div className='icons'>
                  {
                    Object.values(icons).map((v, i) => (
                        <span key={i}><FontAwesome icon={v} /></span>
                    ))
                  }               
                </div>
            </div>
        </div>
    );
};

export default MainBox;