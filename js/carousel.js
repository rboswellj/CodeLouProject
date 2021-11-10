
function changeImage() {
    let delaySec = 2;
    let count;
    let img = document.getElementsById('slide1');

    const images = [
        "/img/carousel/image1.jpg",
        "/img/carousel/image2.jpg",
        "/img/carousel/image3.jpg"
    ]

        if (count === undefined || count === images.length) {
            count = 0;
        } else {
            count++;
        }
    
    img.setAttribute('src', images[count]);

}

// window.addEventListener('load', () => {
//     window.setInterval(changeImage, delaySec * 1000);
// });
// document.getElementsByClassName('carouselImg').addEventListener('click', changeImage);
changeImage();

// document.getElementsByClassName('carouselImg').addEventListener('click', () => {
//     document.getElementsById('slide1').setAttribute('src', "/img/carousel/image3.jpg");
// });

