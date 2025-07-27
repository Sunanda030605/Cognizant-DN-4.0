import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  updateEntry = () => {
    this.setState(prevState => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  updateExit = () => {
    this.setState(prevState => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div style={containerStyle}>
        <h2>Entry/Exit Counter</h2>
        <p><strong>{this.state.entryCount}</strong> People Entered!!</p>
        <p><strong>{this.state.exitCount}</strong> People Exited!!</p>

        <button onClick={this.updateEntry} style={buttonStyle}>Login</button>
        <button onClick={this.updateExit} style={buttonStyle}>Exit</button>
      </div>
    );
  }
}

const containerStyle = {
  padding: "20px",
  margin: "auto",
  width: "400px",
  textAlign: "center",
  border: "1px solid #ccc",
  borderRadius: "10px",
  marginTop: "50px",
  backgroundColor: "#f9f9f9"
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px"
};

export default CountPeople;
