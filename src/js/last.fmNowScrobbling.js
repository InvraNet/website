const URI = 'https://ws.audioscrobbler.com/2.0/';
const apiKey = 'ba6f4549ff9a84c389ad18a7171b7cbc';
const LFM_User = 'InvraNet';

function fetchNowPlaying() {
    fetch(`${URI}?method=user.getRecentTracks&user=${LFM_User}&api_key=${apiKey}&format=json&limit=1`)
        .then(response => response.json())
        .then(data => {
            if (data.recenttracks.track[0] === data.recenttracks) {

            }
            const track = data.recenttracks.track[0];
            const trackName = track.name;
            const artistName = track.artist['#text'];
            const albumName = track.album['#text'];
            const albumImage = track.image[1]['#text'];

            document.querySelector('.track-name').textContent = trackName;
            document.querySelector('.album-info').textContent = `On: ${albumName}`;
            document.querySelector('.artist-info').textContent = `Made by: ${artistName}`;
            document.querySelector('.album-image').src = albumImage;
        })
        .catch(error => {
            console.error('Error fetching data from Last.fm:', error);
            const trackInfoElement = document.querySelector('.song-bento-box');
            trackInfoElement.innerHTML = '<p>I must not be listening to a song right now!</p>';
        });
}
fetchNowPlaying();
setInterval(fetchNowPlaying, 500);