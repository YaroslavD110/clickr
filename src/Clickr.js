export default class Clickr {
  constructor(display) {
    this._display = display;
    this._counter = 0;
  }

  incrementClicks() {
    this._display.innerText = ++this._counter;
  }

  zeroingCounter() {
    this._counter = 0;
  }

  get score() {
    return this._counter;
  }
}
