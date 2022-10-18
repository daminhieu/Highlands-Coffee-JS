var url = 'http://localhost:3000/news';
fetch(url, {method: 'GET'})
.then(function(response) {return response.json()})
.then(function(data) {
    content = ''
    for (x of data) {
        content += `<tr>
                        <td>${x.id}</td>
                        <td>${x.name}</td>
                        <td>${x.date}</td>
                        <td><img src="${x.image}" alt="" width="50px" height="50px"></td>
                        <td>
                            <a href="" class="btn btn-primary">SỬA</a>
                            <button class="btn btn-danger">XÓA</button>
                        </td>
                    </tr>`
    }
    document.querySelector(".tbody2").innerHTML = content
})