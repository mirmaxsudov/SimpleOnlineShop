axios
    .get(`https://restcountries.com/v3.1/all`)
    .then((res) => {

        console.log(res);
        
        res.data.map((da, index) => {
            const currencies = Object.values(da.currencies)[0]
            document.querySelector('tbody').innerHTML += 
            `
            <tr>
                <td>${index + 1}</td>
                <td>${da.name.common}</td>
                <td>${da.population}</td>
                <td>${currencies.name}</td>
                <td>
                    <img src="${da.flags.png}" alt="">
                </td>
            </tr>`
        })

    })
    .catch(() => { });