import React from 'react';
import PropTypes from 'prop-types';

export default function Task_3_3(props) {
    return (
      <button onClick={props.logThis}>
        КНОПКА
      </button>
    );
  }


Task_3_3.propTypes = {
   type: PropTypes.func.isRequired,
};
