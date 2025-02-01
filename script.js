function loadHTML(divID, filepath) {
    fetch(filepath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(divID).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener('DOMContentLoaded', function() {
        loadHTML('header', 'components/header.html');
        loadHTML('footer', 'components/footer.html');      
});

document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.cards-education'); // Container for the cards
    const cards = document.querySelectorAll('.card'); // All the card elements
    const totalCards = cards.length; // Total number of cards
    let currentIndex = 0; // Current index of the card being displayed
    let isDown = false; // Variable to track if the mouse/touch is pressed down
    let startX; // Starting X position for drag
    let scrollLeft; // Scroll position of the card container

    // Function to update the carousel position
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth; // Width of a single card
        cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Move the container to the current card
    }

    // Event listener for the next button
    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalCards; // Increment the index, loop back to 0 if it exceeds the total
        updateCarousel(); // Update the carousel position
    });

    // Event listener for the previous button
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Decrement the index, loop back to the last if it goes below 0
        updateCarousel(); // Update the carousel position
    });

    // Mouse down event to start dragging
    cardContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        cardContainer.classList.add('active'); // Add active class for styling purposes
        startX = e.pageX - cardContainer.offsetLeft; // Calculate the starting X position
        scrollLeft = cardContainer.scrollLeft; // Store the initial scroll position
    });

    // Mouse leave event to stop dragging
    cardContainer.addEventListener('mouseleave', () => {
        isDown = false; // Stop the dragging action
        cardContainer.classList.remove('active'); // Remove active class
    });

    // Mouse up event to stop dragging
    cardContainer.addEventListener('mouseup', () => {
        isDown = false; // Stop the dragging action
        cardContainer.classList.remove('active'); // Remove active class
    });

    // Mouse move event to drag the cards
    cardContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return; // If the mouse is not down, exit
        e.preventDefault();
        const x = e.pageX - cardContainer.offsetLeft; // Calculate the current X position
        const walk = (x - startX) * 2; // Calculate the distance dragged
        cardContainer.scrollLeft = scrollLeft - walk; // Update the scroll position
    });

    // Touch start event to initiate dragging on touch devices
    cardContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - cardContainer.offsetLeft; // Calculate the starting X position on touch
        scrollLeft = cardContainer.scrollLeft; // Store the initial scroll position
    }, { passive: true });

    // Touch end event to stop dragging
    cardContainer.addEventListener('touchend', () => {
        isDown = false; // Stop the dragging action
    });

    // Touch move event to drag the cards on touch devices
    cardContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return; // If the touch is not down, exit
        const x = e.touches[0].pageX - cardContainer.offsetLeft; // Calculate the current X position on touch
        const walk = (x - startX) * 2; // Calculate the distance dragged
        cardContainer.scrollLeft = scrollLeft - walk; // Update the scroll position
    }, { passive: true });

    updateCarousel(); // Initial update of the carousel position
});


/*
document.addEventListener('DOMContentLoaded', function() {
    const isGitHubPages = window.location.hostname === 'fab1471.'; // Verify if the website is hosted on GitHub Pages
    const repoName = 'Portfolio' // Repository name. .

    if (isGitHubPages) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            let href = link.getAttribute('href');
            if (!href.startsWith('/') && !href.includes('http')) {
                link.setAttribute('href', `/${repoName}/${href}`);
            }
        });
    };
});

*/
