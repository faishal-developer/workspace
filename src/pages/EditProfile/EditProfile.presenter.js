import { useFormik } from "formik"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const useEditUser=()=>{
    const [EditUserLoader,setEditUserLoader] = useState();
    const navigate = useNavigate()
    const [success,setIsSuccess]=useState(false);
    const [imageError,setImageError]=useState('')
    const [image,setImage]=useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0]; // Get the first file
        const maxFileSize = 2 * 1024 * 1024; // 2 MB in bytes
    
        if (file) {
          // Check if the file is an image
          if (!file.type.startsWith('image/')) {
            setImageError('Please upload a valid image file.');
            return;
          }
    
          // Check if the file size is less than 2 MB
          if (file.size > maxFileSize) {
            setImageError('Image size must be less than 2 MB.');
            return;
          }
    
          // Set the image in state and clear errors
          
          const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);  // Updating the state with the file data URL
            };
            reader.readAsDataURL(file); 
          setImageError('');
        }
      };

    const validateEditUserForm = (values) => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.email?.trim()) {
            errors.email = "This field is required"
        }
        if (values.userName?.trim().length<=3) {
            errors.userName = "Username should contain atleast 3 charecters"
        }
        if (!values.userName?.trim()) {
            errors.userName = "This field is required"
        }
        if (!values.userId?.trim()) {
            errors.userId = "This field is required"
        }
        if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,9}$/.test(values.contact?.trim())) {
            errors.contact = "Invalid phone number"
        }
        if (!values.contact?.trim()) {
            errors.contact = "This field is required"
        }
        if (!values.company?.trim()) {
            errors.company = "This field is required"
        }
        if (values.companyAddress?.trim().length<=5) {
            errors.companyAddress = "Address should contain minimum 5 char"
        }
        if (!values.companyAddress?.trim()) {
            errors.companyAddress = "This field is required"
        }
        console.log(errors);
        
        return errors;
    }

    const EditUserHandle=(values)=>{
        console.log("submission working");
        
        setEditUserLoader(true)
        setTimeout(()=>{
            setEditUserLoader(false);
            toast.success("Profile saved successfully")
        },500)
    }

    const EditUserFormik = useFormik({
        initialValues: {
            email:'dummy@gmail.com',
            userName:"Md Faishal",
            userId:"userId",
            contact:"+8801853837981",
            company:"Dummy",
            companyAddress:"dummy",
        },    
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateEditUserForm,
        onSubmit: EditUserHandle,
    })

    
    return {
        EditUserFormik,
        EditUserLoader,
        success,
        values:EditUserFormik.values,
        handleImageUpload,
        image,
        imageError
    }
}