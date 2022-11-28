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

{/* Generate S from Tempo */}

{/* 

Generate B from Mode

If Mode over (0.49), generate High values for Brightness
If Mode under (0.49), generate Low values for Brightness
*/}

{/* Combine all 3 values to get HSB Value */}
const generateHSB = () => {
    return (
        10
    )
}

{/* Convert HSB Value to RGB/Hex Code */}

export default generateHSB