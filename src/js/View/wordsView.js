import View from "./view";
import iconStar from "url:../../images/star-empty.svg";
import iconStarFill from "url:../../images/star.svg";
import volume from "url:../../images/volume-high-outline.svg";

class WordsView extends View {
  _errorMessage = "not found";

  _word() {
    console.log(this._results);
    return `
    <section class="body--top">
        <div class="left">
          <h1>${this._results.word}</h1>
          <img
            class="speak--svg"
            src="${volume}"
            alt=""
          />
          <p>${this._results.phonics}</p>
        </div>
        <img class="speak--svg" src="${iconStar}" alt="" />
      </section>
      <hr class="hr--colored" />
      <section class="body--middle">
        <div class="each--meaning">
          <div>
            <h3 class="part">${this._results.meaning[0].partOfSpeech}</h3>
            <p class="definition">
            ${this._results.meaning[0].definitions[0].definition}
            </p>
            <p>
              example:
              <span>ipsum Lorem ipsum dolor sit amet consectetur adipis</span>
            </p>
          </div>
          <div>
            <h3 class="part">Antonyms</h3>
            <p class="antonym">${this._results.meaning[0].synonyms[0]} </p>
          </div>
          <div>
            <h3 class="part">Synonyms</h3>
            <p class="synonym">${this._results.meaning[0].synonyms[0]}</p>
          </div>
        </div>
      </section>`;
  }

  // ['hashchange','load'].forEach(en=>{
  //     windows.addEventListener(en,
  //         // nofunctionYet
  //         )
  // })
}

export default new WordsView();
