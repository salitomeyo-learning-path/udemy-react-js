import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing <GifGrid />', () => {
    const category = 'Kimetsu no yaiba';

    test('Should show loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    })

    test('Should show items when the images charge useFetchGifs', () => {
        const category = 'Kimetsu no yaiba';
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Midoriya',
                url: 'https://localhost/midoriya.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})
