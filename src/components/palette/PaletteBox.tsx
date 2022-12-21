import ColorBox from "./ColorBox"
import { analysisType } from "../TopTracks";


type PaletteBoxProps = {
    songNames: string[],
    songAnalysis: analysisType[],
    genPalette: boolean
}


const PaletteBox = ({songNames, songAnalysis}: PaletteBoxProps) => {

   // console.log(songAnalysis, 'palette box componenr', songNames, 'song names')
    let hexAnalysis: any = [];
    let testAnalysis = songAnalysis.forEach((hex, index) => {
        const songName = songNames[index];
        hexAnalysis.push({hex, songName})
    })
    console.log(hexAnalysis, 'this should work right?')
    
    
    return (
            <div className='paletteBox'>
            <div className='colorBox-container' style={{display: "flex"}}>
                {
                  hexAnalysis.map((item : any, index: any) => <ColorBox key={index} trackName={item.songName} bgColor={item.hex} />)
                }
            </div>
                <div className="savePalette">
                    Save Palette to your Local Storage
                </div>
            </div>
    )
}

export default PaletteBox