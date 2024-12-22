import { useFormik } from "formik"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAddUser=()=>{
    const [AddUserLoader,setAddUserLoader] = useState();
    const navigate = useNavigate()
    const [success,setIsSuccess]=useState(false);

    // form validation logic
    const validateAddUserForm = (values) => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.email.trim()) {
            errors.email = "This field is required"
        }
        if (values.userName.trim().length<=3) {
            errors.userName = "Username should contain atleast 3 charecters"
        }
        if (!values.userName.trim()) {
            errors.userName = "This field is required"
        }
        if (!values.userId.trim()) {
            errors.userId = "This field is required"
        }
        if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,9}$/.test(values.contact.trim())) {
            errors.contact = "Invalid phone number"
        }
        if (!values.contact.trim()) {
            errors.contact = "This field is required"
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password.trim())    ) {
            errors.password = "Passward should contain 8 char, 1 capital, 1 small letter"
        }
        if (!values.password.trim()) {
            errors.password = "This field is required"
        }
        if (!values.company.trim()) {
            errors.company = "This field is required"
        }
        if (values.companyAddress.trim().length<=5) {
            errors.companyAddress = "Address should contain minimum 5 char"
        }
        if (!values.companyAddress.trim()) {
            errors.companyAddress = "This field is required"
        }
        if (values.password!==values.confirmPassword) {
            errors.confirmPassword = "Password is not matching"
        }
        return errors;
    }

    //dummy submisssion handler 
    const AddUserHandle=(values)=>{
        console.log("submission working");
        
        setAddUserLoader(true)
        setTimeout(()=>{
            setAddUserLoader(false);
            setIsSuccess(true)
        },500)
    }

    const AddUserFormik = useFormik({
        initialValues: {
            password:'',
            email:'',
            userName:"",
            userId:"",
            contact:"",
            company:"",
            companyAddress:"",
            confirmPassword:""
        },    
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateAddUserForm,
        onSubmit: AddUserHandle,
    })

    
    return {
        AddUserFormik,
        AddUserLoader,
        success,
        values:AddUserFormik.values
    }
}