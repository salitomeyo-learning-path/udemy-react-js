import { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from "../components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories( [newCategory, ...categories] )
    }

    return (
        <>
            <h1 className="center">GifExpertApp</h1>

            <AddCategory
                onNewCategory={ onAddCategory }
            />

            { categories.map( category => (
                <GifGrid 
                    category={category}
                    key={ category }/>
            )) }
        </>
    )
}

