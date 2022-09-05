const name = 'Salome';
const newMessage = {
    message: 'I`m learning react',
    name: 'Salome'
}

const randomReturn = () => {
    return Math.random();
}

export const FirstApp = () => {

    return (
        <>
            <h1>{ name }</h1>
            <p>{ newMessage.message }</p>
            <h2>{ randomReturn() }</h2>
        </>
    )
}

