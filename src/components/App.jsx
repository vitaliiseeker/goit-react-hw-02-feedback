import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const key = e.target.name;
    this.setState(prevState => ({ [key]: prevState[key] + 1 }))
  }

  countTotalFeedback = () => Object.values(this.state).reduce((acc, el) => acc += el, 0);

  countPositiveFeedbackPercentage = (total) => Math.round(this.state.good * 100 / total);

  render() {
    const { state, onLeaveFeedback } = this;
    const { good, neutral, bad } = state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={state}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} /> :
            <Notification message='There is no feedback' />}
        </Section>

      </>
    );
  }
}
