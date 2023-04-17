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
            breakpoint: { max: 3000, min: 2000 },
            items: props.responsive.ld
        },
        Desktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2000, min: 1400 },
            items: props.responsive.d
        },
        laptop: {
            breakpoint: { max: 1400, min: 1024 },
            items: props.responsive.l
        },
        largeTablet: {
            breakpoint: { max: 1024, min: 900 },
            items: props.responsive.lt
        },
        tablet: {
            breakpoint: { max: 900, min: 767 },
            items: props.responsive.t
        },
        largemobile: {
            breakpoint: { max: 767, min: 488 },
            items: props.responsive.lm
        },
        mobile: {
            breakpoint: { max: 488, min: 0 },
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