import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testing <AddCategory />', () => {
    
    test('Should change value from text box', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Kitty' } } );

        expect( input.value ).toBe('Kitty');
    })

    test('Must call onNewCategory if input has value', () => {
        const inputValue = 'Kitty';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('Must not call onNewCategory if input has no value', () => {
        const inputValue = '';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    })
})
