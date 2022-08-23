class searchView {
  _searchInput = document.querySelector(`.search`);
  _searchForm = document.querySelector(`.search--form`);

  getSearch() {
    const search = this._searchInput.value;
    this._clearInput();
    return search;
    // console.log(search);
  }
  _clearInput() {
    this._searchInput.value = ``;
  }

  handleSearch(handler) {
    this._searchForm.addEventListener(`submit`, function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
