import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize the component's state
    this.state = {
      count: 0
    };
  }

  // Method to increment count
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // Method to decrement count
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>Counter: {this.state.count}</h2>
        <div>
          <button style={styles.button} onClick={this.increment}>Increment</button>
          <button style={styles.button} onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

// Simple inline styles for presentation
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px'
  }
};

export default Counter;
