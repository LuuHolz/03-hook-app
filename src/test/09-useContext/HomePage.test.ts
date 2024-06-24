import { render, screen } from "@testing-library/react";
import { HomePage } from "../../09-useContext/pages/HomePage";
import { UserContext } from '../../09-useContext/context/UserContext';

describe('Pruebas en HomePage', () => { 

    const user = {
        id: 1,
        name: 'Luciana',
    }

    test('Debe de mostrar el componente sin el usuario', () => {

        render( 

            <UserContext.Provider value=({ user: null })>
                <HomePage/>
            </UserContext.Provider>
        );

                            //es como un id
        const preTag = screen.getByLabelText('pre'); // area-label
        expect( preTag.innerHTML ).toBe( 'null' );
    });

    test('Debe de mostrar el componente CON el usuario', () => {

        render( 

            <UserContext.Provider value=({ user })>
                <HomePage/>
            </UserContext.Provider>
        );

                            //es como un id
        const preTag = screen.getByLabelText('pre'); // area-label
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
    });
    
 });