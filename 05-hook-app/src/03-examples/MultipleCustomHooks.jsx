import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

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
                    <div className="alert alert-info text-center">
                        Loading...
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-end">
                        <p className="m-1">{ quote }</p>
                        <footer className="blockquote-footer mt-1">{ author }</footer>
                    </blockquote>
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
