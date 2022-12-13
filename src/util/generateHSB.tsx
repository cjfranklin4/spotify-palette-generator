import { hsvToHex } from '@super-effective/colorutils';
{/* 
HSB Ranges

Red = 0-30
Orange = 30-60

Yellow = 60-90
Yellow-Green = 90-120

Green = 120-150

Cyan = 150-180

Blue = 210-240

Purple = 240-270
Purple-Magenta = 270-300

Magenta = 300-330
Magenta-Red = 330-360

*/}

{/*
    Check if Energy/Danceability/Valence are over a certian value...(0.49)
    ---If (X) over (0.49), generate High values for H
    ---If (X) under (0.49), generate Low values for H

*/}

{/* 
Generate H from Energy Range......Red to Green 

High Energy = Red

Low Energy = Green


*/}

{/*

Generate H from Danceability....Orange to Blue

High Danceability = Orange

Low Danceability = Blue

*/}

{/* 
Generate H from Valence....Purple to Yellow

High Valence = Yellow

Low Valence = Purple

*/}

const randomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random()*(max-min)+min)
}

const randomNumberDecimal = (min: number, max: number): number => {
    let decimal = Math.random()*(max-min)+min;
    let num = parseFloat(decimal.toFixed(2))
    return num
}

const generateH = (energy: number, dance: number, val: number): number => {
    let hue = 0;
    if( (energy > val) && (energy > dance) ){
        if(energy < 0.5){
            hue = randomNumber(90,150) //green
        } else if (energy >= 0.5){
            hue = randomNumber(0,15) //red
        }
    } else if( (dance > val) && (dance > energy) ){
        if(dance < 0.5){
            hue = randomNumber(210,240) //blue
        } else if (dance >= 0.5){
            hue = randomNumber(15,40) //orange
        }
    } else if( (val > energy) && (val > dance) ){
        if(val < 0.5){
            hue = randomNumber(255,270) //purple
        } else if (val >= 0.5){
            hue = randomNumber(45,65) //yellow
        }
    }

    return hue
}

{/* Generate S from Tempo */}

const generateS = (tempo: number): number => {
    let sat = 0;
    if((tempo > 0) && (tempo < 76)){
        sat = randomNumberDecimal(0,0.2)
    } else if ((tempo >= 76) && (tempo < 120)){
        sat = randomNumberDecimal(0.21,0.4)
    } else if((tempo >= 120) && (tempo < 156)){
        sat = randomNumberDecimal(0.41,0.85)
    } else if((tempo >= 156) && (tempo < 176)){
        sat = randomNumberDecimal(0.86,0.94)
    } else if(tempo >= 176){
        sat = randomNumberDecimal(0.95,1)
    }
    return sat
}

{/* 

Generate B from Mode

If Mode over (0.49), generate High values for Brightness
If Mode under (0.49), generate Low values for Brightness
*/}

const generateB = (mode: number): number => {
    let bri = 0;
    if(mode === 0){
        bri = randomNumberDecimal(0.6,0.7)
    } else if (mode === 1){
        bri = randomNumberDecimal(0.81,1)
    }

    return bri
}

{/* Combine all 3 values to get HSB Value */}
const generateHSB = (energy: number, dance: number, val: number, tempo: number, mode: number): string => {
    let h = generateH(energy, dance, val);
    let s = generateS(tempo);
    let b = generateB(mode);
    console.log(energy, 'energy', dance, 'dance', val, 'val', tempo, 'tempo', mode, 'mode')
    console.log(h, 'hue', s, 'sat', b, 'brightness')
    let hex = hsvToHex(h,s,b);
    console.log(hex,'hex')
    return (
        hex
    )
}

export {generateHSB}