describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe falla', () => {
        const message1 = 'Hola mundo';
    
        const message2 = message1.trim();
    
        expect( message1 ).toBe( message2 );
    })
})

