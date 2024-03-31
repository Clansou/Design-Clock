import { getDate } from "./date.js";
import {DrawNumber} from './numbers/drawNumber.js'
const canvas = document.getElementsByClassName("canvas");
let previousTime = null;
function checkDateChange(){
    let currentTime = getDate();
    if(currentTime != previousTime){
        for (let i = 0; i < canvas.length; i++) {
            let canva = canvas[i];
            
            const ctx = canva.getContext("2d"); 
            
            DrawNumber(ctx,canva,currentTime[i]);
        }
    }
}


   

setInterval(checkDateChange, 1000);






// DrawFour, DrawFive, DrawSix, DrawSeven, DrawEight, DrawNine