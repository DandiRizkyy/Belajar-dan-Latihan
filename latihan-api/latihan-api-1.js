async function getMovies() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5eaef7fdc0msh27b9264c5127018p1fc6d8jsndaaa23f971b3",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://moviesdatabase.p.rapidapi.com/titles",
    options
  );
  const data = await response.json();

  return data.data;
}

function createMovieCard(movie) {
  return `
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.plot}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">${movie.year}</small>
          </div>
        </div>
      </div>
    `;
}

async function renderMovieList() {
  const movies = await getMovies();
  const movieListElement = document.getElementById("movie-list");

  if (movies) {
    movieListElement.innerHTML = movies.map(createMovieCard).join("");
  } else {
    movieListElement.innerHTML = "<p>No movies found</p>";
  }
}
renderMovieList();
