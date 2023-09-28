import { useFormik } from "formik";
import { fontFamilies, fontStyle, fontWeight } from "../../../utils/fonts.utils";
import useProductModal from "../useProductModal.logic";

const useTextModal = () => {
    const {setData} = useProductModal();

    const fontOptions=(data)=>{
        return Object.keys(data).map((item)=>({label:item,value:data[item]}))
    }
    const validateFormik=()=>{

    }
    const submitHandler=()=>{

    }
    const TextModalFormik = useFormik({
        initialValues: {
            fontFamily:{},
            fontWeight:{},
            fontStyle:{},
            fontSize:15
        },    
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateFormik,
        onSubmit: submitHandler,
    })

    function onSelectDropDown(selectedList, selectedItem,{state,setState,property}) {
        TextModalFormik.setValues(values => {
            values.product_cat = selectedList;
            setData({state,setState,property,value:selectedItem.value})
            return values;
        })
    }

    const optionValueDecorator = ({option,property,value,state}) => {
      return <span 
        style={{
            fontFamily:state.data.fontFamily,
            fontWeight:state.data.fontWeight,
            fontStyle:state.data.fontStyle,
            color:state.data.color,
            fontSize:'20px',
            [property]:value}}
        >
            {option}
    </span>
    };
    

    return {
        TextModalFormik,fontFamilyOptions:fontOptions(fontFamilies),onSelectDropDown,fontStyleOptions:fontOptions(fontStyle),fontWeightOptions:fontOptions(fontWeight),optionValueDecorator,selectedValueDecorator:optionValueDecorator
    }
};

export default useTextModal;