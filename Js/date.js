export function getDate() {
    let todayDate = new Date();
    let hours = todayDate.getHours().toString().padStart(2, '0');
    let minutes = todayDate.getMinutes().toString().padStart(2, '0');
    // Retourner les chiffres
    return {
        0: hours[0],
        1: hours[1],
        2: ":",
        3: minutes[0],
        4: minutes[1]
    };
}