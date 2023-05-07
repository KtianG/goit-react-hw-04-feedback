import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback(1)}>Good</button>
      <button onClick={() => onLeaveFeedback(0)}>Neutral</button>
      <button onClick={() => onLeaveFeedback(-1)}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
