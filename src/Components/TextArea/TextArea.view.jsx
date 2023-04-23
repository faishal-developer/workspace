import React from 'react';
import './TextArea.scss'
import { ReactComponent as InfoCircle } from "../../assets/svgs/InfoCircle.svg";

const TextareaSimple = (props) => {
    return (
        <div className="simple_textarea_block">
            <label htmlFor="">
                <span className={props.asterisk ? "asterisk label_name" : "label_name"}>{props.inputLabel}</span>
            </label>
            <textarea
                className={`${props.className} ${props.inputClassName}`}
                name={props.name}
                value={props.value}
                id={props.id}
                onChange={props.onchangeCallback}
                placeholder={props.placeholder}
                onBlur={props.onBlur}
                maxLength={props.maxlength}
            />
            {props.requiredMessage ? (
                <span className="error-message">
                    <InfoCircle fill="" /> {props.requiredMessageLabel}
                </span>
            ) : ''
            }
        </div>
    );
};

export default TextareaSimple;
