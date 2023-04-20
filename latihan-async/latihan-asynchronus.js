let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    let inputKeyword = document.querySelector(".input-keyword");
    let movies = await getMovies(inputKeyword.value);
    console.log(movies);
    updateUI(movies);
  } catch (err) {
    console.log(err);
  }
});

//event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    let imdbid = e.target.dataset.imdbid;
    let movieDetails = await getMoviesDetails(imdbid);
    updateDetails(movieDetails);
  }
});

function getMoviesDetails(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=93a0be7c&s=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetails(m) {
  let movieDetails = showMovieDetails(m);
  let modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetails;
}

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=93a0be7c&s=" + keyword)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => {
    cards += showCard(m);
  });
  let movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

function showCard(m) {
  return `
  <div class="col-md-4 my-3">
    <div class="card">
    <img src="${m.Poster}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${m.Title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
    <a href="#" class="modal-detail-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${m.imdbID}">See details</a>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    `;
}
