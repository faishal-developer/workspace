import React, { useEffect } from 'react';
import ModalBootstrap from '../../Modal/Modal.view';
import Commonbutton from '../../Button/Button.view';
import CustomMultiSelectDropdown from '../../CustomDropDown/CustomDropDown.view';
import useTextModal from './useTextModal.logic';
import { fontFamilies, fontStyle, fontWeight } from '../../../utils/fonts.utils';
import './textModal.scss'
import { SketchPicker } from 'react-color'
import useProductModal from '../useProductModal.logic';

//translation + save previous state + remove formik
const TextModal = (props) => {
    const {state,setState,addtext}= props;
    const {setData} = useProductModal();
    const { TextModalFormik,fontFamilyOptions,onSelectDropDown,fontStyleOptions,fontWeightOptions,optionValueDecorator,selectedValueDecorator} = useTextModal();
    
    return (
        <ModalBootstrap
            show={state.modal}
            handleClose={()=>{
                setState({...state,modal:false});
            }}
            size='lg'
            className=''
            title={<h6>Select Text Styles</h6>}
            footer={(
                <div>
                    <Commonbutton
                        type="button"
                        onclickCallback={()=>setState({...state,modal:false})}
                        className="button remove-button"
                        btnText={`Cancel`}
                        isLoading={false}
                        disabled={false}
                    />
                    <Commonbutton 
                        type="button"
                        onclickCallback={()=>{
                            addtext({
                                fontFamily:state.data?.fontFamily || fontFamilies.Barriecito,
                                fontWeight:state.data.fontWeight || 'normal',
                                fontStyle:state.data.fontStyle || 'normal',
                                color:state.data.color,
                            });
                            setState({...state,modal:false});
                        }}
                        className="button"
                        btnText={`Save`}
                        isLoading={false}
                        disabled={false}
                    />
                </div>
            )}
        >
            <div className='text-modal'>
                <div className='container'>
                    <CustomMultiSelectDropdown
                        id="fontFamily"
                        options={fontFamilyOptions}
                        // selectedValues={TextModalFormik}
                        onSelect={(sl,si)=>onSelectDropDown(sl,si,{state,setState,property:'fontFamily'})}
                        onRemove={(sl,si)=>onSelectDropDown(sl,si,{state,setState,property:'fontFamily'})}
                        selectionLimit={1}
                        isSingle={true}
                        asterisk={false}
                        // inputLabel="Status"
                        displayValue="label"
                        placeholder={`Select font family`}
                        className={'text-capitalize'}
                        tooltip={true}
                        tooltipText="Please select one"
                        optionValueDecorator={(option)=>optionValueDecorator({state,option,property:'fontFamily',value:fontFamilies[option]})}
                        selectedValueDecorator={(option)=>selectedValueDecorator({state,option,property:'fontFamily',value:fontFamilies[option]})}
                    />
                    <CustomMultiSelectDropdown
                        id="fontWeight"
                        options={fontWeightOptions}
                        // selectedValues={fontWeight[state.data.fontWeight]}
                        onSelect={(sl,si)=>onSelectDropDown(sl,si,{state,setState,property:'fontWeight'})}
                        onRemove={(sl,si)=>onSelectDropDown(sl,si,{state,setState,property:'fontWeight'})}
                        selectionLimit={1}
                        isSingle={true}
                        asterisk={false}
                        // inputLabel="Status"
                        displayValue="label"
                        placeholder={'Select font weight'}
                        className={'text-capitalize'}
                        tooltip={true}
                        tooltipText="Please select at least one"
                        optionValueDecorator={(option)=>optionValueDecorator({state,option,property:'fontWeight',value:fontWeight[option]})}
                        selectedValueDecorator={(option)=>selectedValueDecorator({state,option,property:'fontWeight',value:fontWeight[option]})}
                    />
                    <CustomMultiSelectDropdown
                        id="fontStyle"
                        options={fontStyleOptions}
                        // selectedValues={fontStyle[state.data.fontStyle]}
                        onSelect={(sl,si)=>onSelectDropDown(sl,si,{state,setState,property:'fontStyle'})}
                        onRemove={(sl,si)=>onSelectDropDown(sl,si,{state,setState,property:'fontStyle'})}
                        selectionLimit={1}
                        isSingle={true}
                        asterisk={false}
                        // inputLabel="Status"
                        displayValue="label"
                        placeholder={'Select font style'}
                        className={'text-capitalize'}
                        tooltip={true}
                        tooltipText="Please select at least one"
                        optionValueDecorator={(option)=>optionValueDecorator({state,option,property:'fontStyle',value:fontStyle[option]})}
                        selectedValueDecorator={(option)=>selectedValueDecorator({state,option,property:'fontStyle',value:fontStyle[option]})}
                    />
                    
                </div>
                <div className='container'>
                    <div>
                        <SketchPicker 
                          color={state.data?.color ?? ''}
                          onChangeComplete={(color)=>setData({state,setState,property:'color',value:color.hex}
                            )}
                        />
                    </div>
                </div>
            </div>
        </ModalBootstrap>
    );
};

export default TextModal;