import { useState  } from "react";

import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";

export const Feedback = () => {
  let total = 0;
  let percent = 0;
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    switch (e.target.name) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
        break;

      case "bad":
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
      return total = good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
      return total ? Math.round(percent = good / total * 100) : 0;
  };

    return <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']} 
          onLeaveFeedback={onLeaveFeedback}>
        </FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics good={good} 
          neutral={neutral} 
          bad={bad} 
          countTotalFeedback={countTotalFeedback()} 
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          >
        </Statistics>
      </Section>
      </div>;
}
