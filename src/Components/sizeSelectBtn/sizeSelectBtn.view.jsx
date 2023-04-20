import React from 'react';
import Commonbutton from '../Button/Button.view';
import './SizeBtn.scss'

const SizeSelectBtn = (props) => {
    const {data,sData,clickHandler} = props;

    return (
        <span className='sizes'>
            <span className='buttons'>
                {data.map((size) => <Commonbutton
                    onClick={()=>clickHandler(size)}
                    className={sData === size ? "active button "+size : "button size "+size}
                    btnText={size}
                    isLoading={false}
                    disabled={false}
                />)}
            </span>
        </span>
    );
};

export default SizeSelectBtn;