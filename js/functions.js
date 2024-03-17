const HISTORY = 'history'
const input = document.querySelector("input")
let history = JSON.parse(localStorage.getItem(HISTORY))

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: ''
    }
};

document.querySelector('button').addEventListener('click', () => {
    if (input.value != "") {
        searchMoviePosterUrl();

        const newSearch = input.value
        history.push(newSearch)
        localStorage.setItem(HISTORY,JSON.stringify(history))
        input.value = ""
    }
})

input.addEventListener("keypress",(event) => {
    if (event.key == "Enter" && input.value != "") {
        searchMoviePosterUrl();

        const newSearch = input.value
        history.push(newSearch)
        localStorage.setItem(HISTORY,JSON.stringify(history))
        input.value = ""
    }
})

async function searchMoviePosterUrl() {
    const query = 'https://api.themoviedb.org/3/search/movie?query=' + document.querySelector('input').value + '&include_adult=false&language=en-US&page=1'
    const response = await fetch(query, options)
    const movies = await response.json()
    console.log(movies)
    const poster = movies.results[0].poster_path
    document.querySelector('img').src = "https://image.tmdb.org/t/p/w500" + poster
}

if (history == null) {
    history = []
}