'use strict';

/**
 * Add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

/**
 * Toggle search box in mobile device || small screen
 */

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function () {
    searchBox.classList.toggle("active");
})

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector("[overlay]");
    const sidebar = document.querySelector("[sidebar]");
    const menuBtn = document.querySelector("[menu-btn]");

    menuBtn.addEventListener("click", function() {
        overlay.classList.toggle("active");
        sidebar.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var loadMoreButton = document.querySelector('.btn.load-more');

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function () {
            // Klasse "loading" hinzufügen
            loadMoreButton.classList.add('loading');

            // Hier können Sie weitere Aktionen beim Laden mehrerer Elemente durchführen

            // Beispiel: Nach 2 Sekunden die "loading" Klasse wieder entfernen (simuliert das Laden von Daten)
            setTimeout(function () {
                loadMoreButton.classList.remove('loading');
            }, 2000);
        });
    }
});