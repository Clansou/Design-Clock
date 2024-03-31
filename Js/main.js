import { getDate } from "./date.js";
import { DrawZero, DrawOne, DrawTwo, DrawThree,DrawFour,DrawFive,DrawSix,DrawSeven,DrawEight } from './numbers/numbers.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

getDate();
DrawEight(ctx, canvas.width, canvas.height);

// DrawFour, DrawFive, DrawSix, DrawSeven, DrawEight, DrawNine