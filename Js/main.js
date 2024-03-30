import { getDate } from "./date.js";
import { DrawZero, DrawOne, DrawTwo, DrawThree,DrawFour } from './numbers/numbers.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

getDate();
DrawFour(ctx, canvas.width, canvas.height);

// DrawFour, DrawFive, DrawSix, DrawSeven, DrawEight, DrawNine