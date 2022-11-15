import PropTypes from "prop-types";

import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
    if (countTotalFeedback) {
      return (<ul><li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotalFeedback}</li>
      <li>Positive feedback: {countPositiveFeedbackPercentage}%</li></ul>)
    } else {
      return (<Notification message="There is no feedback"></Notification>)
    }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
}