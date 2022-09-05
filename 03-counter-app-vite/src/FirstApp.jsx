import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {

    // if ( !title ) {
    //     throw new Error('I need a title')
    // }

    return (
        <>
            <h1>{ title }</h1>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

