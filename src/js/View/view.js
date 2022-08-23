export default class View {
  _results;

  showResult(results) {
    this._results = results;
    const bodyText = document.querySelector(".body");
    const wordsView = this._word();
    bodyText.insertAdjacentHTML("afterbegin", wordsView);
  }
}
