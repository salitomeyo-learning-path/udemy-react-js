import { render, screen } from '@testing-library/react';
import { GifGridItem } from "../../src/components/GifGridItem"

describe('Testing <GifGridItem />', () => {

    const title = 'Deku';
    const url = 'https://static.wikia.nocookie.net/boku-no-hero-academia-fanon/images/9/92/Deku.png/revision/latest?cb=20200728090057&path-prefix=es'

    test('Should match snapshot', () => {
        const { container } = render( <GifGridItem title={ title } url={ url }  />)
        expect( container ).toMatchSnapshot();
    })

    test('Should show image with indicated url', () => {
        render( <GifGridItem title={ title } url={ url }  /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('Should show title in component', () => {
        render( <GifGridItem title={ title } url={ url }  /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    })
})
