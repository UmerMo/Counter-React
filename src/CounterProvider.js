import React from "react";

class CounterProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  increment() {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  }

  decrement() {
    this.setState(prevState => {
      return {
        value: prevState.value - 1
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.visualise({
          value: this.state.value,
          increment: this.increment.bind(this),
          decrement: this.decrement.bind(this)
        })}
      </React.Fragment>
    );
  }
}

export default CounterProvider;
