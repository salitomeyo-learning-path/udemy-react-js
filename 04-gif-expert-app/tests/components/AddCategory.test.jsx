import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testing <AddCategory />', () => {
    
    test('Should change value from text box', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Kitty' } } );

        expect( input.value ).toBe('Kitty');
    })
})
