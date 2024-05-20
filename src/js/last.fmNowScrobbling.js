var URI = 'https://ws.audioscrobbler.com/2.0/';
var apiKey; // Will be assigned later

function fetchNowPlaying() {
    fetch('https://invra.net/api/keys.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(keys => {
            apiKey = keys.lastfm; // Assign the API key
            var LFM_User = 'InvraNet'; // Moved inside fetch to ensure apiKey is available
            return fetch(`${URI}?method=user.getRecentTracks&user=${LFM_User}&api_key=${apiKey}&format=json&limit=1`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length > 0) {
                var track = data.recenttracks.track[0];
                var trackName = track.name;
                var artistName = track.artist['#text'];
                var albumName = track.album['#text'];
                var albumImage = track.image[1]['#text'];

                document.querySelector('.track-name').textContent = trackName;
                document.querySelector('.album-info').textContent = `On: ${albumName}`;
                document.querySelector('.artist-info').textContent = `Made by: ${artistName}`;
                document.querySelector('.album-image').src = albumImage;
            } else {
                var trackInfoElement = document.querySelector('.song-bento-box');
                trackInfoElement.innerHTML = '<p>I must not be listening to a song right now!</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data from Last.fm:', error);
            var trackInfoElement = document.querySelector('.song-bento-box');
            trackInfoElement.innerHTML = '<p>There was an error fetching data from Last.fm</p>';
        });
}

fetchNowPlaying();
setInterval(fetchNowPlaying, 500);
