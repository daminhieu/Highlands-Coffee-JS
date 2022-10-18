function showCart() {
    myCart = localStorage.getItem('myCart');
    if (myCart == null) {
        document.querySelector('.container').innerHTML = '<img style="margin: 8px 0 9px 400px;"  src="/Assignment/FrontEnd/img/empty-cart-2.png" />'
        return;
    }
    myCart = JSON.parse(myCart);
    chuoi = '';
    for (x of Object.keys(myCart)) {
        if (chuoi.length > 0) 
            chuoi += '&'
            chuoi += 'id=' + x
    }
    _url = 'http://localhost:3000/products?'+chuoi;
    axios.get(_url)
    .then(function(data_res) {
        str_row = ``;
        tong_tien = 0;
        tong_tien_all = 0;
        document.querySelector('.container').innerHTML = `<div class="row">
                                                            <div class="col-12">
                                                                <div class="table-responsive">
                                                                    <table class="table table-striped">
                                                                        <thead class="thead"></thead>
                                                                        <tbody class="tbody"></tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div class="col mb-2">
                                                                <div class="row">
                                                                    <div class="col-sm-12  col-md-6">
                                                                        <a href="products.html" class="btn btn-block btn-secondary">Quay lại</a>
                                                                    </div>
                                                                    <div class="col-sm-12 col-md-6 text-right">
                                                                        <button class="btn btn-lg btn-block btn-danger text-uppercase">Thanh toán</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>`
        document.querySelector('.thead').innerHTML = `<tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">SẢN PHẨM</th>
                                                        <th scope="col">GIÁ CŨ</th>
                                                        <th scope="col" class="text-center">SỐ LƯỢNG</th>
                                                        <th scope="col" class="text-right">GIÁ HIỆN TẠI</th>
                                                        <th><button class="btn btn-danger" onclick="remove_all()">XÓA HẾT GIỎ HÀNG</button></th>
                                                    </tr>`
        for (x of data_res.data) {
            so_luong = myCart[x.id];
            tien_sp = so_luong * x.price_after;
            tong_tien += tien_sp;
            tong_tien_all += tong_tien;
            str_row +=  `<tr>
                            <td><img id="images" src="${x.image}" /> </td>
                            <td>${x.name}</td>
                            <td class="text-decoration-line-through">${Intl.NumberFormat().format(x.price_before)}VND</td>
                            <td><input class="form-control" type="text" value="${so_luong}" /></td>
                            <td class="text-right">${Intl.NumberFormat().format(x.price_after)}VND</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger" onclick="remove(${x.id})"><i class="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Tổng tiền sản phẩm</td>
                            <td class="text-right">${Intl.NumberFormat().format(tong_tien)}VND</td>
                        </tr>`
        }
         document.querySelector('.tbody').innerHTML = str_row += `<tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>Chọn nơi vận chuyển</td>
                                                                    <td class="text-right">
                                                                        <select class="form-select" aria-label="Default select example">
                                                                            <option selected>Mời bạn chọn hình thức vận chuyển</option>
                                                                            <option value="1">Nội Thành</option>
                                                                            <option value="2">Ngoại Thành</option>
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>Phí vận chuyển</td>
                                                                    <td class="text-right">30.000VND</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td><strong>Tổng tiền giỏ hàng</strong></td>
                                                                    <td class="text-right"><strong>${Intl.NumberFormat().format(tong_tien_all)}VND</strong></td>
                                                                </tr>`
    })
}
showCart()
function remove_all() {
    localStorage.removeItem("myCart");
    location.reload();
}
function remove(id) {
    myCart = localStorage.getItem('myCart');
    cart = JSON.parse(myCart)
    delete cart[id]
    localStorage.removeItem("myCart");
    localStorage.setItem('myCart', JSON.stringify(cart)); 
    location.reload();
}