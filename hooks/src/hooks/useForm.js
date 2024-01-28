import { useState } from "react";

//formObject is the form we send with the custom
//inputs we define and all the properties

export const useForm = (formObject = {}) => {

    const [formState, setFormState] = useState({ formObject });

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const clearForm = () => {
        setFormState(formObject);
    }

    return {
        formState,
        onInputChange,
        clearForm,
    }
}
