console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//program state
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "rBom5ZYJw993NdwS34Ain3f5Zl0z5gff";

//select elements
let searchBtn = document.getElementById("submitSearch");
let searchInput = document.getElementById("searchWord");
let feedbackEle = document.getElementById("feedback");
let gifEle = document.querySelector("#imageContainer > img");

//event handlers
searchBtn.addEventListener("click", (event) => {
    event.preventDefault();

    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => {
        return res.json()
    })
    .then((body) => {
     //show the gif on the dom
        gifEle.src = body.data.images.original.url;
    })
    .catch((err) => {
    console.error(err)
    //show the error message
    feedbackEle.textContent = err.message;
    })
    .finally(() => {
        searchInput.value = "";
    })
    .finally(() => {
        feedbackEle.textContent = "";
    });
}); 