import React from 'react';

const Proof = ({ proof }) => (
  <div key={'game-proof'} className="game-proof">
    {proof.equation} = ?
  </div>
);

export default Proof;
