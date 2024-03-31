export function getDate() {
    let todayDate = new Date();
    let hours = todayDate.getHours().toString().padStart(2, '0');
    let minutes = todayDate.getMinutes().toString().padStart(2, '0');
    // Retourner les chiffres
    return {
        hoursTens: hours[0],
        hoursOnes: hours[1],
        minutesTens: minutes[0],
        minutesOnes: minutes[1]
    };
}