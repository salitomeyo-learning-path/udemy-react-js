import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./components/Small";

const heavyStuff = ( iterationNumber = 20 ) => {
    for( let i = 0; i < iterationNumber; i++ ){
        console.log('Iterating...');
    }

    return `${ iterationNumber } iterations done!`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter( 10 );
    const [ show, setShow ] = useState( false );
    
    const memorizedValue = useMemo( () => heavyStuff( counter ), [counter] );

    return(
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => setShow( !show )}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
}
