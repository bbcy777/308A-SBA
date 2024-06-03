// import {getNewPhoto, catImages, currentImageIndex, displayImage} from "./data.mjs";

const yesBtn = document.getElementById(`yes`);
const noBtn = document.getElementById(`no`);
const imgDiv = document.getElementById(`image`)
const preBtn = document.getElementById(`preBtn`);
const nextBtn = document.getElementById("nextBtn");
const catImages = [];
let currentImageIndex = -1;

yesBtn.addEventListener(`change`, showPhoto);
noBtn.addEventListener(`change`, () => {
    imgDiv.style.display = `none`;
    clearRadio();
})

function showPhoto() {
    if(this.checked) {
        imgDiv.style.display = `block`;
        if (currentImageIndex = -1) {
            getNewPhoto().then(() => {
                currentImageIndex = 0;
                displayImage();
            });
        }else {
            imgDiv.style.display = `none`;
        }
    }
    clearRadio();
}

preBtn.addEventListener(`click`, ()=> {
    currentImageIndex = (currentImageIndex - 1 + catImages.length) % catImages.length;
    displayImage();
});
nextBtn.addEventListener(`click`,() => {
    console.log(currentImageIndex);
    if (currentImageIndex == catImages.length - 1) {
        getNewPhoto()
            .then(()=>{
                currentImageIndex++;
                displayImage();
            });
    } else {
        currentImageIndex ++;
        displayImage();
    }
});

async function getNewPhoto() {

    const result = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await result.json()
    catImages.push(data[0].url);
    return data[0].url;

    // const img = document.createElement(`img`);
    // img.src = data[0].url;
    // img.height = data[0].height;
    // img.width = data[0].width
    
    // console.log(data);
}

function displayImage() {
    const img = document.getElementById("catImg");
    img.src = catImages[currentImageIndex];
}

function clearRadio() {
    const radioBtns = document.querySelectorAll(`input`);
    radioBtns.forEach((radio) => {
        radio.checked = false;
    })
}