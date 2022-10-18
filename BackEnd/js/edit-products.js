var id = document.location.search;
id_product = id.substring(4);
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
        content += `<section class="get-in-touch">
            <h1 class="title">SỬA SẢN PHẨM</h1>
            <form class="contact-form row">
               <div class="form-field col-lg-6">
                  <input class="input-text js-input" type="text" required id="name" value="${x.name}">
                  <label class="label" for="name">TÊN SẢN PHẨM</label>
               </div>
               <div class="form-field col-lg-6">
                  <input class="input-text js-input" type="text" required id="price_before" value="${x.price_before}">
                  <label class="label" for="company">GIÁ CŨ</label>
               </div>
                <div class="form-field col-lg-6">
                  <input class="input-text js-input" type="text" required id="price_after" value="${x.price_after}"> 
                  <label class="label" for="phone">GIÁ MỚI</label>
               </div>
               <div class="form-field col-lg-6">
                   <select class="input-text js-input" id="id_sector"></select>
                    <label class="label" for="phone">LOẠI HÀNG</label>
                </div>
                <div class="form-field col-lg-12">
                    <textarea class="input-text js-input" rows="4" cols="50" type="text" required id="des">${x.des}</textarea>
                    <label class="label" for="phone">MÔ TẢ</label>
                </div>
                <div class="form-field col-lg-6">
                    <div class="file-field">
                      <div class="btn btn-danger btn-sm float-left">
                        <span>TẢI ẢNH</span>
                        <input type="file" id="file_img" class="input-text js-input" onchange="imgFile()">
                        <img src="" id="img" alt="img empty..." width="100px" height="100px">
                        <input type="hidden" id="img_value" value="">
                      </div>
                    </div>
                </div>
                <div class="form-field col-lg-6">
                    <img src="${x.image}" id="img_before" alt="" width="300px" height="300px">
                </div>
               <div class="form-field col-lg-12">
                  <button class="submit-btn" type="button" onclick="edit(this,${x.id})">SỬA</button>
               </div>
            </form>
         </section>`
    }
    document.querySelector(".main").innerHTML = content
    var url = 'http://localhost:3000/sectors';
    fetch(url, {method: 'GET'})
    .then(function(response) {return response.json();})
    .then(function(data) {
        content = ''
        for (x of data) {
            content += `<option value="${x.id}">${x.name}</option>`;
        }
        document.querySelector("#id_sector").innerHTML = content
    });
}); 
function imgFile() {
    var file = document.getElementById('file_img').files[0];
    var img = document.getElementById('img');
    var img_value = document.getElementById('img_value');
    var reader = new FileReader();
    reader.addEventListener('load', function () {
        img.src = reader.result;
        img_value.value = reader.result;
    },false);
    if (file) {
        reader.readAsDataURL(file);
    }
}
function edit(element,id_product){
    var name_product = document.getElementById('name');
    var price_before_product = document.getElementById('price_before');
    var price_after_product = document.getElementById('price_after');
    var id_sector = document.getElementById('id_sector');
    var des_product = document.getElementById('des');
    var img_after = document.getElementById('img').getAttribute('src');
    var img_value = document.getElementById('img_value');
    if (img_value.value == "") {
        var img = document.getElementById('img_before').getAttribute('src');
    }else{
        var img = img_after;
    }
    otp = {
        url: 'http://localhost:3000/products/' + id_product,
        method: 'put',
        data: {
            sectorId: id_sector.value,
            name :name_product.value,
            price_before: Number(price_before_product.value),
            price_after : Number(price_after_product.value),
            des : des_product.value,
            image: img,
        }
    }
    axios(otp);
    window.location.href = "products-admin.html";
}