import { useFormik } from "formik";
import { templateProducts } from "../../utils/dummyProducts.utils";
import { removeUnderScore } from "../../helper/CommonFunction";
import { useState } from "react";

const useProductModal = () => {
    const [error,setError] = useState('');

    const productModalOptions=()=>{
        return Object.keys(templateProducts).map((item)=>{
            return {label:removeUnderScore(item),value:item};
        })
    };

    const validateFormik=(values)=>{
        const errors={};
        if(!values.product_cat)errors.product_cat= "Please Select One Product";
        return errors;
    }

    const submitHandler=()=>{
    }

    const productModalFormik = useFormik({
        initialValues: {
            product_cat:''
        },    
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateFormik,
        onSubmit: submitHandler,
    })

    const setData=({state,setState,property,value})=>{
        console.log(property,value);
        setState({
            ...state,
            data:{
                ...state.data,
                [property]:value
            }
        })
    }

    function onSelectDropDown(selectedList, selectedItem,{state,setState}) {
        productModalFormik.setValues(values => {
            values.product_cat = selectedList;
            setData({state,setState,property:'product_cat',value:selectedItem.value})
            return values;
        })
    }

    const handleClose=({state,setState})=>{
        productModalFormik.handleSubmit();
        if(!state.data.bg)setError('Please Select One Image')
        else{
            setState({...state,modal:false});
        }
    }

    return{
        productModalFormik,productModalOptions:productModalOptions(),onSelectDropDown,setData,error,setError,handleClose
    }
};

export default useProductModal;