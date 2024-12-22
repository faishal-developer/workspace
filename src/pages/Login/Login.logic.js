import { useFormik } from "formik"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../routes/path";
import { useDispatch } from "react-redux";


export const useLogin=()=>{
    const [loginLoader,setloginLoader] = useState();
    const navigate = useNavigate()
    const dispatch = useDispatch();

    // validation logic for login form 
    const validateLoginForm = (values) => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.email.trim()) {
            errors.email = "This field is required"
        }
        if (!values.password.trim()) {
            errors.password = "This field is required"
        }
        return errors;
    }

    // dummy login handler 
    function loginHandle(values) {
        setloginLoader(true);
        setTimeout(() => {
            setloginLoader(false);
            navigate(path.add_user);
            localStorage.setItem('user', "true");
        }, 500);
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

    
    return {
        loginFormik,
        loginLoader
    }
}