let slider = document.querySelector('#slider');
let imageTable = [
    "img/hans-isaacson-ybgT0ZcQVvA-unsplash.jpg",
    "img/ivan-rudoy-cJjkxNyCnPE-unsplash.jpg",
    "img/matthew-smith-Rfflri94rs8-unsplash.jpg",
];
bullet1 = document.getElementById('one');
bullet2 = document.getElementById('two');
bullet3 = document.getElementById('three');
let imgIndex = 0;


slider.style.backgroundImage = `url('` + imageTable[imgIndex] + `')`;


let nextBtn = document.getElementById('after');
let beforeBtn = document.getElementById('before');

function sliderFunction(){
    imgIndex++;
    if(imageTable[imgIndex] == null){
        imgIndex = 0;
    }
    slider.style.backgroundImage = `url('` + imageTable[imgIndex] + `')`;


    switch(imgIndex){
        case 0:
            bullet1.className = "fas fa-circle";
            bullet2.className = "far fa-circle";
            bullet3.className = "far fa-circle";
            break;
        case 1:
            bullet1.className = "far fa-circle";
            bullet2.className = "fas fa-circle";
            bullet3.className = "far fa-circle";
            break;
        case 2:
            bullet1.className = "far fa-circle";
            bullet2.className = "far fa-circle";
            bullet3.className = "fas fa-circle";
            break;
        default:
    }

    return
}

nextBtn.addEventListener("click", sliderFunction);
setInterval(sliderFunction, 1000 * 5);