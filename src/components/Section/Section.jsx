import React, { Component } from 'react';
import css from './Section.module.css';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    const percentage = Math.round((good * 100) / (good + neutral + bad));
    return good && percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    let statisticsRender;
    if (good === 0 && neutral === 0 && bad === 0) {
      statisticsRender = <Notification message="There is no feedback" />;
    } else {
      statisticsRender = (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      );
    }
    return (
      <div className={css.container}>
        <h1>{this.props.title}</h1>
        <FeedbackOptions
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        <h2>Statistics</h2>
        {statisticsRender}
      </div>
    );
  }
}

export default Section;
