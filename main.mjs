// const btn = document.getElementById(`btn`);
// btn.addEventListener(`click`, getNewPhoto);
// console.log(btn);

// async function getNewPhoto() {
//     const result = await fetch("https://api.thecatapi.com/v1/images/search");
//     const data = await result.json()
//     const img = document.createElement(`img`);
//     img.src = data[0].url;
//     img.height = data[0].height;
//     img.width = data[0].width
//     document.querySelector(`body`).appendChild(img)
//     console.log(data);
// }

// getNewPhoto();

// Create a Promise that resolves after one second.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Guess this worked!");
    }, 1000);
});

// Add some then() methods to handle additional tasks.
// myPromise
//     .then((x) =>console.log( x + ' Again?'))
//     .then((x) => console.log(x + ' Third time!'))
//     .then((x) => console.log(x + ' Promises are cool.'))
//     .catch((err) => {
//         console.error(err);
//     })
// console.log(myPromise);

const thenable = {
    then: function(onFulfilled) {
        setTimeout(() => onFulfilled("Hey"), 100);
    }
};

const p = Promise.resolve(thenable)

p.then( val => console.log(val));
