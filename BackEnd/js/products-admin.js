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
                        <td>
                            <a href="edit-product.html?id=${x.id}" class="btn btn-primary">SỬA</a>
                            <button class="btn btn-danger" onclick="delete_product(this,${x.id})">XÓA</button>
                        </td>
                    </tr>`
    }
    document.querySelector("#product").innerHTML = content
})
function delete_product(element,id_product) {
    var http = new XMLHttpRequest();
    http.open('DELETE','http://localhost:3000/products/'+id_product,true);
    http.send();
}