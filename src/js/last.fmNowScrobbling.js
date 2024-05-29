let reposData;

function fetchRepos() {
    return fetch('https://api.github.com/users/invranet/repos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            reposData = data;
            displayRepos();
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
}

function displayRepos() {
    const reposContainer = document.getElementById('repos-container');
    reposContainer.innerHTML = ''; // Clear previous data
    reposData.forEach(repo => {
        const repoElem = document.createElement('div');
        repoElem.innerHTML = `
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p>${repo.description}</p>
            <p>Language: ${repo.language}</p>
            <p>Stars: ${repo.stargazers_count}</p>
        `;
        reposContainer.appendChild(repoElem);
    });
}

// Fetch and display repositories initially
fetchRepos();

// Fetch and display repositories every 5 seconds
setInterval(fetchRepos, 5000);