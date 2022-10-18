var url = 'http://localhost:3000/products';
fetch(url, {method: 'GET'})
.then(function(response) {return response.json()})
.then(function(data) {
    content = ''
    for (x of data) {
        content += `<tr>
                        <td>${x.id}</td>
                        <td>${x.name}</td>
                        <td>${x.des}</td>
                        <td>${x.price_before}</td>
                        <td>${x.price_after}</td>
                        <td><img src="${x.image}" alt="" width="50px" height="50px"></td>
                    </tr>`
    }
    document.querySelector(".tbody").innerHTML = content
})