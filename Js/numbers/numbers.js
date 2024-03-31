const color = "green";
    const container = document.getElementsByClassName('canvas'); // Remplacez 'canvas-container' par l'ID de votre conteneur de canevas
    const containerStyle = window.getComputedStyle(container[0]);
    const backgroundColor = containerStyle.backgroundColor;

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

function fillBackgroundColor(ctx){
    ctx.stroke();
    ctx.fillStyle = backgroundColor;
    ctx.fill();
}

export function DrawZero(ctx, canvasWidth, canvasHeight){
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);


    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.1, yOffset);
    ctx.lineTo(xOffset + width * 0.9, yOffset); 
    ctx.lineTo(xOffset + width * 0.9, yOffset + height);
    ctx.lineTo(xOffset + width * 0.1, yOffset + height);
    ctx.lineTo(xOffset + width * 0.1, yOffset);
    fillColor(ctx);

    ctx.beginPath();
    ctx.moveTo(xOffset +width*0.3, yOffset+height*0.2);
    ctx.lineTo(xOffset +width*0.7, yOffset+height*0.2);
    ctx.lineTo(xOffset +width*0.7, yOffset+height*0.8);
    ctx.lineTo(xOffset +width*0.3, yOffset+height*0.8);
    ctx.lineTo(xOffset +width*0.3, yOffset+height*0.2);
    fillBackgroundColor(ctx);

}



export function DrawOne(ctx, canvasWidth, canvasHeight){
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);


    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.8, yOffset); // Point de départ
    ctx.lineTo(xOffset + width * 0.8, yOffset + height);
    ctx.lineTo(xOffset + width * 0.6, yOffset + height);
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.3);
    ctx.lineTo(xOffset + width * 0.4, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.4, yOffset + height * 0.25);
    ctx.lineTo(xOffset + width * 0.8, yOffset);
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

export function DrawFour(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.05, yOffset); // Point de départ
    ctx.lineTo(xOffset + width * 0.2, yOffset); 
    ctx.lineTo(xOffset + width * 0.2, yOffset + height * 0.45); 
    ctx.lineTo(xOffset + width * 0.45, yOffset + height * 0.45); 
    ctx.lineTo(xOffset + width * 0.45, yOffset + height * 0.1); 
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.1); 
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.45); 
    ctx.lineTo(xOffset + width * 0.95, yOffset + height * 0.45); 
    ctx.lineTo(xOffset + width * 0.95, yOffset + height * 0.6); 
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.6); 
    ctx.lineTo(xOffset + width * 0.6, yOffset + height); 
    ctx.lineTo(xOffset + width * 0.45, yOffset + height); 
    ctx.lineTo(xOffset + width * 0.45, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.05, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.05,yOffset);



    fillColor(ctx);
}

export function DrawFive(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset + width, yOffset); // Point de départ
    ctx.lineTo(xOffset , yOffset); // Ligne horizontale supérieure
    ctx.lineTo(xOffset , yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.8, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.8, yOffset + height * 0.8);
    ctx.lineTo(xOffset, yOffset + height * 0.8);
    ctx.lineTo(xOffset, yOffset + height);
    ctx.lineTo(xOffset + width, yOffset + height);
    ctx.lineTo(xOffset + width, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.2, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.2, yOffset + height * 0.2);
    ctx.lineTo(xOffset + width, yOffset + height * 0.2);
    ctx.lineTo(xOffset + width, yOffset);

    fillColor(ctx);
}


export function DrawSix(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.1, yOffset); // Point de départ
    ctx.lineTo(xOffset + width * 0.9, yOffset); // Ligne horizontale supérieure
    ctx.lineTo(xOffset + width * 0.9, yOffset + height* 0.2);
    ctx.lineTo(xOffset + width * 0.3, yOffset + height* 0.2);
    ctx.lineTo(xOffset + width * 0.3, yOffset + height* 0.4);
    ctx.lineTo(xOffset + width * 0.9, yOffset + height* 0.4);
    ctx.lineTo(xOffset + width * 0.9, yOffset + height);
    ctx.lineTo(xOffset + width * 0.1, yOffset + height);
    ctx.lineTo(xOffset + width * 0.1, yOffset);
    fillColor(ctx);

    ctx.beginPath();
    ctx.moveTo(xOffset + width*0.3, yOffset + height*0.6);
    ctx.lineTo(xOffset + width*0.7, yOffset + height*0.6);
    ctx.lineTo(xOffset + width*0.7, yOffset + height*0.8);
    ctx.lineTo(xOffset + width*0.3, yOffset + height*0.8);
    ctx.lineTo(xOffset + width*0.3, yOffset + height*0.6);
    fillBackgroundColor(ctx);
}

export function DrawSeven(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset, yOffset); // Point de départ
    ctx.lineTo(xOffset + width * 0.7, yOffset); // Ligne horizontale supérieure
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.8, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.8, yOffset + height * 0.55);
    ctx.lineTo(xOffset + width * 0.5625, yOffset + height * 0.55);
    ctx.lineTo(xOffset + width * 0.45, yOffset + height);
    ctx.lineTo(xOffset + width * 0.25, yOffset + height);
    ctx.lineTo(xOffset + width * 0.3625, yOffset + height * 0.55);
    ctx.lineTo(xOffset + width * 0.15, yOffset + height * 0.55);
    ctx.lineTo(xOffset + width * 0.15, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.4, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.45, yOffset + height * 0.2);
    ctx.lineTo(xOffset , yOffset + height * 0.2);
    ctx.lineTo(xOffset , yOffset);

    fillColor(ctx);
}

export function DrawEight(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.1, yOffset); // Point de départ
    ctx.lineTo(xOffset + width * 0.9, yOffset); // Ligne horizontale supérieure
    ctx.lineTo(xOffset + width * 0.9, yOffset + height);
    ctx.lineTo(xOffset + width * 0.1, yOffset + height);
    ctx.lineTo(xOffset + width * 0.1, yOffset);
    fillColor(ctx);

    ctx.beginPath();
    ctx.moveTo(xOffset + width*0.3, yOffset + height*0.2);
    ctx.lineTo(xOffset + width*0.7, yOffset + height*0.2);
    ctx.lineTo(xOffset + width*0.7, yOffset + height*0.4);
    ctx.lineTo(xOffset + width*0.3, yOffset + height*0.4);
    ctx.lineTo(xOffset + width*0.3, yOffset + height*0.2);
    fillBackgroundColor(ctx);

    ctx.beginPath();
    ctx.moveTo(xOffset + width*0.3, yOffset+ height*0.6);
    ctx.lineTo(xOffset + width*0.7, yOffset+ height*0.6);
    ctx.lineTo(xOffset + width*0.7, yOffset+ height*0.8);
    ctx.lineTo(xOffset + width*0.3, yOffset+ height*0.8);
    ctx.lineTo(xOffset + width*0.3, yOffset+ height*0.6);
    fillBackgroundColor(ctx);
}

export function DrawNine(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.1, yOffset); // Point de départ
    ctx.lineTo(xOffset + width * 0.9, yOffset); // Ligne horizontale supérieure
    ctx.lineTo(xOffset + width * 0.9, yOffset + height);
    ctx.lineTo(xOffset + width * 0.1, yOffset + height);
    ctx.lineTo(xOffset + width * 0.1, yOffset + height * 0.8);
    ctx.lineTo(xOffset + width * 0.7, yOffset + height * 0.8);
    ctx.lineTo(xOffset + width * 0.7, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.1, yOffset + height * 0.6);
    ctx.lineTo(xOffset + width * 0.1, yOffset);
    fillColor(ctx);

    ctx.beginPath();
    ctx.moveTo(xOffset + width*0.3, yOffset + height*0.2);
    ctx.lineTo(xOffset + width*0.7, yOffset + height*0.2);
    ctx.lineTo(xOffset + width*0.7, yOffset + height*0.4);
    ctx.lineTo(xOffset + width*0.3, yOffset + height*0.4);
    ctx.lineTo(xOffset + width*0.3, yOffset + height*0.2);
    fillBackgroundColor(ctx);
}

export function DrawColon(ctx, canvasWidth, canvasHeight){
    // Calcul des nouvelles coordonnées en fonction de la taille du canvas
    const { xOffset, yOffset, width, height } = calculateCoordinates(canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.4, yOffset + height * 0.2); // Point de départ
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.2); // Ligne horizontale supérieure
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.4, yOffset + height * 0.4);
    ctx.lineTo(xOffset + width * 0.4, yOffset + height * 0.2);
    fillColor(ctx);

    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.4, yOffset + height * 0.6); // Point de départ
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.6); // Ligne horizontale supérieure
    ctx.lineTo(xOffset + width * 0.6, yOffset + height * 0.8);
    ctx.lineTo(xOffset + width * 0.4, yOffset + height * 0.8);
    ctx.lineTo(xOffset + width * 0.4, yOffset + height * 0.6);
    fillColor(ctx);
}




