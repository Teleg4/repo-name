
    var i=0;
    var image=document.getElementById("image");
    // Добавьте свои картинки в массив через запятую
    var imgs=new Array('img/bilet1.jpg', 'img/bilet2.jpg','img/bilet3.jpg');
    function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
}
