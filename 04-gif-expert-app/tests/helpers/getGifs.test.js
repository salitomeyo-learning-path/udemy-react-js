import { getGifsByCategory } from "../../src/helpers/getGifs";

describe('Test on getGifs()', () => {

    test('Must return a gifs array', async() => {
        const gifs = await getGifsByCategory('One punch');

        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
    })
})
