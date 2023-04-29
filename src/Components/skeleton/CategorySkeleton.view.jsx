import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import './skeleton.scss';

const CategorySkeleton = () => {
    return (
        <div className='cat_skeleton'>
            <Placeholder as="div" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="div" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="div" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
        </div>
    );
};

export default CategorySkeleton;