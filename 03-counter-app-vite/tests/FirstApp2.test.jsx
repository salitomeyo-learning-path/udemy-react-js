import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
import React from "react";


describe('Pruebas en <FirstApp />', () => {

    const title = "Hola, Soy Goku";
    const subTitle = "Soy un subtitulo";

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        render( <FirstApp title={title} /> );
        expect( screen.getByText(title) ).toBeTruthy();
    })

    test('debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
    })

    test('debe mostrar el elemento by test id', () => {

        const { container, getByTestId } = render( <FirstApp title={title} /> );

        expect( getByTestId('kitty') ).toBeTruthy();
        expect( getByTestId('kitty').innerHTML ).toContain('Jade');
    })

    test('debe mostrar el subtitulo enviado por prop', () => {
        
        render( 
            <FirstApp 
                title={title}
                subTitle={ subTitle}
            /> 
        );

        expect( screen.getByText(subTitle) ).toBeTruthy();
    })

})