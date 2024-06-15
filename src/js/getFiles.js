let fileData;

function fetchFiles() {
    return fetch('https://api.cdndwnld.invra.net/v2/pub')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            fileData = data;
            displayDownloads(fileData.children);
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
}

function displayDownloads(children, currentPath = "") {
    const fileContainer = document.getElementById('file-container');
    fileContainer.innerHTML = '';
    const fileList = document.createElement('div');
    if (currentPath && currentPath !== "/") {
        const upLevelElem = document.createElement('div');
        upLevelElem.classList.add('cursor-pointer', 'include-block', 'bg-gray-800', 'rounded-lg', 'p-4', 'shadow-lg', 'mb-3', 'hover::last:text-underline');
        upLevelElem.addEventListener("click", function() {
            const parentPath = currentPath.split('/').slice(0, -1).join('/');
            fetchFiles(parentPath);
        });
        upLevelElem.innerHTML = `
            <div class="group">
                <div class="flex justify-between items-center">
                    <p id="name" class="font-semibold text-lg text-primary-500">parent.dir</p>
                    <span class="text-gray-500"></span>
                </div>
            </div>
        `;
        fileList.appendChild(upLevelElem);
    }
    
    children.forEach(item => {
        const itemElem = document.createElement('div');
        if (item.type === 'file') {
            let fileLocation = `https://cdndwnld.invra.net/pub/${item.html_pathex}`;
            if (item.internal === false && item.html_exturl) {
                fileLocation = item.html_exturl;
            }
            itemElem.classList.add('cursor-pointer', 'include-block', 'bg-gray-800', 'rounded-lg', 'p-4', 'shadow-lg', 'mb-3', 'hover::last:text-underline');
            itemElem.addEventListener("click", function() {
                window.location.href = fileLocation;
            });
            itemElem.innerHTML = `
                <div class="group">
                    <div class="flex justify-between items-center">
                        <p id="name" class="font-semibold text-lg text-primary-500">${item.name}</p>
                        <span class="text-gray-500">Size: ${item.size}</span>
                    </div>
                </div>
            `;
        } else if (item.type === 'directory') {
            itemElem.classList.add('cursor-pointer', 'include-block', 'bg-gray-800', 'rounded-lg', 'p-4', 'shadow-lg', 'mb-3', 'hover::last:text-underline');
            itemElem.addEventListener("click", function() {
                displayDownloads(item.children, currentPath !== "" ? `${currentPath}/${item.name}` : item.name);
            });
            itemElem.innerHTML = `
                <div class="group">
                    <div class="flex justify-between items-center">
                        <p id="name" class="font-semibold text-lg text-primary-500">${item.name}</p>
                        <span class="text-gray-500">-</span>
                    </div>
                </div>
            `;
        }
        fileList.appendChild(itemElem);
    });
    
    fileContainer.appendChild(fileList);
}

fetchFiles("");
window.alert("We're changing the proxy over to on server demand. We will be back soon");