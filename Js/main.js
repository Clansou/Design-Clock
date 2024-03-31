import { getDate } from "./date.js";
import {DrawNumber} from './numbers/drawNumber.js'

let date = getDate();

const canvas = document.getElementsByClassName("canvas");
console.log(canvas);
for (let i = 0; i < canvas.length; i++) {
    let canva = canvas[i];
    
    const ctx = canva.getContext("2d"); 
    
    DrawNumber(ctx,canva,date[i]);
}
   






// DrawFour, DrawFive, DrawSix, DrawSeven, DrawEight, DrawNine