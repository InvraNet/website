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
    reposContainer.innerHTML = '';
    const reposList = document.createElement('div');
    reposData.forEach(repo => {
        const repoDescription = repo.description ? repo.description : "No description given";
        const language = repo.language ? repo.language.toLowerCase() : "unknown";
        const repoElem = document.createElement('div');
        repoElem.id = "projectElem";
        repoElem.innerHTML = `
            <div>
                <a href="${repo.html_url}" target="_blank" class="repoLink">${repo.name}</a>
                <p>${repoDescription}</p>
                <div>
                    <span>Language: ${language}</span>
                    <span>Stars: ${repo.stargazers_count}</span>
                </div>
            </div>
        `;
        reposList.appendChild(repoElem);
    });
    reposContainer.appendChild(reposList);
}
fetchRepos();