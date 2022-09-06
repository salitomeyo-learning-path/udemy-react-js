import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../GifGridItem";

import './styles.css';

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs( category );
    
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