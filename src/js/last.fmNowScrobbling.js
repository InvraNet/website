let apiKey;
function getKeys() {
    return fetch('https://invra.net/api/keys.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(keys => {
            apiKey = keys.lastfm;
        })
        .catch(error => {
            console.error('Error fetching API key:', error);
        });
}
function getScrobbling() {
    if (apiKey == null || apiKey == "underfined") {
        return getKeys().then(() => {
            return nowPlaying();
        });
    } else {
        return nowPlaying();
    }
}
function nowPlaying() {
    const LFM_User = 'InvraNet';
    const URI = "https://ws.audioscrobbler.com/2.0/";
    return fetch(`${URI}?method=user.getRecentTracks&user=${LFM_User}&api_key=${apiKey}&format=json&limit=1`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(json => {
            const last_track = json.recenttracks.track[0];
            const trackElem = document.getElementById('track');
            const artistElem = document.getElementById('artist');
            const dateElem = document.getElementById('date');
            const nowplayingElem = document.getElementById('now-playing');
            const albumcoverElem = document.getElementById('album-cover');
            const albumcoverLinkElem = document.getElementById('album-cover-link');
            const albumElem = document.getElementById('album');
            const track = last_track.name;
            const trackLink = last_track.url;
            const uncleanArtistLink = trackLink.split("/", 5);
            const artistLink = `${uncleanArtistLink[0]}//${uncleanArtistLink[2]}/${uncleanArtistLink[3]}/${uncleanArtistLink[4]}/`;
            const artist = last_track.artist['#text'];
            const album = last_track.album['#text'];
            const uncleanAlbumLink = album.replaceAll(" ", "+");
            const albumLink = `${artistLink}${uncleanAlbumLink}`;
            let relative_time = null;
            if (last_track.date) {
                const unix_date = last_track.date.uts;
                const date_text = last_track.date["#text"];
                relative_time = relativeTime(unix_date, date_text);
            }
            const imageLink = last_track.image[1]["#text"];
            trackElem.innerHTML = '';
            albumcoverElem.innerHTML = '';
            albumElem.innerHTML = '';
            albumcoverElem.innerHTML = '';
            if (relative_time != null) {
                trackElem.textContent = "I am not listening to anything right now.";
                albumcoverElem.style.display = 'none';
                artistElem.style.display = 'none';
                albumElem.style.display = 'none';
            } else {
                const trackLinkElem = document.createElement('a');
                const artistLinkElem = document.createElement('a');
                const albumLinkElem = document.createElement('a');
                const userLinkElem = document.createElement('a');
                albumcoverLinkElem.href = albumLink;
                trackLinkElem.href = trackLink;
                trackLinkElem.target = "_blank";
                trackLinkElem.textContent = `${track}`;
                artistLinkElem.href = artistLink;
                artistLinkElem.target = "_blank";
                artistLinkElem.textContent = `By: ${artist}`;
                albumLinkElem.href = albumLink;
                albumLinkElem.target = "_blank";
                albumLinkElem.textContent = `On: ${album}`;
                userLinkElem.href = "https://www.last.fm/user/InvraNet";
                userLinkElem.target = "_blank";
                trackElem.appendChild(trackLinkElem);
                artistElem.innerHTML = '';
                artistElem.appendChild(artistLinkElem);
                albumcoverElem.src = imageLink;
                albumcoverElem.style.display = 'block';
                artistElem.style.display = 'block';
                albumElem.style.display = 'block';
                albumElem.appendChild(albumLinkElem);
            }
        })
        .catch(error => {
        console.error('Error fetching recent tracks:', error);
        });
}
function relativeTime(time, time_text) {
    const time_now = Math.round(Date.now() / 1000);
    const time_diff = time_now - time;
    const SEC_IN_MIN = 60;
    const SEC_IN_HOUR = SEC_IN_MIN * 60;
    const SEC_IN_DAY = SEC_IN_HOUR * 24;
    if (time_diff < SEC_IN_HOUR) {
        const minutes = Math.round(time_diff / SEC_IN_MIN);
        return minutes + " minute" + ((minutes != 1) ? "s" : "") + " ago";
    }
    if (time_diff >= SEC_IN_HOUR && time_diff < SEC_IN_DAY) {
        const hours = Math.round(time_diff / SEC_IN_HOUR);
        return hours + " hour" + ((hours != 1) ? "s" : "") + " ago";
    }
    if (time_diff >= SEC_IN_DAY) {
        return time_text;
    }
}
getScrobbling();
setInterval(getScrobbling, 5000);