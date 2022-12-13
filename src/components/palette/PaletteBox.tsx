import ColorBox from "./ColorBox"
import {useState, useEffect} from 'react';
import { generateHSB } from "../../util/generateHSB";
import { analysisType } from "../TopTracks";


type PaletteBoxProps = {
    songNames: string[],
    songAnalysis: analysisType[],
    genPalette: boolean
}


const PaletteBox = ({songNames, songAnalysis}: PaletteBoxProps) => {
    /* let analysisValues : any[] = [];
    const colorAnalysis = (songsInfo: any) => {
        //console.log(songsInfo, 'songsIngo')
        analysisValues = songsInfo.map((song : any) => generateHSB(song.energy, song.danceability, song.valence, song.tempo, song.number))
        console.log(analysisValues)
        return analysisValues
    } */

    /* useEffect(() => {
        colorAnalysis(songAnalysis)
    }, []) */

    console.log(songAnalysis, 'palette box componenr')
    
    return (
            <div className='paletteBox'>
            <div className='colorBox-container' style={{display: "flex"}}>
                {/*
                    ColorBox component is mapped 5 times (for each track)
                */}
                {
                  songAnalysis.map((value : any, index: any) => <ColorBox key={index} bgColor={value} />)
                }
            </div>
                <div className="savePalette">
                    Save Palette to your Local Storage
                </div>
            </div>
    )
}

export default PaletteBox