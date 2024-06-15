import { useState } from "react";


const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputCahnge = ({ target }: { target: any}) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ] : value,
            
        });
    };

    const onResetForm = () => {
        setFormState( initialForm );
    };


  return { 
    ...formState,
    formState,
    onInputCahnge,
    onResetForm 

  }
}

export { useForm }


