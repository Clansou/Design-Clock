export function DrawOne(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const xOffset = canvasWidth * 0.4; // Décalage horizontal
    const yOffset = canvasHeight * 0.2; // Décalage vertical
    const width = canvasWidth * 0.2; // Largeur du chiffre
    const height = canvasHeight * 0.6; // Hauteur du chiffre

    ctx.beginPath();
    ctx.moveTo(xOffset, yOffset); // Point de départ
    ctx.lineTo(xOffset + width, yOffset); // Ligne horizontale
    ctx.lineTo(xOffset + width, yOffset + height);
    ctx.lineTo(xOffset + width * 0.5, yOffset + height);
    ctx.lineTo(xOffset + width * 0.5, yOffset + height * 0.2);
    ctx.lineTo(xOffset, yOffset + height * 0.2);
    ctx.lineTo(xOffset, yOffset); // Retour au point de départ
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.fill();
}

