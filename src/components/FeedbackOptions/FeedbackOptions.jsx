import { PropTypes } from "prop-types";

import { Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <div>
    {options.map(option => (
      <Btn key={option} name={option} type="button" onClick={onLeaveFeedback}>{option}</Btn>
    ))}
  </div>
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}