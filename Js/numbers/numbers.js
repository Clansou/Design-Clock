const color = "green";

function calculateCoordinates(canvasWidth, canvasHeight) {
    const xOffset = canvasWidth * 0.2; // Décalage horizontal
    const yOffset = canvasHeight * 0.2; // Décalage vertical
    const width = canvasWidth * 0.6; // Largeur du chiffre
    const height = canvasHeight * 0.6; // Hauteur du chiffre

    return { xOffset, yOffset, width, height };
}

function fillColor(ctx){
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}

export function DrawZero(ctx, canvasWidth, canvasHeight){
    const container = document.getElementById('canvas'); // Remplacez 'canvas-container' par l'ID de votre conteneur de canevas
    const containerStyle = window.getComputedStyle(container);
    const backgroundColor = containerStyle.backgroundColor;

    const xOffset = canvasWidth * 0.3; // Décalage horizontal
    const yOffset = canvasHeight * 0.2; // Décalage vertical
    const width = canvasWidth * 0.4; // Largeur de l'ellipse
    const height = canvasHeight * 0.6; // Hauteur de l'ellipse
    const centerX = xOffset + width / 2; // Coordonnée x du centre de l'ellipse
    const centerY = yOffset + height / 2; // Coordonnée y du centre de l'ellipse
    const radiusX = width / 2; // Demi-largeur de l'ellipse
    const radiusY = height / 2; // Demi-hauteur de l'ellipse
    const centralRadiusX = radiusX * 0.6; // Demi-largeur du cercle central
    const centralRadiusY = radiusY * 0.6; // Demi-hauteur du cercle central

    // Dessiner l'ellipse avec la couleur de remplissage
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();

    // Dessiner un cercle plus petit au centre pour masquer la partie centrale
    ctx.beginPath();
    ctx.fillStyle = backgroundColor; // Couleur du fond, pourrait être transparente (rgba(0,0,0,0))
    ctx.ellipse(centerX, centerY, centralRadiusX, centralRadiusY, 0, 0, Math.PI * 2);
    ctx.fill();
}



export function DrawOne(ctx, canvasWidth, canvasHeight){
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);


    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.3, yOffset); // Point de départ
    ctx.lineTo(xOffset + width * 0.8, yOffset); // Ligne horizontale
    ctx.lineTo(xOffset + width * 0.8, yOffset + height);
    ctx.lineTo(xOffset + width * 0.6, yOffset + height);
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.2);
    ctx.lineTo(xOffset + width * 0.3, yOffset + height * 0.2);
    ctx.lineTo(xOffset + width * 0.3, yOffset); // Retour au point de départ
    fillColor(ctx);
}

export function DrawTwo(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset, yOffset); // Point de départ
    ctx.lineTo(xOffset + width, yOffset); // Ligne horizontale supérieure
    ctx.lineTo(xOffset + width, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.2, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.2, yOffset + height * 0.8);
    ctx.lineTo(xOffset + width , yOffset + height * 0.8);
    ctx.lineTo(xOffset + width , yOffset + height);
    ctx.lineTo(xOffset , yOffset + height);
    ctx.lineTo(xOffset, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.8, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.8, yOffset + height * 0.2);
    ctx.lineTo(xOffset, yOffset + height * 0.2);
    ctx.lineTo(xOffset, yOffset);


    fillColor(ctx);
}

export function DrawThree(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset, yOffset); // Point de départ
    ctx.lineTo(xOffset + width, yOffset); // Ligne horizontale supérieure
    ctx.lineTo(xOffset + width, yOffset + height);
    ctx.lineTo(xOffset, yOffset + height);
    ctx.lineTo(xOffset, yOffset + height * 0.8);
    ctx.lineTo(xOffset + width * 0.7, yOffset + height * 0.8);
    ctx.lineTo(xOffset + width * 0.7, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.3, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.3, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.7, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.7, yOffset + height * 0.2);
    ctx.lineTo(xOffset, yOffset + height * 0.2);
    ctx.lineTo(xOffset, yOffset);



    fillColor(ctx);
}




