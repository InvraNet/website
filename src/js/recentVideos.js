function fetchLatestVideos() {
    fetch('https://invra.net/api/keys.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch API keys');
            }
            return response.json();
        })
        .then(keys => {
            const apiKey = keys.google;
            const channelId = 'UCl6xerszOF4Fhgabvou2rkw';
            const maxResults = 6;
            const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;
            return fetch(apiUrl);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch latest videos');
            }
            return response.json();
        })
        .then(data => {
            const videosContainer = document.getElementById('latestVideos');
            data.items.forEach(item => {
                const videoTitle = item.snippet.title;
                const videoDescription = item.snippet.description;
                const videoId = item.id.videoId;
                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                const bentoBox = document.createElement('div');
                bentoBox.classList.add('bg-gray-800', 'p-4', 'rounded-lg', 'shadow-lg', 'cursor-pointer');
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('video-container');
                videoContainer.innerHTML = `<iframe width="100%" height="200%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
                const descriptionElement = document.createElement('p');
                descriptionElement.classList.add('text-white', 'mt-2');
                descriptionElement.innerText = videoDescription;
                bentoBox.appendChild(videoContainer);
                bentoBox.appendChild(descriptionElement);
                bentoBox.addEventListener('pointerdown', () => {
                    window.location.href = videoUrl;
                });
                videosContainer.appendChild(bentoBox);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

window.onload = fetchLatestVideos;