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
        videoElem.classList.add('video-block', 'bg-gray-800', 'rounded-lg', 'p-4', 'shadow-lg');
        videoElem.innerHTML = `
        <div>
        <a href='https://www.youtube.com/watch?v=${videoId}' target="_blank">
            <div>
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="font-semibold text-lg text-primary-500 hover:underline">${videoTitle}</a>
                <p class="text-gray-400">${videoDescription}</p>
                <div class="flex h-screen w-full bg-blue-400 justify-center items-center mt-4">
                    <img src="${thumbnailUrl}" alt="Video Thumbnail" class="mx-auto w-48">
                </div>
            </div>
        </a>
    </div>    
        `;
        videosContainer.appendChild(videoElem);
    });
}


fetchYouTubeData();