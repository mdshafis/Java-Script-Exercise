const form = document.querySelector('#searchForm');

form.onsubmit = function (event) {
    event.preventDefault();

    const query = document.getElementById('query').value.trim();

    if (query) {
        window.open(`https://api.tvmaze.com/search/shows?q=${query}`, '_blank');
    }
};
