import React from 'react';

class EventExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementAndGreet = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
    alert("Hello! Have a great day ");
  };

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayWelcome = (msg) => {
    alert(`${msg}`);
  };

  onPressHandler = () => {
    alert("I was clicked !");
  };

  render() {
    return (
      <div style={styles.container}>
        <p>Counter: {this.state.count}</p>

        <div style={styles.buttonContainer}>
          <button onClick={this.incrementAndGreet} style={styles.button}>Increment</button>
          <button onClick={this.decrement} style={styles.button}>Decrement</button>
          <button onClick={() => this.sayWelcome("Welcome ")} style={styles.button}>
            Say Welcome
          </button>
          <button onClick={this.onPressHandler} style={styles.button}>Click on me</button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial" },
  buttonContainer: { display: "flex", flexDirection: "column", gap: "10px", width: "200px" },
  button: { padding: "10px", fontSize: "16px", cursor: "pointer" }
};

export default EventExamples;
