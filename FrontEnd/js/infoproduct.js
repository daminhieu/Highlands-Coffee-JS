const id = document.location.search;
var url = 'http://localhost:3000/products'+id;
    fetch(url,{
        method:"GET" 
    })
    .then(function(rs){
        return rs.json();
    })
    .then(function (data){
        content = ''
        for (x of data) {
            content += `<article class="product-card">
                    <section class="product-card-2">
                        <div class="product-card-content">
                            <div class="product-card-img">
                                    <a href=""><img src="${x.image}" alt=""></a>
                            </div>
                        </div>
                        <div class="profile-product-card">
                            <div class="check-out">
                                    <div class="name-product">
                                        <h1>${x.name}</h1>
                                    </div>
                                    <div class="product-card-text">
                                        <p>${x.des}</p>
                                    </div>
                                    <div class="price">
                                        <h4 class="text-decoration-line-through">Giá: ${x.price_before}VND</h4>
                                        <h3>Giá: ${x.price_after}VND</h3>
                                    </div>
                                    <div class="click-pay">
                                        <button onclick="order(${x.id})" class="btn btn-danger">ĐẶT MUA NGAY</button>
                                    </div>
                            </div>
                        </div>
                    </section>
                </article>`
        }
        document.querySelector(".main").innerHTML = content

    }); 
function order(id) {
    myCart = localStorage.getItem('myCart');
    if (myCart == null) {
        myCart = {};
    } else {
        myCart = JSON.parse(myCart);
    }
    if (myCart[id] != null) {
        myCart[id] = myCart[id]+1;
    } else {
        myCart[id] = 1;
    }
    localStorage.setItem('myCart', JSON.stringify(myCart)); 
}    