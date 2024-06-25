import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from '../../09-useContext/pages/LoginPage';

describe('Pruebas en LoginPage', () => { 

    test('Debe de mostrar el componente sin el usuario', () => {
      
        render( 

            <UserContext.Provider value=({ user: null })>
               <LoginPage/>
            </UserContext.Provider>
        );


        const preTag = screen.getByLabelText('pre'); 
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('Debe de llamar el setUser cuando se hace click', () => {

        const seetIserMock = jest.fn();

        render( 
            <UserContext.Provider value=({ user: null })>
               <LoginPage/>
            </UserContext.Provider>
        );

        const button = screen.getAllByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith();
      
    });
    
});