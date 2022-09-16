import { useState } from "react";
import { useRef, useLayoutEffect } from "react"

export const Quote = ({ quote, author }) => {
    const pRef = useRef();
    const [ boxSize, setBoxSize ] = useState({
        height: 0,
        width: 0
    })
    
    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width })
    }, [quote])
    
    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="m-1">{ quote }</p>
                <footer className="blockquote-footer mt-1">{ author }</footer>
            </blockquote>
            <code>{ JSON.stringify( boxSize ) }</code>
        </>
    )
}

