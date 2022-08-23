import * as model from "./model.js";
import searchView from "./View/searchView.js";
import wordsView from "./View/wordsView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const body = document.querySelector(`.body`);

const loadResult = async function () {
  try {
    const search = searchView.getSearch();
    await model.wordsContent(search);
    wordsView.showResult(model.allWords.wordsAll);
    // console.log(model.allWords.wordsAll);
  } catch (err) {
    console.log(err);
  }
};

// const btnSearch = document.querySelector(`.btn`);
searchView.handleSearch(loadResult);
