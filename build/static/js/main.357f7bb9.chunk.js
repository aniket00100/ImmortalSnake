(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),s=t.n(o),c=t(5),l=t(1),k=t(2),x=t(4),i=t(3),u=function(e){Object(x.a)(t,e);var n=Object(i.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).afterKeyPress=function(e){switch(e.code){case"Space":return void clearInterval(a.intervalId);case"ArrowUp":if("ArrowDown"===a.currentKey)break;a.currentKey="ArrowUp",clearInterval(a.intervalId),a.intervalId=setInterval(a.snakeMovement,a.timeIntervalMS);break;case"ArrowDown":if("ArrowUp"===a.currentKey)break;a.currentKey="ArrowDown",clearInterval(a.intervalId),a.intervalId=setInterval(a.snakeMovement,a.timeIntervalMS);break;case"ArrowLeft":if("ArrowRight"===a.currentKey)break;a.currentKey="ArrowLeft",clearInterval(a.intervalId),a.intervalId=setInterval(a.snakeMovement,a.timeIntervalMS);break;case"ArrowRight":if("ArrowLeft"===a.currentKey)break;a.currentKey="ArrowRight",clearInterval(a.intervalId),a.intervalId=setInterval(a.snakeMovement,a.timeIntervalMS);break;default:console.log(a.snake)}},a.snakeMovement=function(){"ArrowRight"===a.currentKey?(a.snake.push({y:a.snake[a.snake.length-1].y,x:a.snake[a.snake.length-1].x+a.box}),a.props.context.fillRect(a.snake[a.snake.length-1].x,a.snake[a.snake.length-1].y,a.box,a.box),a.props.context.clearRect(a.snake[0].x,a.snake[0].y,a.box,a.box)):"ArrowLeft"===a.currentKey?(a.snake.push({y:a.snake[a.snake.length-1].y,x:a.snake[a.snake.length-1].x-a.box}),a.props.context.fillRect(a.snake[a.snake.length-1].x,a.snake[a.snake.length-1].y,a.box,a.box),a.props.context.clearRect(a.snake[0].x,a.snake[0].y,a.box,a.box)):"ArrowUp"===a.currentKey?(a.snake.push({y:a.snake[a.snake.length-1].y-a.box,x:a.snake[a.snake.length-1].x}),a.props.context.fillRect(a.snake[a.snake.length-1].x,a.snake[a.snake.length-1].y,a.box,a.box),a.props.context.clearRect(a.snake[0].x,a.snake[0].y,a.box,a.box)):"ArrowDown"===a.currentKey&&(a.snake.push({y:a.snake[a.snake.length-1].y+a.box,x:a.snake[a.snake.length-1].x}),a.props.context.fillRect(a.snake[a.snake.length-1].x,a.snake[a.snake.length-1].y,a.box,a.box),a.props.context.clearRect(a.snake[0].x,a.snake[0].y,a.box,a.box)),a.snake[a.snake.length-1].x===a.food[0].x&&a.snake[a.snake.length-1].y===a.food[0].y?a.newFood():a.snake.shift(),a.gameOver()},a.drawSnake=function(){var e=Math.round(Math.random()*(a.max-5))+1,n=Math.round(Math.random()*(a.max-5))+1;a.snake[0]={x:e*a.box,y:n*a.box},a.snake[1]={x:(e+1)*a.box,y:n*a.box},a.props.context.fillStyle="black";for(var t=0;t<=a.snake.length-1;t++)a.props.context.fillRect(a.snake[t].x,a.snake[t].y,a.box,a.box);console.log(a.snake[0],a.snake[1])},a.newFood=function(){for(var e=Math.round(Math.random()*a.max),n=Math.round(Math.random()*a.max),t=0;t<=a.snake.length-1;t++)if(a.snake[t].x===e*a.box&&a.snake[t].y===n*a.box)return console.log("gotta get a new food..."),a.newFood();a.food[0].x=e*a.box,a.food[0].y=n*a.box,a.props.context.fillRect(a.food[0].x,a.food[0].y,a.box,a.box),a.setState({score:a.state.score+1})},a.gameOver=function(){for(var e=a.snake[a.snake.length-1],n=!1,t=0;t<=a.snake.length-2;t++)a.snake[t].x===e.x&&a.snake[t].y===e.y&&(n=!0,console.log("snake body true"));var r=e.x/a.box,o=e.y/a.box;(r>a.max||o>a.max||r<0||o<0)&&(n=!0,console.log("snake boundry true")),n&&(clearInterval(a.intervalId),console.log("Game Over..."),document.removeEventListener("keydown",a.snakeMovement,!0))},a.snake=[{x:0,y:0}],a.currentKey=null,a.intervalId=null,a.box=20,a.food=[{x:0,y:0}],a.max=29,a.timeIntervalMS=50,a.state={score:-1},a}return Object(k.a)(t,[{key:"componentDidMount",value:function(){this.drawSnake(),this.newFood(),document.addEventListener("keydown",this.afterKeyPress)}},{key:"render",value:function(){return console.log("state = ".concat(this.state.score)),r.a.createElement("h2",{style:{textAlign:"center"}},"Score : ",this.state.score)}}]),t}(r.a.Component),h=(t(13),function(e){Object(x.a)(t,e);var n=Object(i.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={context:null},a.canvasRef=r.a.createRef(),a}return Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this.canvasRef.current.getContext("2d");this.setState(Object(c.a)(Object(c.a)({},this.state),{},{context:e})),e.strokeStyle="black"}},{key:"render",value:function(){var e=this.state.context?r.a.createElement(u,{context:this.state.context}):null;return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"~!!Snake Game!!~"),r.a.createElement("div",{className:"canvasDiv"},r.a.createElement("canvas",{width:"600",height:"600",ref:this.canvasRef})),e)}}]),t}(r.a.Component));s.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.357f7bb9.chunk.js.map