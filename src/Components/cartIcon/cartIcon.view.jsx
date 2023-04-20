import React, { useState } from 'react';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import { useTranslation } from 'react-i18next';
import './cartIcon.scss'
import CustomOffcanvas from '../Offcanvas/OffCanvas';

const CartIcon = ({productNum,p}) => {
    const { t } = useTranslation();
    const [show,setShow] = useState(false);

    const handleClose = () =>{
        setShow(false)
    }
    return (
        <span onClick={()=>setShow(true)}>
            <span className='cart'>
                <FontAwesome icon={iconList.cart} />
                <span className='num'>{productNum}</span>
                <span className='text'>{p}</span>
            </span>
            {
                show ? <CustomOffcanvas placement='end' show handleClose />:null
            }
        </span>
    );
};

export default CartIcon;