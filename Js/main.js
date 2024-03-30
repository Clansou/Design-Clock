import { getDate } from "./date.js";
import { DrawNumber } from "./numbers/numbers.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

getDate();
DrawNumber(ctx);