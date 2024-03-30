export function getDate() {
    let todayDate = new Date();
    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();
    console.log(todayDate);
    console.log(hours);
    console.log(minutes);
}

import { getDate } from "./date";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");