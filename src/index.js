import Game from "./Game";

import "./scss/main.scss";

window.log = text => console.log("--- ", text);

window.onload = function() {
  const myGame = new Game({
    displayForTime: document.getElementById("display").children[0].children[0],
    displayForScore: document.getElementById("display").children[1].children[0],
    overlay: document.getElementById("overlay"),
    overlayBtn: document.getElementById("overlay-btn"),
    scoreTable: document.getElementById("score-table"),
    button: document.getElementById("button")
  });

  myGame.initGame();
};
