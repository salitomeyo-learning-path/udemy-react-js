import { useState } from "react";
import { AddCategory } from "../components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories( [...categories, 'PEpe'] )
    }

    return (
        <>
            <h1 className="center">GifExpertApp</h1>

            <div className="flex-box">
                <div className="item-4">
                    <AddCategory setCategories={ setCategories } />
                </div>
                <div className="item">
                    <button onClick={ onAddCategory }>Agregar</button>
                </div>
            </div>
            
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{category}</li>
                }) }
            </ol>
        </>
    )
}

