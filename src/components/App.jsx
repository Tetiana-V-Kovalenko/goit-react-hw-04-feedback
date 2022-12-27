import { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import NotificationMessage from './Statistics/NotificationMessage';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const arrBtns = ['good', 'neutral', 'bad'];
  const incrementFeedback = e => {
    switch (e.currentTarget.name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return (good * 100) / total;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={arrBtns}
          onLeaveFeedback={incrementFeedback}
        />
      </Section>
      <Section title="Statistics">
        {good + neutral + bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage />
        )}
      </Section>
    </div>
  );
};
export default App;
