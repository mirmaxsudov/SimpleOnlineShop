axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((responce) => {
        console.log(responce);

        let body = document.getElementById('body');

        responce.data.map(element => {
            body.innerHTML +=
                `<tr>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.phone}</td>
                <td>${element.address.city}</td>
            </tr>`
        })
    })
    .catch(() => {
        console.log(404);
    });