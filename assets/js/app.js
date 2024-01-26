document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll('.banner-slider .slider-item');
    let thumbnails = document.querySelectorAll('.slider-control .poster-box');

    let countItems = items.length;
    let currentItemIndex = 0;
    let intervalTime = 10000; // 5 seconds
    let intervalId;

    function showItem(index) {
        // Remove "active" class from all items
        items.forEach(item => item.classList.remove('active'));

        // Add "active" class to the specified item
        items[index].classList.add('active');
        
        // Remove "active" class from all thumbnails
        thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

        // Add "active" class to the specified thumbnail
        thumbnails[index].classList.add('active');
    }

    // Function to start the auto-change interval
    function startInterval() {
        intervalId = setInterval(function () {
            currentItemIndex = (currentItemIndex + 1) % countItems;
            showItem(currentItemIndex);
        }, intervalTime);
    }

    // Start the auto-change interval
    startInterval();

    // Stop the auto-change interval when interacting with the slider
    document.querySelector('.banner-slider').addEventListener('mouseover', function () {
        clearInterval(intervalId);
    });

    // Resume the auto-change interval when not interacting with the slider
    document.querySelector('.banner-slider').addEventListener('mouseout', function () {
        startInterval();
    });

    // Click event listener for thumbnails to change the active item immediately
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            currentItemIndex = index;
            showItem(currentItemIndex);
            clearInterval(intervalId);
            startInterval();
        });
    });
});
