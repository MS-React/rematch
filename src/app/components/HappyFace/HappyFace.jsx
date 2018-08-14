import React from 'react';
import PropTypes from 'prop-types';

const HappyFace = ({ display, showHappyFace, showUnhappyFace }) => {
  let face;

  if (display) {
    if (showHappyFace) {
      face = '=)';
    }
    if (showUnhappyFace) {
      face = '=(';
    }
  }

  return (
    <div className="happyFace">
      {face}
    </div>
  );
};

HappyFace.propTypes = {
  display: PropTypes.bool,
  showHappyFace: PropTypes.bool,
  showUnhappyFace: PropTypes.bool,
};

HappyFace.defaultProps = {
  display: false,
  showHappyFace: false,
  showUnhappyFace: false,
};

export default HappyFace;
