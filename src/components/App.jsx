import React from 'react';
import { useState } from 'react';

import css from './App.module.css';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      const percentage = Math.round((100 * good) / countTotalFeedback());
      return percentage;
    }
  };

  const onLeaveFeedback = value => {
    switch (value) {
      case 1:
        setGood(good + 1);
        break;

      case 0:
        setNeutral(neutral + 1);
        break;

      case -1:
        setBad(bad + 1);
        break;

      default:
        console.log('error in handleFeedback value');
    }
  };

  return (
    <div className={css.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
