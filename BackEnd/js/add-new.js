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
function add_new() {
    var name_new = document.getElementById('name_new');
    var date_new = document.getElementById('date_new');
    var img = document.getElementById('img').getAttribute('src');
    opt = {
        url:'http://localhost:3000/news',
        method:'POST',
        data: {
            name :name_new.value,
            date : date_new.value,
            image: img,
        }
    }
    axios(opt);

}