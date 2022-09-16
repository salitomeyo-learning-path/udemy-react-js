import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        console.log('Message Mounted');

        return () => {
            console.log('Message unMounted');
        }
    }, [])

    return (
        <>
            <h3>User already exists</h3>
        </>
    )
}
