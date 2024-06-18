import { useState } from "react";

type FormState = {
    username: string;
    email: string;
    password: string;
  }

const useForm = ( initialForm: FormState ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }: { target: any}) => {
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
    onInputChange,
    onResetForm 

  }
}

export { useForm }


