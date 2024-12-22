import React, { useState } from "react";
import "./Input.scss";
import { ReactComponent as InfoCircle } from "../../assets/svgs/InfoCircle.svg";
import FontAwesome, { iconList } from "../FontAwesome/FontAwesome";

const InputField = (props) => {
    const active = props.textAlign ? "right-input-text" : "";
    const isError = props.isError || "";
    const isDisabled = props.isDisabled || false;
    const disabledClass = isDisabled ? "disabled" : "";
    const isMultiple = props.isMultiple ? true : false;
    const [inputType, setInputType] = useState(props.textType);
    const passwordVisiablityClick = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    
    return (
        <div className="input-block">
            
            <div className="input_icon">
                <input
                    id={props.id}
                    className={`input-box ${props.type === "file" ? "inp-file" : "input"} ${active} ${isError} ${disabledClass} ${props.inputClassName}`}
                    placeholder={props.placeHolder}
                    accept={props.accept}
                    type={inputType}
                    value={props.value}
                    onChange={props.onchangeCallback}
                    onBlur={props.onBlur}
                    autoComplete={props.autoComplete || "off"}
                    name={props.inputName}
                    ref={props.inputRef}
                    multiple={isMultiple}
                    maxLength={props.maxLength}
                    disabled={props.disabled}
                />
                {props.icon?(
                    <div className="icon">{props.icon}</div>
                ):''}
                {props.textType === "password" && (
                <span className="password-visiablity icon" onClick={passwordVisiablityClick}>
                    {
                        inputType === "password" || props?.value?.length === 0 ?
                            <FontAwesome icon={props.icons? props.icons[0] : iconList.lock}/>
                            : <FontAwesome icon={props.icons? props.icons[1] :iconList.unloack}/>
                    }
                </span>
            )   }
            </div>
            {props.requiredMessage ? (
                <span className="error-message">
                    <InfoCircle fill="" /> {props.requiredMessageLabel}
                </span>
            ) : props.whiteSpace === false ? ''
                :
                (
                    <span dangerouslySetInnerHTML={{ __html: "&nbsp;" }} />
                    
                )
            }
            
        </div>
    );
};
export default InputField;
