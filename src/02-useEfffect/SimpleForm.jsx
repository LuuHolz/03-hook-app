import { useEffect, useState } from "react";
import { Message } from '../02-useEfffect/Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Luciana123',
        email: 'luciana@gmail.com'
    });

    const { username, email } = formState;

    const onInputCahnge = ({ target }) => {
        const { name, value } = target;
        console.log( name, value)

        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    useEffect( () => {
            // console.log('useEffect llamado una unica vez []')
        }, []);

    useEffect( () => {
            // console.log('useEffect cambia si se modifica el estado')
        }, [formState]);

   useEffect( () => {
            // console.log('useEffect cambia si se modifica el {valor: email}')
        }, [email]);

  return (
    <>
        <h1>Formulario simple</h1>

        <hr />
        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputCahnge }
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="luciana@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputCahnge }
        />

        { (username === 'Luciana123') && <Message/> }
        
    </>
  )
}

export { SimpleForm }