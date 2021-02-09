import axios from "axios";

const getRandomWords = () => {
  return axios
    .get(
      "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=ra88q8sk10zjszo1e0muom5i5mnrm79o442f3k8ia7zzxd4mt"
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err, "ERROR");
    });
};

export default getRandomWords;
