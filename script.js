// Select the button and display area
const fetchButton = document.getElementById('fetchData');
const dataDisplay = document.getElementById('data');

// API URL (Using Dog API for random dog images)
const apiUrl = 'https://dog.ceo/api/breeds/image/random';

// Function to fetch data
function fetchData() {
    // Clear previous data
    dataDisplay.innerHTML = 'Loading...';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display the fetched data
            dataDisplay.innerHTML = `
                <p>Here is a random dog image for you:</p>
                <img src="${data.message}" alt="Random Dog" class="image">
            `;
        })
        .catch(error => {
            // Handle and display errors
            dataDisplay.innerHTML = `<p class="error">Failed to fetch data: ${error.message}</p>`;
        });
}

// Add event listener to the button
fetchButton.addEventListener('click', fetchData);
