

import { useEffect } from "react"
import { getGifsByCategory } from "../../helpers/getGifs"


export const GifGrid = ({ category }) => {

    useEffect( () => {
        getGifsByCategory( category );
    }, [ ])
    
    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}