import React from 'react';
import CustomCarousel from '../../Carousel/Carousel';
import CardView from '../Card/Card.view';

const CardsCarousel = (props) => {
    const {heading,data} = props;
    const responsive = {
        sl:12,
        ld:10,
        d:8,
        l:6,
        lt:5,
        t:4,
        lm:3,
        m:2
    }
    return (
        <div>
            <div>
                <h4>{heading}</h4>
                <button>View all</button>
            </div>
            <CustomCarousel responsive={responsive}>
                {
                    data? data.map((product)=>(
                        <CardView product={product}/>
                    )):null
                }
            </CustomCarousel>
        </div>
    );
};

export default CardsCarousel;