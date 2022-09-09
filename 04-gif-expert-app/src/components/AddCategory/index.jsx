import { useState } from "react"

import './styles.css';

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return(
        <form className="search-container" onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="Search gifs" 
                value={ inputValue }   
                onChange = { (event) => onInputChange(event) }
                />
            <button type="submit">Agregar</button>
        </form>
    )
}
