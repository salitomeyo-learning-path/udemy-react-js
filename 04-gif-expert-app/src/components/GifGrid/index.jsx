import PropTypes from 'prop-types';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../GifGridItem";

// import './styles.css';

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading ?
                    <p>Cargando...</p>
                :
                    <div className="card-grid">
                    { 
                        gifs.map( (gif) => (
                            <GifGridItem 
                                key={gif.id}  
                                { ...gif }
                            />
                        ))
                    }
                    </div>

            }
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
