import React from 'react';
import './Button.scss';

//todo button spinner
const Commonbutton = (props) => {

    // a common reusable button created containing all logic
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
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
            {props.btnText}
        </button>
    );
};

export default Commonbutton;
