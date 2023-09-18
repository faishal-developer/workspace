import { useFormik } from "formik"
import useFireBase from "../../Config/useFireBase";
import { useState } from "react";

export const useLogin=()=>{
    const {createUserWithPassword,signInWithPassword}= useFireBase();
    const [registrationLoader,setRegistrationLoader] = useState();
    const [loginLoader,setloginLoader] = useState();



    const validateLoginForm = (values) => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.email) {
            errors.email = "This field is required"
        }
        if (!values.password) {
            errors.password = "This field is required"
        }
        return errors;
    }

    const loginHandle=(values)=>{
        signInWithPassword(values,setloginLoader);
    }

    const loginFormik = useFormik({
        initialValues: {
            password:'',
            email:''
        },    
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateLoginForm,
        onSubmit: loginHandle,
    })

    const validateRegistrationForm = (values) => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if(values.password!== values.re_password){
            errors.re_password = "password is not matching"
        }
        if (!values.email) {
            errors.email = "This field is required"
        }
        if (!values.password) {
            errors.password = "This field is required"
        }
        if (!values.name) {
            errors.name = "This field is required"
        }
        if (!values.re_password) {
            errors.re_password = "This field is required"
        }
        return errors;
    }

    const registrationHandle=(values)=>{
        createUserWithPassword(values,setRegistrationLoader);
    }

    const registrationFormik = useFormik({
        initialValues: {
            name:'',
            email:'',
            password:'',
            re_password:''
        },    
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateRegistrationForm,
        onSubmit: registrationHandle,
    })

    return {
        loginFormik,
        registrationFormik,
        registrationLoader,
        loginLoader
    }
}