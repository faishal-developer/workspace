import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ReactImageZooM = ({img}) => {
    
    return (
        <span className='zoomer'>
            <InnerImageZoom src={img} zoomType="click" hasSpacer={true}/>
        </span>
    );
};

export default ReactImageZooM;