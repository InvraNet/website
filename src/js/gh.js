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
        repoElem.classList.add('inclune-block', 'bg-gray-800', 'rounded-lg', 'p-4', 'shadow-lg', 'mb-3');
        repoElem.innerHTML = `
            <div>
                <a href="${repo.html_url}" class="font-semibold text-lg text-primary-500 hover:underline" target="_blank">${repo.name}</a>
                <p class="text-gray-400">${repoDescription}</p>
                <div class="flex justify-between items-center mt-2">
                    <span class="text-gray-500 flex items-center">Language: ${language}</span>
                    <span class="text-gray-500">Stars: ${repo.stargazers_count}</span>
                </div>
            </div>
        `;
        reposList.appendChild(repoElem);
    });
    reposContainer.appendChild(reposList);
}
fetchRepos();