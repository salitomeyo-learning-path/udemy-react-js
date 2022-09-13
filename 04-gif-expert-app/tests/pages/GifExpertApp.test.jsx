import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../src/pages/GifExpertApp"

describe('Testing <GifExpertApp />', () => {
    test('Should have title', () => {
        render( <GifExpertApp />);
        expect( screen.getByText('GifExpertApp') );
    })
})
