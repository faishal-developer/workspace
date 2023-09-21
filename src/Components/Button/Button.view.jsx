import React from 'react';
import './Button.scss';

//todo button spinner
const Commonbutton = (props) => {
    return (
        <button
            type={props.type ?? 'button'}
            ref={props.inputRef}
            onClick={props.onclickCallback}
            className={(props.isLoading || props.disabled) ? props.disabled_className : props.className}
            disabled={props.isLoading || props.disabled}
        >
            {
                props.isLoading && (
                    <i className={`fa fa-circle-o-notch fa-spin fa-fw `} aria-hidden="true" />
                )
            }
            {props.btnText}
        </button>
    );
};

export default Commonbutton;
