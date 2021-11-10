let count = 0;
let delaySec = 5;

function changeImage() {
    
    let img = document.getElementById('slide');
    const images = [
        "img/carousel/image1.jpg", "img/carousel/image2.jpg", "img/carousel/image3.jpg"
    ]
    console.log(images.length);

        if (count === undefined || count === images.length -1) {
            count = 0;
        } else {
            count+= 1;
        }
    
    img.setAttribute('src', images[count]);
    console.log(images[count]);

}

window.addEventListener('load', () => {
    window.setInterval(changeImage, delaySec * 1000);
});

// document.getElementsByClassName('carouselImg').addEventListener('click', changeImage);

// changeImage();

// document.getElementsByClassName('carouselImg').addEventListener('click', () => {
//     document.getElementsById('slide1').setAttribute('src', "/img/carousel/image3.jpg");
// });

