 var url = 'http://localhost:3000/sectors';
            fetch(url, {method: 'GET'})
            .then(function(response) {
                return response.json()
            }).then(function(data) {
                content = ''
                for (x of data) {
                    content += `<option value="${x.id}">${x.name}</option>`
                }
                console.log(content);
                document.querySelector("#id_sector").innerHTML = content
            })
            function imgFile() {
                var file = document.getElementById('file_img').files[0];
                var img = document.getElementById('img');
                var reader = new FileReader();
                reader.addEventListener('load', function () {
                    img.src = reader.result;
                },false);
                if (file) {
                    reader.readAsDataURL(file);
                }
            }
            function add_product() {
                var name_product = document.getElementById('name_product');
                var price_before_product = document.getElementById('price_before_product');
                var price_after_product = document.getElementById('price_after_product');
                var id_sector = document.getElementById('id_sector');
                var des_product = document.getElementById('des_product');
                var img = document.getElementById('img').getAttribute('src');
                opt = {
                    url:'http://localhost:3000/products',
                    method:'POST',
                    data: {
                        sectorId: id_sector.value,
                        name :name_product.value,
                        price_before: Number(price_before_product.value),
                        price_after : Number(price_after_product.value),
                        des : des_product.value,
                        image: img,
                    }
                }
                axios(opt);
                window.location.href = "products-admin.html";
            }