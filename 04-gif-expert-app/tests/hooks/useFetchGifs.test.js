import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Testing useFetchGifs Hook', () => {
    test('Should return original state', () => {
        const { result } = renderHook( () => useFetchGifs('Kimetsu no yaiba') );
        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    })

    test('Should return gifs array and isLoading in false', async() => {
        const { result } = renderHook( () => useFetchGifs('Kimetsu no yaiba') );

        await waitFor(
            () => expect( result.current.gifs.length ).toBeGreaterThan(0)
        );


        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    })
})
