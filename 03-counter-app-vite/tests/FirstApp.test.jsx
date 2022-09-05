// import { render } from '@testing-library/react';
// import { FirstApp } from '../src/FirstApp';
// import React from "react";


// describe('Pruebas en <FirstApp />', () => {

//     test('debe de hacer match con el snapshot', () => {
//         const title = "Hola, Soy Goku";

//         const { container } = render( <FirstApp title={title} /> );

//         expect( container ).toMatchSnapshot();
//     });

//     test('debe de mostrar el titulo en un h1', () => {
//         const title = "Hola, Soy Goku";
        
//         const { container, getByText } = render( <FirstApp title={title} /> );

//         expect( getByText(title) ).toBeTruthy();

//         const h1 = container.querySelector('h1');
//         expect( h1.innerHTML ).toBe(title);
//     })

//     test('debe mostrar el elemento by test id', () => {
//         const title = "Hola, Soy Goku";
        
//         const { container, getByTestId } = render( <FirstApp title={title} /> );

//         expect( getByTestId('kitty') ).toBeTruthy();
//         expect( getByTestId('kitty').innerHTML ).toContain('Jade');
//     })

//     test('debe mostrar el subtitulo enviado por prop', () => {
//         const title = "Hola, Soy Goku";
//         const subTitle = "Soy un subtitulo";
        
//         const { container, getByText } = render( 
//         <FirstApp 
//             title={title}
//             subTitle={ subTitle}
//         /> );

//         expect( getByText(subTitle) ).toBeTruthy();
//     })

// })