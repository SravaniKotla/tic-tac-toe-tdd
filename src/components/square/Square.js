import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
    return (
      <button className="square" onClick={props.onClick}>
        
      </button>
    );
  }
  Square.propTypes = { 
    onClick: PropTypes.func,
    value: PropTypes.string
  };
  export default Square;