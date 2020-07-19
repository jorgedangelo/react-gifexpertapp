import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id,url,title}) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem
