import React from 'react';
import CustomCarousel from '../../Carousel/Carousel';
import CardView from '../Card/Card.view';
import './cardCarousel.scss';
import Commonbutton from '../Button/Button.view';

const CardsCarousel = (props) => {
    const {heading,data} = props;
    const responsive = {
        sl:5,
        ld:5,
        l:5,
        lt:4,
        t:3,
        lm:3,
        m:2
    }
    return (
        <div className={`${props.className} cardsCarousel`}>
            <div className='head_btn'>
                <h4>{heading}</h4>
                <span>
                    <Commonbutton
                        type="button"
                        onClick={props.onClick}
                        className="button"
                        btnText="View All"
                        isLoading={false}
                        disabled={false}
                    />
                </span>
            </div>
            <CustomCarousel responsive={responsive}>
                {
                    data? data.map((product)=>(
                        <CardView product={product} border='border_green m_r_10px' />
                    )):null
                }
            </CustomCarousel>
        </div>
    );
};

export default CardsCarousel;