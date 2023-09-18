import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const onLeaveFeedback = event => {
    console.log(event.target.name);
    const nameButton = event.target.name;
    if (nameButton === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (nameButton === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (nameButton === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round(
    (good * 100) / (good + neutral + bad)
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Section title="Please Leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback yet..." />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
