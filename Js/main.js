import { getDate } from "./date.js";
import { DrawZero, DrawOne, DrawTwo, DrawThree, DrawFour, DrawFive, DrawSix, DrawSeven, DrawEight, DrawNine } from './numbers/numbers.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

getDate();
DrawTwo(ctx, canvas.width, canvas.height);