import { getDate } from "./date.js";
import { DrawZero, DrawOne, DrawTwo, DrawThree,DrawFour,DrawFive,DrawSix,DrawSeven,DrawEight,DrawNine } from './numbers/numbers.js';

const canvas = document.getElementsByClassName("canvas");
console.log(canvas);
for (let i = 0; i < canvas.length; i++) {
    let canva = canvas[i];
    const ctx = canva.getContext("2d");
    DrawNine(ctx, canva.width, canva.height);
}
   



let date = getDate();


// DrawFour, DrawFive, DrawSix, DrawSeven, DrawEight, DrawNine