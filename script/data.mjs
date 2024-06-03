const catImages = [];
let currentImageIndex = -1;

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
    const img = document.createElement("img");
    img.src = catImages[currentImageIndex];
}
export {getNewPhoto, catImages, currentImageIndex, displayImage}