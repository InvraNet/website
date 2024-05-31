let fileData;

function fetchFiles() {
    return fetch('https://corsproxy.io/?https%3A%2F%2Fservice.api.cdndwnld.invra.net/pub')
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
        const fileLocation = `https://cdndwnld.invra.net/${file.location}`;
        fileElem.classList.add('cursor-pointer', 'include-block', 'bg-gray-800', 'rounded-lg', 'p-4', 'shadow-lg', 'mb-3', 'hover::last:text-underline');
        fileElem.addEventListener("click", function() {
            window.location.href = fileLocation;
        });
        fileElem.innerHTML = `
            <div class="group">
                <div class="flex justify-between items-center">
                    <p id="name" class="font-semibold text-lg text-primary-500">${file.name}</p>
                    <span class="text-gray-500">Size: ${file.size}</span>
                </div>
            </div>
        `;
        fileList.appendChild(fileElem);
    });
    fileContainer.appendChild(fileList);
}

fetchFiles();
