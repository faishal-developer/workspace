import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const CustomCarousel = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: props.responsive.sl
        },
        LargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1600 },
            items: props.responsive.ld
        },
        laptop: {
            breakpoint: { max: 1600, min: 1200 },
            items: props.responsive.l
        },
        largeTablet: {
            breakpoint: { max: 1200, min: 900 },
            items: props.responsive.lt
        },
        tablet: {
            breakpoint: { max: 900, min: 767 },
            items: props.responsive.t
        },
        largemobile: {
            breakpoint: { max: 767, min: 600 },
            items: props.responsive.lm
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: props.responsive.m
        }
    };

    
    return (
        <div className='carousel_container'>
            <Carousel responsive={responsive} arrows={true} >
                {props.children}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;