import ColorBox from "./ColorBox"
import {useState, useEffect} from 'react';

type PaletteBoxProps = {
    bgColor: string
}

const colorAnalysis = (songsFeatures: any) => {

}

const PaletteBox = ({bgColor}: PaletteBoxProps) => {
    const [genPalette, setGenPalette] = useState(false);
    
    return (
        <div>
            {genPalette ? <div className='paletteBox'>
            <div className='colorBox-container'>
                {/*
                    ColorBox component is mapped 5 times (for each track)
                */}
            </div>
                <ColorBox bgColor={bgColor} />
                <div className="savePalette">
                    Save Palette to your Local Storage
                </div>
            </div> : <div>loading....</div>}
        </div>
    )
}

export default PaletteBox