import React from 'react';
import TableSkeleton from './Skeleton';
import './skeleton.scss';

const CartScardSkeleton = () => {
    return (
        <div>
            <div className='cartsCard'>
                <div className='half'>
                    <TableSkeleton height={8} count={4} />
                </div>
                <div className='half'>
                    <TableSkeleton height={90} count={1} />
                </div>
            </div>
            <div className='cartsCard'>
                <div className='half'>
                    <TableSkeleton height={8} count={4} />
                </div>
                <div className='half'>
                    <TableSkeleton height={90} count={1} />
                </div>
            </div>
            <div className='cartsCard'>
                <div className='half'>
                    <TableSkeleton height={8} count={4} />
                </div>
                <div className='half'>
                    <TableSkeleton height={90} count={1} />
                </div>
            </div>
        </div>
    );
};

export default CartScardSkeleton;