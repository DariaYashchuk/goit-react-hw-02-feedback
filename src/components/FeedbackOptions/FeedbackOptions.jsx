import React from 'react';
import css from './FeedbackOptions.module.css';

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
export default FeedbackOptions;
