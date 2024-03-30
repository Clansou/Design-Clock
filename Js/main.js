import { getDate } from "./date.js";
import { DrawOne } from "./numbers/numbers.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

getDate();
DrawOne(ctx, canvas.width, canvas.height);