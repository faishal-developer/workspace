import { useFormik } from "formik";

const usePlaceOrder = () => {
    const validateFormik = (values) => {
        const errors = {};
        return errors
    }

    const submitFormik = (values) => {
        console.log("from submitFormik",values);
    }
    

    return {
        submitFormik,validateFormik
    }
};

export default usePlaceOrder;