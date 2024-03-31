import { DrawZero, DrawOne, DrawTwo, DrawThree,DrawFour,DrawFive,DrawSix,DrawSeven,DrawEight,DrawNine,DrawColon } from './numbers.js';

export function DrawNumber(ctx, canva, hourNumber) {
    switch (hourNumber) {
        case '0':
            DrawZero(ctx, canva.width, canva.height);
            break;
        case '1':
            DrawOne(ctx, canva.width, canva.height);;
            break;
        case '2':
            DrawTwo(ctx, canva.width, canva.height);;
            break;
        case '3':
            DrawThree(ctx, canva.width, canva.height);;
            break;
        case '4':
            DrawFour(ctx, canva.width, canva.height);;
            break;
        case '5':
            DrawFive(ctx, canva.width, canva.height);;
            break;
        case '6':
            DrawSix(ctx, canva.width, canva.height);;
            break;
        case '7':
            DrawSeven(ctx, canva.width, canva.height);;
            break;
        case '8':
            DrawEight(ctx, canva.width, canva.height);;
            break;
        case '9':
            DrawNine(ctx, canva.width, canva.height);;
            break;
        case ':':
            DrawColon(ctx, canva.width, canva.height);;
            break;
        default:
            console.log('Chiffre non reconnu');
            break;
    }
}