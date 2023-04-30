import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = (props) => {
    let newArray = new Array(props.num??4).fill('')
    return (
        <div className={`cards_skeleton ${props.container}`}>
            {
                newArray.map(()=>(
                    <div className={`card_skeleton ${props.card}`}>
                        <Skeleton height={120} count={1} />
                        <Skeleton height={17} count={1} />
                        <Skeleton height={17} count={1} />
                        <Skeleton height={17} count={1} />
                        <Skeleton height={17} count={1} />
                    </div>
                ))
            }
        </div>
    );
};

export default CardSkeleton;