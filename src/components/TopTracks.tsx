import {useState} from 'react';
import PaletteBox from './palette/PaletteBox';
import { generateHSB } from "../util/generateHSB";


export type analysisType = {
    danceability: number,
    energy: number,
    id: string,
    mode: number,
    tempo: number,
    valence: number
}
const TopTracks = ({spotifyApi}: any) => {
    const [topFiveSongs, setTopFiveSongs] = useState<string[]>({} as string[])
    const [genPalette, setGenPalette] = useState(false);
    const [hexColors, setHexColors] = useState<any[]>({} as any[])

    const colorAnalysis = (songsInfo: any) => {
        //console.log(songsInfo, 'songsIngo')
        let analysisValues : any[] = [];
        //console.log(analysisValues, 'alaysis starting values')
        //console.log(songsInfo, 'song fearures in analysis')
        //console.log(topFiveSongs, 'song names')
        analysisValues = songsInfo.map((song : any) => generateHSB(song.energy, song.danceability, song.valence, song.tempo, song.mode))
        //console.log(analysisValues, 'analysis Values')

        setHexColors(analysisValues)
        setGenPalette(true);
        return analysisValues
    }

    const getTopSongs = () => {
        //console.log('i work');
        spotifyApi.getMyTopTracks({
            limit: 5,
            offset: 0
        }).then(
            function (data: any) {
               // console.log('top 5 songs', data);
                let trackIds = data.items.map(function(track: any){
                    return track.id
                })

                let trackNames = data.items.map(function(track: any){
                    return track.name
                })

                setTopFiveSongs(trackNames)

                //console.log( trackNames)

                let trackString = trackIds.join(',')

                return trackString
            },
              function (err : any) {
                console.error(err);
            }
        ).then(function(trackString: any){
           // console.log(trackString, 'string of tracks')
     
          //  console.log(trackFeatures, 'trackFeatures')
            return spotifyApi.getAudioFeaturesForTracks(trackString)
        }).then(function(tracksFeatures: any){
          //  console.log(tracksFeatures, 'tracks analysis')
            //console.log(typeof tracksFeatures)
            let songFeaturesArray = tracksFeatures.audio_features.map((song: any) => {
                return {
                    danceability: song.danceability,
                    energy: song.energy,
                    tempo: song.tempo,
                    mode: song.mode,
                    valence: song.valence,
                    id: song.id
                }
            })
            colorAnalysis(songFeaturesArray);

        })
    }
    
    return(
        <div>
           {genPalette ? <PaletteBox genPalette={genPalette} songNames={topFiveSongs} songAnalysis={hexColors} /> :<div className='confirmTop10Tracks'>
                Lists out the User's Top 10 Spotify Tracks and asks to confirm palette generation
                <p>Brief explanation on how palette is generated</p>
                <button onClick={() => getTopSongs()}>Generate Palette</button> 
            </div>}
        </div>
    )
}

export default TopTracks