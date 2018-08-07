export default class ScoreTable {
  constructor({ overlay, scoreTableNode, overlayBtn }) {
    this._overlay = overlay;
    this._scoreTableNode = scoreTableNode;

    this._scores = new Set([]);
    this._tryNumber = 1;

    overlayBtn.addEventListener("click", () => this.hideScoreTable());
  }

  showScoreTable() {
    this._overlay.classList.add("overlay-active");
  }

  hideScoreTable() {
    this._overlay.classList.remove("overlay-active");
  }

  addScoreToTable(score) {
    this._scores.add({
      tryNumber: this._tryNumber,
      score
    });
    this._tryNumber++;
    this._renderScores();
  }

  _renderScores() {
    let scoreWrap = document.createElement("tbody");

    for (let score of this._scores) {
      scoreWrap.innerHTML += `
        <tr>
          <td>${score.tryNumber}</td>
          <td>${score.score}</td>
        </tr>
      `;
    }

    this._scoreTableNode.appendChild(scoreWrap);
  }
}
