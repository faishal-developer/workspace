import { useFormik } from "formik"
import { useState } from "react";
import { PostPutPatch } from "../../ApiServices/ApiServices";
import { Endpoints } from "../../ApiServices/apiEndPoints";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { path } from "../../routes/path";
import { useDispatch } from "react-redux";
import { create_user } from "../../Store/userCartSlice";

export const useLogin=()=>{
    const [registrationLoader,setRegistrationLoader] = useState();
    const [loginLoader,setloginLoader] = useState();
    const navigate = useNavigate()
    const dispatch = useDispatch();



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
        console.log(values)
        setloginLoader(true)
        PostPutPatch(
            Endpoints.sign_in,
            values,
            {   
                thenCB:(result)=>{
                    toast.success("Login successfull")
                    localStorage.setItem('userData',result?.data?.data?.accessToken)
                    // let user = verifyRefreshToken(result?.data?.data?.accessToken)
                    console.log("user",result?.data?.data.user)
                    dispatch(create_user(result?.data?.data.user))
                    navigate(path.flights)
                },
                catchCB:(error)=>{
                    console.log(error);
                },
                finallyCB:()=>{
                    setloginLoader(false)
                },
                method:'post'
            }
        )
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
        values.role="user"
        setRegistrationLoader(true);
        PostPutPatch(
            Endpoints.sign_up,
            values,
            {   
                thenCB:(result)=>{
                    toast.success("Registration successfull")
                    navigate(path.signin)
                },
                catchCB:(error)=>{
                    console.log(error);
                },
                finallyCB:()=>{
                    setRegistrationLoader(false)
                },
                method:'post'
            }
        )
        // createUserWithPassword(values,setRegistrationLoader);
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