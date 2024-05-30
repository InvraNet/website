let fileData;

function fetchFiles() {
    return fetch('https://invra.net/api/downloadmap.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            fileData = data;
            displayDownloads();
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
}

function displayDownloads() {
    const fileContainer = document.getElementById('file-container');
    fileContainer.innerHTML = '';
    const fileList = document.createElement('div');
    fileData.forEach(file => {
        const fileElem = document.createElement('div');
        const fileLocation = `http://cdndwnld.invra.net/${file.location}`;
        fileElem.classList.add('include-block', 'bg-gray-800', 'rounded-lg', 'p-4', 'shadow-lg', 'mb-3');
        fileElem.innerHTML = `
            <div>
                <div class="flex justify-between items-center">
                    <a href="${fileLocation}" class="font-semibold text-lg text-primary-500 hover:underline" target="_blank">${file.name}</a>
                    <span class="text-gray-500">Size: ${file.size}</span>
                </div>
            </div>
        `;
        fileList.appendChild(fileElem);
    });
    fileContainer.appendChild(fileList);
}

fetchFiles();
