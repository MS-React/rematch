import React from 'react';
import PropTypes from 'prop-types';

const Proof = ({ proof }) => (
  <div key="game-proof" className="game-proof">
    {`${proof.equation} = ?`}
  </div>
);

Proof.propTypes = {
  proof: PropTypes.shape({
    equation: PropTypes.string,
    result: PropTypes.number,
  }).isRequired,
};

export default Proof;
