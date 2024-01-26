document.addEventListener("DOMContentLoaded", function () {
    const searchModal = document.getElementById('searchModal');
    const searchTermElement = document.getElementById('searchTerm');
    const searchResultsElement = document.getElementById('searchResults');

    // Simuliere einige Beispieldaten (ersetze dies durch deine tatsächlichen Suchergebnisse)
    const allMovies = [
        { title: 'Der Gestiefelte Kater', rating: '8.4', year: '2022', imageUrl: './assets/images/Der-Gestiefelte-Kater.png', detailUrl: './files/Movies/Der-Gestiefelte-Kater.html' },
        { title: 'Wonka', rating: '2.8', year: '2024', imageUrl: './assets/images/Wonka.png', detailUrl: './files/Movies/Wonka.html' },
        { title: 'Der Junge und der Reiher', rating: '7.5', year: '2023', imageUrl: './assets/images/Der-Junge-und-der-Reiher.png', detailUrl: './files/Movies/Der-Junge-und-der-Reiher.html' }
    ];

    // Funktion zum Anzeigen der Suchergebnisse
    function showSearchResults(results) {
        searchResultsElement.innerHTML = ''; // Leere vorherige Ergebnisse

        results.forEach(result => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <figure class="poster-box card-banner">
                    <img src="${result.imageUrl}" alt="${result.title}" class="img-cover">
                </figure>

                <h4 class="title">${result.title}</h4>

                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" width="20" height="20" loading="lazy" alt="rating">
                        <span class="span">${result.rating}</span>
                    </div>

                    <div class="card-badge">${result.year}</div>
                </div>

                <a href="${result.detailUrl}" class="card-btn" title="${result.title}"></a>
            `;

            searchResultsElement.appendChild(movieCard);
        });
    }

    // Funktion zum Auslösen der Suche
    function performSearch(searchTerm) {
        searchTermElement.textContent = searchTerm;

        // Filtere Filme nach dem eingegebenen Suchbegriff
        const filteredResults = allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

        showSearchResults(filteredResults);
        searchModal.classList.add('active');
    }

    // Beispiel: Suche auslösen, wenn die Seite mit einem Suchparameter geladen wird
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q');

    if (searchTerm) {
        performSearch(decodeURIComponent(searchTerm));
    }

    // Event-Listener für das Suchfeld auf der search.html-Seite
    const searchField = document.querySelector('.search-field');

    searchField.addEventListener('keydown', function (event) {
        // Überprüfe, ob die gedrückte Taste die Enter-Taste ist (KeyCode 13)
        if (event.keyCode === 13) {
            const inputValue = event.target.value.trim();

            if (inputValue !== '') {
                performSearch(inputValue);
            } else {
                // Wenn das Eingabefeld leer ist, leere die Suchergebnisse und deaktiviere das Modal
                searchResultsElement.innerHTML = '';
                searchModal.classList.remove('active');
            }
        }
    });
});