import { useFormik } from "formik"
import { useState } from "react";
import { toast } from "react-toastify";

export const useOtp=()=>{
    const [OtpLoader,setOtpLoader] = useState();

    //form validation logic 
    const validateOtpForm = (values) => {
        const errors = {};
        if (!values.email.trim()) {
            errors.email = "This field is required"
        }
        return errors;
    }

    // a dummy otp handler
    const OtpHandle=(values)=>{
        setOtpLoader(true)
        setTimeout(async()=>{
            setOtpLoader(false);
            toast.info("A link sent to your email. Please change password by this email")
            await OtpFormik.setFieldValue("email",'')
            OtpFormik.setErrors({})
        },500)
    }

    // formik is external library used for form validation 
    const OtpFormik = useFormik({
        initialValues: {
            email:''
        },    
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateOtpForm,
        onSubmit: OtpHandle,
    })

    
    return {
        OtpFormik,
        OtpLoader
    }
}