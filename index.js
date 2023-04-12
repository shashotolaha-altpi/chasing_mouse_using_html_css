const maxWidth = window.innerWidth - 100;
const maxHeight = window.innerHeight - 100;
console.log(`Maximum width: ${maxWidth}`);
console.log(`Maximum height: ${maxHeight}`);
function mousehover() {
  let icon = document.getElementById("icon");

  //   const min = 1;
  //   const max = 14;
  const min = 100;
  const maxw = maxWidth;
  const maxh = maxHeight ;
  const numx = Math.floor(((Math.random() * (maxw - min + 1)) + min));
  const numy = Math.floor(((Math.random() * (maxh - min + 1)) + min));
  icon.style.transform = `translate(${numx}px,${numy}px)`   ;
    console.log("x ", numx);
    console.log("y ", numy);
  //   console.log("hover");
}


