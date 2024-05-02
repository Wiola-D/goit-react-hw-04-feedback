import { useState } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notifications/Notifications';
import { Section } from './components/Section/Section';
import { Statistic } from './components/Statistics/Statistics';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export function App() {
  const [feedback, setFeedback] = useState(INITIAL_STATE);

  const onLeaveFeedback = evt => {
    setFeedback(prevValue => ({
      ...prevValue,
      [evt.target.name]: prevValue[evt.target.name] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = feedback.bad + feedback.good + feedback.neutral;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(INITIAL_STATE)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <div>
            <Statistic
              valueBad={bad}
              valueGood={good}
              valueNeutral={neutral}
              valueTotal={total}
              valuePercentage={positivePercentage}
            />
            <button
              onClick={() => {
                setFeedback(INITIAL_STATE);
              }}
              type="button"
            >
              Reset
            </button>
          </div>
        )}
      </Section>
    </>
  );
}

export default App;
