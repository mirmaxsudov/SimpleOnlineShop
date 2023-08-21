document.getElementById('btn').addEventListener('click', () => {
    axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            const res = document.getElementById('dog-img');
            console.log(response);
            res.innerHTML = `<img src='${response.data.message}'>`
        })
})