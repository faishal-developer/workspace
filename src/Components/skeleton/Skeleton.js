import React from 'react';
import Skeleton from 'react-loading-skeleton'
import './skeleton.scss';
import 'react-loading-skeleton/dist/skeleton.css'

const TableSkeleton = ({ height, count }) => {
    return (
        <div>
            <div className='skeleton'>
                <div className='ske_card'>
                    <Skeleton height={height || 35} count={count || 6} />
                </div>
            </div>
        </div>
    );
};

export default TableSkeleton;