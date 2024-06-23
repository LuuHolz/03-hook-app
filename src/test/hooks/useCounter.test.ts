import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../Hooks/useCounter';

describe('Pruebas en el useCounter', () => { 
    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        //evalua que sean funciones. ToEqual evalua un objeto
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
    });

    test('Debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));

        expect( result.current.counter ).toBe(100);
    })

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, increment } = result.current;

        act( () => {
            increment();
        });

        expect( result.current.counter ).toBe(11);
    })
    
    test('Debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
        });

        expect( result.current.counter ).toBe(9);
    })
    
    test('Debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, reset } = result.current;

        act( () => {
            reset();
        });

        expect( result.current.counter ).toBe(10);
    })
});
