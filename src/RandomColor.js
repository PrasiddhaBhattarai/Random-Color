// Spread syntax (...)
// "Spread syntax allows an iterable (...) to be expanded"

// to make collection act as array
// can use Array.from also
let boxes = [...document.body.firstElementChild.children];

// function to return rgb(n1,n2,n3) values
// return n1, n2, n3 as array
// function getRGB(){
//     //as RGB values are from 0 to 255
//     let max = 255;
//     let r = Math.floor(Math.random()*max);
//     let g = Math.floor(Math.random()*max);
//     let b = Math.floor(Math.random()*max);

//     return [r, g, b];
// }

//instead return the template literals
function getRGB() {
  //as RGB values are from 0 to 255
  let max = 255;
  let r = Math.floor(Math.random() * max);
  let g = Math.floor(Math.random() * max);
  let b = Math.floor(Math.random() * max);

  return `rgb(${r}, ${g}, ${b})`;
}

// document.body.onload = () => {let timerId = setInterval(randColor, 1000000)};

let timerId = null;
let timerId2 = null;

// to initially start random color generation
setTimeout(() => {
  startColorGeneration();
  button.classList.toggle("hidden");
}, 0);

function startColorGeneration() {
  timerId = setInterval(randColor, 300);
  timerId2 = setInterval(() => {
    document.body.style.backgroundColor = getRGB();
  }, 1000);
  // to create delay in button load
  button.classList.toggle("hidden");
  setTimeout(() => {
    button.classList.toggle("hidden");
    button.textContent = "Stop";
  }, 300);
}

function stopColorGeneration() {
  clearInterval(timerId);
  clearInterval(timerId2);
  // timerId will stil hold old interval Id
  // so we reset it to null
  timerId = null;
  timerId2 = null
  button.classList.toggle("hidden");
  setTimeout(() => {
    button.classList.toggle("hidden");
    button.textContent = "Start";
  }, 100);
}

function randColor() {
  boxes.forEach((elem) => {
    let rgbVal_1 = getRGB();
    let rgbVal_2 = getRGB();
    elem.style.color = rgbVal_1;
    elem.style.backgroundColor = rgbVal_2;
  });
}

let button = document.querySelector(".stop");

// if timerId has interval Id means it is storing color, so stop color generation
// if timerId is null, no color, so start color generation
button.addEventListener("click", (() => {
  if (timerId) {
    stopColorGeneration();
  } else {
    startColorGeneration();
  }
}))



// old logic below
// using two button


// let buttonStop = document.querySelector(".stop");
// let buttonStart = document.querySelector(".start");

// buttonStop.addEventListener("click", (() => {
//   clearInterval(timerId);
//   buttonStop.classList.toggle("hidden");
//   setTimeout(() => {
//     buttonStart.classList.toggle("hidden");
//   }, 200);
// }));


// buttonStart.addEventListener("click", (() => {
//   buttonStart.classList.toggle("hidden");
//   setTimeout(() => {
//     location.reload();
//   }, 200);
// }));