// script.js

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        console.log('Search query:', searchInput.value);
        // Add your search functionality here
    }
});