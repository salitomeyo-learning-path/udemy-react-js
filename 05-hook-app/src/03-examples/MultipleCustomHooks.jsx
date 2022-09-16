import { Loading } from "./components/Loading";
import { Quote } from "./components/Quote";
import { useCounter, useFetch } from "../hooks"

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />

            { isLoading ?
                (
                    <Loading />
                )
                :
                (
                    <Quote author={author} quote={quote} />
                )
            }

            <button 
                className="btn btn-primary" 
                onClick={decrement}
                disabled={isLoading}
            >
                Previous Quote
            </button>
            <button 
                className="btn btn-primary" 
                onClick={increment}
                disabled={isLoading}
            >
                Next Quote
            </button>

            

        </>
    )
}
