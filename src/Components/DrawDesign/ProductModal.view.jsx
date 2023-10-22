import React from 'react';
import ModalBootstrap from '../Modal/Modal.view';
import CustomMultiSelectDropdown from '../CustomDropDown/CustomDropDown.view';
import useProductModal from './useProductModal.logic';
import {templateProducts} from '../../utils/dummyProducts.utils';
import './productModal.scss'
import Commonbutton from '../Button/Button.view';
import { useNavigate } from 'react-router-dom';
import {path} from '../../routes/path'

//translation
const ProductModal = (props) => {
    const navigate=useNavigate();
    const {state,setState,loadBackgroundImage}= props;
    const {
        productModalOptions,productModalFormik,onSelectDropDown,setData,error,setError,handleClose
    } = useProductModal();

    return (
        <ModalBootstrap
            show={state.modal}
            handleClose={()=>{
                if(state.data.bg)setState({...state,modal:false})
                handleClose({state,setState})
            }}
            size='md'
            className=''
            title={<h6>Select a Product</h6>}
            footer={(
                <div>
                    <Commonbutton
                        type="button"
                        onclickCallback={()=>{navigate(path.home)}}
                        className="button remove-button"
                        btnText={`Back To Home`}
                        isLoading={false}
                        disabled={false}
                    />
                    <Commonbutton
                        type="button"
                        onclickCallback={()=>{
                            loadBackgroundImage(state.data.bg);
                            handleClose({state,setState})
                        }}
                        className="button"
                        btnText={`Save`}
                        isLoading={false}
                        disabled={false}
                    />
                </div>
            )}
        >
            <div>
                <CustomMultiSelectDropdown
                    id="product_category"
                    options={productModalOptions}
                    selectedValues={productModalFormik.values?.product_cat}
                    onSelect={(sl,si)=>onSelectDropDown(sl,si,{state,setState})}
                    onRemove={(sl,si)=>onSelectDropDown(sl,si,{state,setState})}
                    selectionLimit={1}
                    isSingle={true}
                    asterisk={false}
                    // inputLabel="Status"
                    displayValue="label"
                    placeholder={!productModalFormik.values?.product_cat?.length ? 'Select a product category' : null}
                    className={'text-capitalize'}
                    requiredMessage={productModalFormik.touched.product_cat && productModalFormik.errors.product_cat}
                    requiredMessageLabel={productModalFormik.touched.product_cat || productModalFormik.isSubmitting ? productModalFormik.errors.product_cat : ""}
                    loading={false}
                    tooltip={true}
                    tooltipText="Please select at least one"
                />
            </div>
            {
                state?.data?.product_cat ? (
                    <div className='product_container'>
                        <h6 className='title'>Select One</h6>
                        <div className='products'>
                            {templateProducts[state.data.product_cat].map((item)=>(
                                <figure
                                    onClick={()=>{
                                        setData({state,setState,property:'bg',value:item.img});
                                        setError('');
                                    }}
                                    className={state.data.bg===item.img?"active":''}
                                >
                                    <img src={item.img} alt={item.price}/>
                                </figure>
                            ))}
                        </div>
                            <p className='error-message'>{error}</p>
                    </div>
                ):''
            }
        </ModalBootstrap>
    );
};

export default ProductModal;