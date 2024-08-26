let youtubeData;
let apiKey;

async function getKeys() {
    try {
        const response = await fetch('https://invra.net/api/keys.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const keys = await response.json();
        apiKey = keys.google;
    } catch (error) {
        console.error('Error fetching API key:', error);
    }
}

async function fetchYouTubeData() {
    await getKeys();
    if (!apiKey) {
        console.error('API key not available');
        return;
    }

    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCl6xerszOF4Fhgabvou2rkw&part=snippet,id&order=date&maxResults=6`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        youtubeData = await response.json();
        displayVideos();
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
    }
}

function displayVideos() {
    const videosContainer = document.getElementById('videos-container');
    videosContainer.innerHTML = '';
    youtubeData.items.forEach(video => {
        const videoTitle = video.snippet.title;
        const videoDescription = video.snippet.description ? video.snippet.description : "No description given";
        const videoId = video.id.videoId;
        const thumbnailUrl = video.snippet.thumbnails.medium.url;
        const videoElem = document.createElement('div');
        videoElem.classList.add("videoElem")
        videoElem.innerHTML = `
            <div>
                <a class="link" href="https://www.youtube.com/watch?v=${videoId}" target="_blank">${videoTitle}</a>
                <p>${videoDescription}</p>
                <div>
                    <img src="${thumbnailUrl}" alt="Video Thumbnail" class="mx-auto w-48">
                </div>
            </div>
        `;
        videosContainer.appendChild(videoElem);
    });
}


fetchYouTubeData();