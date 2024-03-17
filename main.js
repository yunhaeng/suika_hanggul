import {Bodies, Body, Collision, Engine, Events, Render, Runner, Composite} from "matter-js";
import { CHARACTERS } from './character';

//dev list


const engine = Engine.create();
const render = Render.create({
  engine,
  element: document.body,
  options: {
    wireframes: false,
    background: "#EEFBFB",
    width: 720,
    height: 850,
  }
}

);
const world = engine.world;

const background = Bodies.rectangle(310, 425, 620, 850, {
  isStatic: true,
  isSensor: true,
  render: { 
    sprite: {texture: "background.png"}
   }
})

const leftWall = Bodies.rectangle(15, 395, 30, 790, {
  isStatic: true,
  render: { fillStyle: "#98A9FD" }
})

const rightWall = Bodies.rectangle(605, 395, 30, 790, {
  isStatic: true,
  render: { fillStyle: "#98A9FD" }
})

const ground = Bodies.rectangle(310, 820, 620, 60, {
  isStatic: true,
  render: { fillStyle: "#98A9FD" }
})

const topLine = Bodies.rectangle(310, 150, 620, 2, {
  name: "topLine",
  isSensor: true,
  isStatic: true,
  render: { fillStyle: "#98A9FD"}
})

const graph = Bodies.rectangle(670, 400, 100, 800, {
  isSensor: true,
  isStatic: true,
  render: {sprite: {texture: "graph.png"}}
});

// const graph = Bodies.rectangle(670, 400, 100, 800, {
//     isSensor: true,
//     isStatic: true,
//     render: { fillStyle: "#6c80b8"}
//   });

Composite.add(world, [background, leftWall, rightWall, ground, topLine, graph]);

Render.run(render);
Runner.run(engine);


let currentBody = null;
let currentCharacter = null;
let disableAction = false;
let interval = null;
let endpoint = 0;
let score = 0;
let currentLine = null;
let currentScore = null;


function addCharacter() {
  const index = 9//Math.floor(Math.random() * 5);
  const character = CHARACTERS[index];

  const body = Bodies.circle(300, 50, character.radius, {
    index: index,
    isSleeping: true,
    render: {
      sprite: { texture: `${character.name}.png` }
    },
    restitution: 0.2,
  });

  currentBody = body;
  currentCharacter = character;

  Composite.add(world, body);

};
  
function addLine() {
  const line = Bodies.rectangle(300, 455, 5, 600, {
    isSensor: true,
    isSleeping: true,
    render: { 
      sprite: {texture: 'line.png'}
    }
  });

  currentLine = line;

  Composite.add(world, line);
  };

//점수 로직
function scoreLogic(i) {
  var temp_score = 0;
  for (var step = 0; step <= i+1; step++) {
    temp_score = temp_score + step
  }

  return temp_score;
};

//점수판
function createImage($string) {
  let drawing = document.createElement("canvas");

  drawing.width = '150'
  drawing.height = '50'

  let ctx = drawing.getContext("2d");

  ctx.fillStyle = "blue"
  ctx.beginPath();
  ctx.arc(75, 75, 20, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = '#98A9FD';
  ctx.font = "20pt sans-serif";
  ctx.textAlign = 'center'
  ctx.fillText($string, 75, 25);

  return drawing.toDataURL("image/png");

};

function addScore(i) {
  const score_board = Bodies.rectangle(310, 200, 150, 50 ,{
    isStatic: true,
    isSensor: true,
    render: {
      sprite: { texture: createImage(i)},
      xScale: 1,
      yScale: 1
    },
  });
  
  currentScore = score_board;
  Composite.add(world, score_board);
}

window.onkeydown = (event) => {
  if (disableAction) {
    return;
  }

  switch(event.code) {
    case "KeyA":
      if (interval)
        return;
      interval = setInterval(() => {
        if (currentBody.position.x - currentCharacter.radius> 30){
          Body.setPosition(currentBody, {
            x: currentBody.position.x - 1,
            y: currentBody.position.y,
          });
          Body.setPosition(currentLine, {
            x: currentLine.position.x - 1,
            y: currentLine.position.y,
          });
        }
      }, 5)
      break;
    case "KeyD":
      if (interval)
        return;
      interval = setInterval(() => {
        if (currentBody.position.x + currentCharacter.radius < 590){
          Body.setPosition(currentBody, {
            x: currentBody.position.x + 1,
            y: currentBody.position.y,
          });
          Body.setPosition(currentLine, {
            x: currentLine.position.x + 1,
            y: currentLine.position.y,
          });
        }
      }, 5)
      break;
    case "KeyS":
      Composite.remove(world, currentLine)
      currentBody.isSleeping = false;
      disableAction = true;

      setTimeout(() => {
        addCharacter();
        addLine();
        disableAction = false;
      }, 1000);
      break;
  }
}

window.onkeyup = (event) => {
  switch (event.code) {
    case "KeyA":
    case "KeyD":
      clearInterval(interval);
      interval = null;
  }
}

Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    if (collision.bodyA.index == collision.bodyB.index) {
      const index = collision.bodyA.index;
      
      if (index === CHARACTERS.length - 2) {
        endpoint++;
      }

      if (index === CHARACTERS.length - 1) {
        return;
      }
      
      score = score + scoreLogic(index);

      Composite.remove(world, [collision.bodyA, collision.bodyB]);

      const newCharacter = CHARACTERS[index + 1];

      const newBody = Bodies.circle(
        collision.collision.supports[0].x,
        collision.collision.supports[0].y,
        newCharacter.radius,
        {
          render: { 
            sprite: {texture: `${newCharacter.name}.png` }
          },
          index: index + 1,
        }
      );
      
      Composite.add(world, newBody);
      Composite.remove(world, currentScore)
      addScore(score)
    }

    if (
      !disableAction && 
      (collision.bodyA.name === "topLine" || collision.bodyB.name === "topLine" ))
      alert("Game over"); 
    setTimeout(() => {
      if (endpoint === 2) {
        alert(`you win \n score: ${score}`);
        endpoint = 0;
        Composite.remove(world, currentScore);
        score = 0;
        addScore(0);
        Composite.clear(world, true);
      }
    }, 1000)
  });
});

addLine();
addCharacter();
addScore(0);