import "./index.scss"

import { trnsleit, human } from "./lib.js";

console.log(trnsleit("андрей"));


// document.addEventListener("mousemove", function(ev){
//     console.log(`Movement X: ${ev.movementX}, Y: ${ev.movementY}`);
// }, false);


var totalX = 0;
var totalY = 0;
var moveX = 0;
var moveY = 0;

document.addEventListener("mousemove", function(ev){
    totalX += Math.abs(ev.movementX);
    totalY += Math.abs(ev.movementY);
    moveX += ev.movementX;
    moveY += ev.movementY;
}, false);

setInterval(function(){
    console.log(`Speed X: ${totalX}px/s, Y: ${totalY}px/s`);
    console.log(`Movement X: ${moveX}px/s, Y: ${moveY}px/s`);
    moveX = moveY = totalX = totalY = 0;
}, 1000);




