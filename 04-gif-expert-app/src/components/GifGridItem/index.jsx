import PropTypes from 'prop-types';

// import './styles.css';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='card'>
            <img className='gif' src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
