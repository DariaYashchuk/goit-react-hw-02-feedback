import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={css.feedback_buttons}>
      <button className={css['feedback_button']} type="button" onClick={onGood}>
        Good
      </button>
      <button className={css.feedback_button} type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button className={css.feedback_button} type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
