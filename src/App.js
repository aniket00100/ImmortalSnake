import React from "react";

import Game from "./Game";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { context: null };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    this.setState({ ...this.state, context: context });
    context.strokeStyle = "black";
    // context.strokeRect(0, 0, 600, 600);
    // context.strokeRect(0, 0, 600, 600);
  }

  render() {
    let snakeComponent = this.state.context ? (
      <Game context={this.state.context} />
    ) : null;

    return (
      <div>
        <h1 className="title">~!!Snake Game!!~</h1>
        <div className="canvasDiv">
          <canvas width="600" height="600" ref={this.canvasRef}></canvas>
        </div>
        {snakeComponent}
      </div>
    );
  }
}

export default App;
