
const usePlaceOrder = () => {
    const validateFormik = (values) => {
        const errors = {};
        if (values.name?.trim().length < 4) errors.description = "Name should be atleast 4 charecters";
        if (!values.name) errors.name = "Please provide a name";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = "Invalid email address";
        if (!values.email) errors.email = "Please provide a email";
        if(values.phone?.length<11 || values.phone?.length>14)errors.phone = "Please provide a valid phone Number";
        if(!values.phone)errors.phone="Please provide a phone number";
        if(values.phone_2?.length<11 || values.phone_2?.length>14)errors.phone_2 = "Please provide a valid phone_2 Number";
        if(!values.phone_2)errors.phone_2="Please provide a phone_2 number";
        if (values.address?.trim().length < 4) errors.address = "address should be atleast 4 charecter";
        if (!values.address)errors.address="Please provide a address";
        if (values.city?.trim().length < 4) errors.city = "city should be atleast 4 charecter";
        if (!values.city)errors.city="Please provide a city";
        if (values.upazilla?.trim().length < 4) errors.upazilla = "upazilla should be atleast 4 charecter";
        if (!values.upazilla)errors.upazilla="Please provide a upazilla";
        if (values.district?.trim().length < 4) errors.district = "district should be atleast 4 charecter";
        if (!values.district)errors.district="Please provide a district";
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