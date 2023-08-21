const parentDiv = document.getElementById('parent');

axios
.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
.then((responce) => {
    const photos = responce.data;
    console.log(photos);

    photos.map((photo) => {
        parentDiv.innerHTML += 
        `<img src='${photo.url}'>`
    })

})