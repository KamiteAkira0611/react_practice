import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => (
  <div>
    Result: <span>{result}</span>
  </div>
);

Result.propTypes = {
  result: PropTypes.number,
};


export default Result;
