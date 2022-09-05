import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, cat }) => {

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

FirstApp.defaultProps = {
    title: 'No hay titulo',
    cat: 'Jade',
}

