// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movies) => movies.director === director);
  return result;
}

function moviesAverage(movies) {
  let moviesWithScore = movies.filter((movie) =>  movie.score !== "");
  let total = moviesWithScore.reduce(
    (prevScore, { score }) => prevScore + score,
    0
  );
  let average = (total / moviesWithScore.length).toFixed(2);
  return Number(average);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorArray = getMoviesFromDirector(array, director);
  return moviesAverage(directorArray);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let titleArray = array.map((movie) => movie.title);
  let alphabeticallyOrder = titleArray.sort();
  let firstTwenty = alphabeticallyOrder.slice(0, 20);

  return firstTwenty;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  if (movies.length === 0) return new Array();
  let moviesOrderedByYear = movies.sort((movieA, movieB) =>
    movieA.year > movieB.year
      ? 1
      : movieA.year === movieB.year
      ? movieA.title > movieB.title
        ? 1
        : -1
      : -1
  );

  return moviesOrderedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let selectedCategory = movies.filter((movie) =>
    movie.genre.includes(category)
  );

  return moviesAverage(selectedCategory);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let hoursToMinutesArray = movies.map((movie) => {
    let duration = movie.duration;
    duration = duration.split('h');

    let hours = Number(duration[0]);
    let minutes = duration[1];
    minutes = Number(minutes.split('min')[0].trim());
    let totalMinutes = hours * 60 + minutes;
    let { title, year, director, genre, score } = movie;

    let newMovie = {
      title,
      year,
      director,
      duration: totalMinutes,
      genre,
      score
    };
    return newMovie;
  });
  return hoursToMinutesArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let selectedYear = movies.filter((movie) => movie.year === year);
  let bestMovieOfTheYear = selectedYear.sort((movieA, movieB) => movieA.score < movieB.score ? 1 : -1);
  return [bestMovieOfTheYear[0]];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
