import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                type="text" 
                placeholder="Type your name" 
                className="form-control m-2"
            />
            <input 
                ref={ inputRef }
                type="text" 
                placeholder="Type your name" 
                className="form-control m-2"
            />
            <input 
                type="text" 
                placeholder="Type your name" 
                className="form-control m-2"
            />

            <button
                onClick={ onClick }
                className="btn btn-primary m-2"
            >
                Set Focus
            </button>
        </>
    )
}

