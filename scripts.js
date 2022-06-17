const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const imageContainer = document.getElementById('content-container');

let photosArray = [];

const count = 1;
const apiKey = '0pJsGzy6XnFXrnT9JV75k98ppLBETQJJG0uQuzTkTug';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
photosArray.forEach((photo) => {
const item = document.createElement('a');
item.setAttribute('href', photo.links.html);
item.setAttribute('target', '_blank');
const img = document.createElement('img');
img.setAttribute('src', photo.urls.regular);
img.setAttribute('alt', photo.alt_description);
img.setAttribute('title', photo.alt_description);
item.appendChild(img);
imageContainer.appendChild(item);

    });
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();

    }  catch (error) {

    }
}
getPhotos();

