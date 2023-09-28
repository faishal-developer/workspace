import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import './CustomDropDown.scss'
import { ReactComponent as InfoCircle } from "../../assets/svgs/InfoCircle.svg";
import ToolTip from "../ToolTip/ToolTip.view";

const CustomMultiSelectDropdown = (props) => {
    let dNone = () => {
        if (props.selectionLimit === props.selectedValues?.length) {

            return `multi_select_block custom_tooltip input-d-none`
        } else {
            return 'multi_select_block custom_tooltip'
        }
    }
    return (
        <div className={dNone()}>

            {
                props.tooltip ? <ToolTip title={props.tooltipText} /> : ''
            }

            <label htmlFor="">
                <span className={props.asterisk ? "asterisk label_name" : "label_name"}>{props.inputLabel}</span>
            </label>
            <Multiselect
                id={props.id}
                style={props.inputStyle}
                optionValueDecorator={props.optionValueDecorator}
                selectedValueDecorator={props.selectedValueDecorator}
                options={props.options} // Options to display in the dropdown
                selectedValues={props.selectedValues} // Preselected value to persist in dropdown
                onSelect={props.onSelect} // Function will trigger on select event
                onRemove={props.onRemove}
                selectionLimit={props.selectionLimit}
                displayValue={props.displayValue} // Property name to display in the dropdown options
                disable={props.disabled}
                placeholder={props.placeholder}
                loading={props.loading}
                showCheckbox={props.showCheckbox || false}
                singleSelect={props.isSingle}
                className={props.isSingle ? 'single_multiselect' : ''}
                closeOnSelect
            />
            {props.requiredMessage ? (
                <span className="error-message">
                    <InfoCircle fill="" /> {props.requiredMessageLabel}
                </span>
            ) : props.whiteSpace === false ? '' : (
                <span dangerouslySetInnerHTML={{ __html: "&nbsp;" }} />
            )}
        </div>
    );
    
};

export default CustomMultiSelectDropdown;
