export default class Timer {
  constructor({ from, display, onStop }) {
    this._startFrom = from;
    this._display = display;
    this._onStop = onStop;

    this._display.innerText = this._startFrom;
  }

  start() {
    if (!this._interval) {
      this._currentTime = this._startFrom;
      this._display.innerText = this._startFrom;
    }

    this._interval = setInterval(() => {
      if (this._currentTime > 0) {
        this._display.innerText = --this._currentTime;
      } else {
        this._stop();
      }
    }, 1000);
  }

  _stop() {
    this._onStop();
    clearInterval(this._interval);
    this._interval = undefined;
  }
}
