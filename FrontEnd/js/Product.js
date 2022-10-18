var url = 'http://localhost:3000/products';

fetch(url,{
    method:"GET" 
})
.then(function(rs){
    return rs.json();
})
.then(function (data){
    content = ''
    for (x of data) {
        content += `<div class="col">
                    <div class="card h-90 shadow-sm"> <a href="infoproduct.html/?id=${x.id}"><img src="${x.image}" class="card-img-top" alt="..."></a>
                        <div class="card-body">
                            <h3 class="card-title">${x.name}</h3>
                            <h6 class="text-decoration-line-through">Giá: ${Intl.NumberFormat().format(x.price_before)}VND</h6>
                            <h5 class="card-title">Giá:  ${Intl.NumberFormat().format(x.price_after)}VND</h5>
                            <div class="text-center my-1"> <a href="infoproduct.html?id=${x.id}" class="btn btn-danger">Xem chi tiết</a> </div>
                        </div> 
                    </div>
                </div>`
    }
    document.querySelector("#left-main").innerHTML = content

})