// import {getNewPhoto, catImages, currentImageIndex, displayImage} from "./data.mjs";

const yesBtn = document.getElementById(`yes`);
const imgDiv = document.getElementById(`image`)


yesBtn.addEventListener(`change`, showPhoto);

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
    

}
const preBtn = document.getElementById(`preBtn`);
const nextBtn = document.getElementById("nextBtn");
const catImages = [];
let currentImageIndex = -1;
preBtn.addEventListener(`click`, showPhoto);
nextBtn.addEventListener(`click`,showPhoto);

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


