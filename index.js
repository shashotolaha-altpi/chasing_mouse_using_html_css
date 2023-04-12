const maxWidth = window.innerWidth / 2 - 100;
const maxHeight = window.innerHeight / 2 - 100;
// console.log(`Maximum width: ${maxWidth}`);
// console.log(`Maximum height: ${maxHeight}`);
function mousehover() {
  let icon = document.getElementById("icon");
  let out = document.getElementById("outter");

  //   const min = 1;
  //   const max = 14;
  const minw = -maxWidth;
  const maxw = maxWidth;
  const minh = -maxHeight;
  const maxh = maxHeight ;
  const numx = Math.floor(((Math.random() * (maxw - minw + 1)) + minw));
  const numy = Math.floor(((Math.random() * (maxh - minh + 1)) + minh));
  // icon.style.transform = `translate(${numx}px,${numy}px)` ;
  out.style.transform = `translate(${numx}px,${numy}px)`;
    // console.log("x ", numx);
    // console.log("y ", numy);
  //   console.log("hover");
}


