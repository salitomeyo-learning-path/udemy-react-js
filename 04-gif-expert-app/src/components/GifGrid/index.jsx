

import { useState, useEffect } from "react"
import { getGifsByCategory } from "../../helpers/getGifs"
import { GifGridItem } from "../GifGridItem";

import './styles.css';

export const GifGrid = ({ category }) => {

    const [ gifs, setGifs ] = useState([]);

    const getGifs = async() => {
        const newGifs = await getGifsByCategory( category );
        setGifs(newGifs);
    }

    useEffect( () => {
        getGifs();
    }, [ ])
    
    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                { 
                    gifs.map( (gif) => (
                        // <GifGridItem 
                        //     title={gif.title} 
                        //     key={gif.id} 
                        //     url={gif.url} 
                        // />
                        <GifGridItem 
                            key={gif.id}  
                            { ...gif }
                        />
                    ))
                }
            </div>
        </>
    )
}