import { renderHook, act } from "@testing-library/react"
import { useForm } from "../../Hooks/useForm"

describe('Pruebas en el useForm', () => { 

    const initialForm = {
        username: 'Luciana',
        email: 'luciana@gmail.com',
        password: '123'
    }

    test('Debe de regresar los valores por defecto ', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        // console.log(result.current)

        expect( result.current ).toEqual(
            //lo sacque del console.log(result.current) 
            {
                username: initialForm.username,
                email: initialForm.email,
                password: initialForm.password,
                formState: initialForm,
                onInputChange: expect.any( Function ),
                onResetForm: expect.any( Function )
              }
        )
    })

    test('Debe de cambiar el nombre del formulario', () => {

        const newName = 'Nicolas'

        const { result } = renderHook( () => useForm( initialForm ));
        const { onInputChange } = result.current;
        

        act( () => {
            onInputChange({ target: { name: 'username', value: newName}});
        })

        expect( result.current.username ).toBe( newName );
        expect( result.current.formState.username ).toBe( newName );

    })

    test('Debe de realizar el reset del formulario', () => {

        const newName = 'Nicolas'

        const { result } = renderHook( () => useForm( initialForm ));
        const { onResetForm } = result.current;
        
        act( () => {
            onResetForm();
        })

        expect( result.current.username ).toBe( initialForm.username );
        expect( result.current.formState.username ).toBe( initialForm.username );
    })
 })