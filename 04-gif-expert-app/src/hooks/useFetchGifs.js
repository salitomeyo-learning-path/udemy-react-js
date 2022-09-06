import { useState, useEffect } from "react"
import { getGifsByCategory } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
    const [ gifs, setGifs ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    const getGifs = async() => {
        const newGifs = await getGifsByCategory( category );
        setGifs(newGifs);
        setIsLoading(false);
    }

    useEffect( () => {
        getGifs();
    }, [ ])

    return {
        gifs,
        isLoading
    }
}