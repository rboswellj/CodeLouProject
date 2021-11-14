let count = 0;
let delaySec = 7;
let img = document.getElementById('slide');
const images = [
    "img/carousel/image1.jpg", 
    "img/carousel/image2.jpg", 
    "img/carousel/image3.jpg"
]
const fadeIn = () => {img.classList.add('in'); img.classList.remove('out');}
const fadeOut= () => {img.classList.remove('in'); img.classList.add('out')}

function changeImage() {
    fadeIn();
    console.log(images.length);

        if (count === undefined || count === images.length -1) {
            count = 0;
        } else {
            count+= 1;
        }

    img.setAttribute('src', images[count]);
    console.log(images[count]);
    setTimeout(fadeOut, 6200);
}

changeImage();
window.addEventListener('load', () => {
    window.setInterval(changeImage, delaySec * 1000); 
});
