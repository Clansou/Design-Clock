import { getDate } from "./date.js";
import {DrawNumber} from './numbers/drawNumber.js'
const canvas = document.getElementsByClassName("canvas");
let previousTime = null;


function resizeCanvas() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < canvas.length; i++) {
        canvas[i].width = windowWidth/6;
        canvas[i].height = canvas[i].width;
    }
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

function checkDateChange(){
    let currentTime = getDate();
    if(currentTime != previousTime){
        for (let i = 0; i < canvas.length; i++) {
            let canva = canvas[i];
            
            const ctx = canva.getContext("2d"); 
            
            DrawNumber(ctx,canva,currentTime[i]);
        }
        previousTime = currentTime;
    }
}


setInterval(checkDateChange, 1000);





