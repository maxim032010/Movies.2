// index.js

document.addEventListener("DOMContentLoaded", function () {
    const sliderItems = document.querySelectorAll('.slider-item');
    const sliderControls = document.querySelectorAll('.slider-control button');

    let currentIndex = 0;

    // Funktion zum Anzeigen des aktuellen Index
    function showSlide(index) {
        sliderItems.forEach(item => item.classList.remove('active'));
        sliderControls.forEach(control => control.classList.remove('active'));

        sliderItems[index].classList.add('active');
        sliderControls[index].classList.add('active');
    }

    // Funktion zum Wechseln zum nächsten Slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }

    // Funktion zum Wechseln zum vorherigen Slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentIndex);
    }

    // Event-Listener für die Slider-Steuerung
    sliderControls.forEach((control, index) => {
        control.addEventListener('click', function () {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Automatischer Wechsel zum nächsten Slide alle paar Sekunden
    setInterval(nextSlide, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    var sliderItems = document.querySelectorAll('.slider-item');
    var controlButtons = document.querySelectorAll('.poster-box');

    controlButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Entferne die 'active'-Klasse von allen Slider-Elementen
            sliderItems.forEach(function (item) {
                item.classList.remove('active');
            });

            // Füge die 'active'-Klasse zum entsprechenden Slider-Element hinzu
            sliderItems[index].classList.add('active');
        });
    });
});