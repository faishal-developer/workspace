import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './skeleton.scss';

const SProductImageSkeleton = () => {
    return (
        <div className='s_card_images'>
            <div className='image'>
                <Skeleton height={300} count={ 1} />
            </div> 
            <div className='images'>
                <Skeleton height={70} count={ 1} />
                <Skeleton height={70} count={ 1} />
                <Skeleton height={70} count={ 1} />
            </div>
        </div>
    );
};

export const SProductDataSkeleton=()=>{
    return (
        <div className='s_Product_skeleton'>
            <Skeleton height={20} count={8}/>
        </div>
    );
}

export default SProductImageSkeleton;