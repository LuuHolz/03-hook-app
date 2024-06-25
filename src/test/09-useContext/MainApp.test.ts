import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

//PRUEBAS EN RUTAS

describe('Pruebas en MainApp', () => { 

    test('Debe de mostrar el HomePage', () => {

        render( 
            <MemoryRouter>
               <MainApp/>
            </MemoryRouter>
        );

        screen.debug();
        expect( screen.getByText('HomePage') ).toBeTruthy();
    });
    
    // SIMULAR OTRA RUTA
    test('Debe de mostrar el LoginPage', () => {

        render( 
            <MemoryRouter initialEntries={['/login']}>
               <MainApp/>
            </MemoryRouter>
        );

        screen.debug();
        expect( screen.getByText('HomePage') ).toBeTruthy();
    });

 });