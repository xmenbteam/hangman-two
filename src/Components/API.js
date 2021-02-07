import axios from "axios";

const getRandomMovie = () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=5253becb732a744099e02486dbac043a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
    .then((res) => {
      // console.log(res.data.results, "RESPONSE");
      return res.data;
    })
    .catch((err) => {
      console.log(err, "ERROR");
    });
};

export default getRandomMovie;
