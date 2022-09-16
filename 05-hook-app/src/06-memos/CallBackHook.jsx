import { useState, useCallback } from "react";
import { ShowIncrement } from "./components/ShowIncrement";

export const CallBackHook = () => {
    const [ counter, setCounter ] = useState( 10 );

    const increment = useCallback(
        (value) => {
            setCounter( (cont) => cont + value );
        },
        [],
    )

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    return(
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}
