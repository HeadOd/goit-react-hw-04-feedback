import React, { Component } from "react";

import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";

export class Feedback extends Component {
  total = 0;
  percent = 0;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    this.setState(prevState => {
      return {[e.target.name]: prevState[e.target.name] + 1,
      }})
  };

  countTotalFeedback() {
      return this.total= this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage() {
      return this.total ? Math.round(this.percent = this.state.good / this.total * 100) : 0;
  };

  render() {
    return <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']} 
          onLeaveFeedback={this.onLeaveFeedback}>
        </FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics good={this.state.good} 
          neutral={this.state.neutral} 
          bad={this.state.bad} 
          countTotalFeedback={this.countTotalFeedback()} 
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}>
        </Statistics>
      </Section>
      </div>
  };
};