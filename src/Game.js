import React from "react";

class Snake extends React.Component {
  constructor(props) {
    super(props);
    this.snake = [{ x: 0, y: 0 }];
    this.currentKey = null;
    this.intervalId = null;
    this.box = 20;
    this.food = [{ x: 0, y: 0 }];
    this.max = 29;
    this.timeIntervalMS = 50;
    this.state = { score: -1 };
  }

  componentDidMount() {
    this.drawSnake();
    this.newFood();
    document.addEventListener("keydown", this.afterKeyPress);
  }

  afterKeyPress = (event) => {
    switch (event.code) {
      case "Space":
        clearInterval(this.intervalId);
        return;

      case "ArrowUp":
        if (this.currentKey === "ArrowDown") break;
        this.currentKey = "ArrowUp";
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.snakeMovement, this.timeIntervalMS);

        break;

      case "ArrowDown":
        if (this.currentKey === "ArrowUp") break;
        this.currentKey = "ArrowDown";
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.snakeMovement, this.timeIntervalMS);

        break;

      case "ArrowLeft":
        if (this.currentKey === "ArrowRight") break;
        this.currentKey = "ArrowLeft";
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.snakeMovement, this.timeIntervalMS);

        break;

      case "ArrowRight":
        if (this.currentKey === "ArrowLeft") break;
        this.currentKey = "ArrowRight";
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.snakeMovement, this.timeIntervalMS);

        break;

      default:
        console.log(this.snake);
        break;
    }
    return;
  };

  snakeMovement = () => {
    // changing the co-ordinates of the snake
    // according to the key pressed

    // updating the last element of the snake array
    // console.log(this.snake);

    if (this.currentKey === "ArrowRight") {
      this.snake.push({
        y: this.snake[this.snake.length - 1].y,
        x: this.snake[this.snake.length - 1].x + this.box,
      });
      this.props.context.fillRect(
        this.snake[this.snake.length - 1].x,
        this.snake[this.snake.length - 1].y,
        this.box,
        this.box
      );
      this.props.context.clearRect(
        this.snake[0].x,
        this.snake[0].y,
        this.box,
        this.box
      );
    } else if (this.currentKey === "ArrowLeft") {
      this.snake.push({
        y: this.snake[this.snake.length - 1].y,
        x: this.snake[this.snake.length - 1].x - this.box,
      });
      this.props.context.fillRect(
        this.snake[this.snake.length - 1].x,
        this.snake[this.snake.length - 1].y,
        this.box,
        this.box
      );
      this.props.context.clearRect(
        this.snake[0].x,
        this.snake[0].y,
        this.box,
        this.box
      );
    } else if (this.currentKey === "ArrowUp") {
      this.snake.push({
        y: this.snake[this.snake.length - 1].y - this.box,
        x: this.snake[this.snake.length - 1].x,
      });
      this.props.context.fillRect(
        this.snake[this.snake.length - 1].x,
        this.snake[this.snake.length - 1].y,
        this.box,
        this.box
      );
      this.props.context.clearRect(
        this.snake[0].x,
        this.snake[0].y,
        this.box,
        this.box
      );
    } else if (this.currentKey === "ArrowDown") {
      this.snake.push({
        y: this.snake[this.snake.length - 1].y + this.box,
        x: this.snake[this.snake.length - 1].x,
      });
      this.props.context.fillRect(
        this.snake[this.snake.length - 1].x,
        this.snake[this.snake.length - 1].y,
        this.box,
        this.box
      );
      this.props.context.clearRect(
        this.snake[0].x,
        this.snake[0].y,
        this.box,
        this.box
      );
    }

    if (
      this.snake[this.snake.length - 1].x === this.food[0].x &&
      this.snake[this.snake.length - 1].y === this.food[0].y
    ) {
      this.newFood();
    } else this.snake.shift();

    this.gameOver();
  };

  drawSnake = () => {
    let x = Math.round(Math.random() * (this.max - 5)) + 1;
    let y = Math.round(Math.random() * (this.max - 5)) + 1;

    this.snake[0] = { x: x * this.box, y: y * this.box };
    this.snake[1] = { x: (x + 1) * this.box, y: y * this.box };

    this.props.context.fillStyle = "black";

    for (let i = 0; i <= this.snake.length - 1; i++) {
      this.props.context.fillRect(
        this.snake[i].x,
        this.snake[i].y,
        this.box,
        this.box
      );
    }
    console.log(this.snake[0], this.snake[1]);
  };

  newFood = () => {
    let x = Math.round(Math.random() * this.max);
    let y = Math.round(Math.random() * this.max);

    for (let i = 0; i <= this.snake.length - 1; i++) {
      if (
        this.snake[i].x === x * this.box &&
        this.snake[i].y === y * this.box
      ) {
        console.log("gotta get a new food...");
        return this.newFood();
      }
    }

    this.food[0].x = x * this.box;
    this.food[0].y = y * this.box;
    this.props.context.fillRect(
      this.food[0].x,
      this.food[0].y,
      this.box,
      this.box
    );
    this.setState({ score: this.state.score + 1 });
    return;
  };

  gameOver = () => {
    let head = this.snake[this.snake.length - 1];

    // Snake-body-gameOver-check

    let over = false;
    for (let i = 0; i <= this.snake.length - 2; i++) {
      if (this.snake[i].x === head.x && this.snake[i].y === head.y) {
        over = true;
        console.log("snake body true");
      }
    }

    // snake head boundry check
    let noX = head.x / this.box;
    let noY = head.y / this.box;
    if (noX > this.max || noY > this.max || noX < 0 || noY < 0) {
      over = true;
      console.log("snake boundry true");
    }

    // actions to perform after the
    if (over) {
      clearInterval(this.intervalId);
      console.log("Game Over...");
      document.removeEventListener("keydown", this.snakeMovement, true);
    }
  };

  render() {
    console.log(`state = ${this.state.score}`);
    // console.log("set state worked!!!!!");
    return <h2 style={{ textAlign: "center" }}>Score : {this.state.score}</h2>;
  }
}

export default Snake;
