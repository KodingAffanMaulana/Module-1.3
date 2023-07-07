// Get the form and the lists
const addSongForm = document.getElementById('add-song-form');
const allSongsList = document.getElementById('all-songs-list');
const mostPlayedSongsList = document.getElementById('most-played-songs-list');

// Event listener for form submission
addSongForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const songTitleInput = document.getElementById('song-title');
    const artistInput = document.getElementById('artist');
    const songTitle = songTitleInput.value;
    const artist = artistInput.value;

    // Create a new list item element
    const newSongItem = document.createElement('li');
    newSongItem.textContent = `${songTitle} - ${artist}`;

    // Add the new song item to the "All Songs" list
    allSongsList.appendChild(newSongItem);

    // Add the new song item to the "Most Played Songs" list (optional)
    const newMostPlayedSongItem = newSongItem.cloneNode(true);
    mostPlayedSongsList.appendChild(newMostPlayedSongItem);

    // Clear the input fields
    songTitleInput.value = '';
    artistInput.value = '';
});
