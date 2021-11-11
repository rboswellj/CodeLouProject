let count = 0;
let delaySec = 10;
let img = document.getElementById('slide');
const fadeIn = () => {img.classList.add('in'); img.classList.remove('out');}
const fadeOut= () => {img.classList.remove('in'); img.classList.add('out')}

function changeImage() {
    img.classList.toggle('out');
    
    const images = [
        "img/carousel/image1.jpg", "img/carousel/image2.jpg", "img/carousel/image3.jpg"
    ]

    fadeIn();
    console.log(images.length);

        if (count === undefined || count === images.length -1) {
            count = 0;
        } else {
            count+= 1;
        }
    
    img.setAttribute('src', images[count]);
    console.log(images[count]);
    img.classList.toggle('in');
    setTimeout(fadeOut, 9000);

}

changeImage();
window.addEventListener('load', () => {
    window.setInterval(changeImage, delaySec * 1000);
});

// document.getElementsByClassName('carouselImg').addEventListener('click', changeImage);

// changeImage();

// document.getElementsByClassName('carouselImg').addEventListener('click', () => {
//     document.getElementsById('slide1').setAttribute('src', "/img/carousel/image3.jpg");
// });

