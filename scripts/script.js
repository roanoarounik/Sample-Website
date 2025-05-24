// Begin Scripts
// Hi my name is Rounik welcome to my website
console.log("Hi my name is Rounik welcome to my website");

var body = document.body;
body.children[0].children[1].style.color = 'white';

let yearElement = document.querySelector(`.yearElement`);
if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
}