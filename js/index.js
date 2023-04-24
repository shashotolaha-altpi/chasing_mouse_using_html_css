const maxWidth = window.innerWidth / 2 - 100;
const maxHeight = window.innerHeight / 2 - 100;
const body = document.querySelector('body');

// for checking x axis and y axis properties
// console.log(`Maximum width: ${maxWidth}`);
// console.log(`Maximum height: ${maxHeight}`);


function mousehover() {
  let icon = document.getElementById("icon");
  let out = document.getElementById("outter");

  //all the negative and positive values
  const minw = -maxWidth;
  const maxw = maxWidth;
  const minh = -maxHeight;
  const maxh = maxHeight ; 

  // random values for x axis and y axis properties
  const numx = Math.floor(((Math.random() * (maxw - minw + 1)) + minw));
  const numy = Math.floor(((Math.random() * (maxh - minh + 1)) + minh));

  // onhover translate effect
  out.style.transform = `translate(${numx}px,${numy}px)`;

  // to see the x axis value and y axis property
    // console.log("x ", numx);
    // console.log("y ", numy);
  //   console.log("hover");
}



// change the background image

function changebg1(){
  body.style.backgroundImage = ` url('../bg/bg.jpg')`;
}
function changebg2(){
  body.style.backgroundImage = ` url('../bg/bg2.jpg')`;
}
function changebg3(){
  body.style.backgroundImage = ` url('../bg/bg3.jpg')`;
}
