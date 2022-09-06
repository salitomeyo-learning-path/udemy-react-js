import { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from "../components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories( [newCategory, ...categories] )
    }

    return (
        <>
            <h1 className="center">GifExpertApp</h1>

            <div className="flex-box">
                <div className="item-4">
                    <AddCategory
                        onNewCategory={ onAddCategory }
                    />
                </div>
                <div className="item">
                    <button onClick={ onAddCategory }>Agregar</button>
                </div>
            </div>

            { categories.map( category => (
                <GifGrid 
                    category={category}
                    key={ category }/>
            )) }
        </>
    )
}

