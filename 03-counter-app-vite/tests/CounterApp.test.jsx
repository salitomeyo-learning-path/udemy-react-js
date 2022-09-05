import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
import React from "react";


describe('Testing <CounterApp> Component', () => {
    const initialValue = 100
    
    test('debe de hacer match con el snapshot', () => {
        const { container } = render( 
        <CounterApp
            value={initialValue}
        /> );

        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar el valor inicial de 100', () => {
        render( 
        <CounterApp
            value={initialValue}
        /> );

        expect(screen.getByText(initialValue) ).toBeTruthy();
    })

    test('debe de incrementar con el boton +1', () => {
        render( 
        <CounterApp
            value={initialValue}
        /> );

        fireEvent.click( screen.getByText( '+1' ));

        expect( screen.getByText(initialValue+1) ).toBeTruthy();
    })

    test('debe de decrementar con el boton -1', () => {
        render( 
        <CounterApp
            value={initialValue}
        /> );

        fireEvent.click( screen.getByText( '-1' ));

        expect( screen.getByText(initialValue-1) ).toBeTruthy();
    })

    test('debe de decrementar con el boton -1', () => {
        render( 
        <CounterApp
            value={initialValue}
        /> );

        fireEvent.click( screen.getByText( '+1' ));
        fireEvent.click( screen.getByText( '+1' ));
        fireEvent.click( screen.getByText( '+1' ));
        fireEvent.click( screen.getByText( '+1' ));
        fireEvent.click( screen.getByRole('button', { name: 'reset-btn' }) )

        expect( screen.getByText(initialValue) ).toBeTruthy();
    })
})