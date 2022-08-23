import { API } from "./config";

export const allWords = {
  wordsAll: {},
};

export const wordsContent = async function (search) {
  try {
    const data = await fetch(`${API}${search}`);

    const words = await data.json();
    if (!data.ok) throw new Error(`${words.message}`);
    console.log(data, words);

    let [eachWord] = words;
    eachWord = {
      word: eachWord.word,
      meaning: eachWord.meanings,
      phonics: eachWord.phonetic,
      phonetics: eachWord.phonetics,
    };
    allWords.wordsAll = eachWord;
  } catch (err) {
    console.log(err);
  }
};
