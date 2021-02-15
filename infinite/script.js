
const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')
const count = 30;
let totalImages = 0;
let imagesLoaded = 0;
let readyImages = false;
let photosArray=[]
const YOUR_ACCESS_KEY = 'NqEZsPC_c7vK2Ok8Y6oZROATal9jqp-AZ0tP4E6n1Qs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${YOUR_ACCESS_KEY}&count=${count}`;

function loadImage() {
    loader.hidden = false;
    imageContainer.hidden = true;
}
function complete() {
    loader.hidden = true;
    imageContainer.hidden = false;
}
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        readyImages = true;
        
    }
}
function displayPhotos() {
    complete();
       imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach(element => {
        imageLoaded();
        const item = document.createElement('a')
        item.setAttribute('href', element.links.html)
        item.setAttribute('target', '_blank')
        const img = document.createElement('img')
        img.setAttribute('src', element.urls.regular);
        img.setAttribute('alt', element.alt_description)
        img.setAttribute('title', element.alt_description)
        // put <img/> in <a/>
        item.appendChild(img)
        imageContainer.appendChild(item)
    });
}

async function getPhotos(){
    try {
        loadImage();
        const response = await fetch(apiUrl)
        photosArray = await response.json()
       
        displayPhotos()
        console.log(photosArray)
    }
    catch (error) {
        console.log(error.message)
    }
}
window.addEventListener('scroll', () => {
    console.log('triggered')
    if ((window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000) && readyImages) {
        readyImages = false;
        console.log(imagesLoaded,totalImages,readyImages)
        getPhotos();
     
    }
})
getPhotos();
//  loadImage();