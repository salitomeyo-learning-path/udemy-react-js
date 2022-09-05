import React from "react";
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, cat }) => {

    return (
        <>
            <h1>{ title }</h1>
            <h4>{ subTitle }</h4>
            <p>{ cat }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    cat: 'Jade',
}

