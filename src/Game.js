import Timer from "./Timer";
import Clickr from "./Clickr";
import ScoreTable from "./ScoreTable";

export default class Game {
  constructor({
    button,
    displayForTime,
    displayForScore,
    overlay,
    overlayBtn,
    scoreTable
  }) {
    this._button = button;

    this._clickr = new Clickr(displayForScore);
    this._scoreTable = new ScoreTable({
      overlay,
      scoreTableNode: scoreTable,
      overlayBtn
    });
    this._timer = new Timer({
      from: 30,
      display: displayForTime,
      onStop: () => this.stopGame()
    });

    this._isGameStarted = false;
  }

  initGame() {
    this._button.addEventListener("click", this._clickEventListener.bind(this));
  }

  _clickEventListener() {
    if (!this._isGameStarted) {
      this._timer.start();
      this._button.classList.remove("btn-before-game");
      this._isGameStarted = true;
    }

    this._clickr.incrementClicks();
  }

  stopGame() {
    this._scoreTable.addScoreToTable(this._clickr.score);
    this._button.removeEventListener(
      "click",
      this._clickEventListener.bind(this)
    );
    this._button.classList.add("btn-before-game");
    this._scoreTable.showScoreTable();
    this._clickr.zeroingCounter();

    setTimeout(() => {
      this._isGameStarted = false;
    }, 300);
  }
}
