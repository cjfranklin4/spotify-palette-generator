import {useState, useEffect} from 'react';
import PaletteBox from './palette/PaletteBox';
import { generateHSB } from "../util/generateHSB";


type audioFeaturesType = {
        acousticness: number,
        analysis_url: string,
        danceability: number,
        duration_ms: number,
        energy: number,
        id: string,
        instrumentalness: number,
        key : number,
        liveness: number,
        loudness: number,
        mode: number,
        speechiness: number,
        tempo: number,
        time_signature: number,
        track_href: string,
        type: string,
        uri: string,
        valence: number
}
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
    const [songsFeatures, setSongsFeatures] = useState<analysisType[]>({} as analysisType[]);
    const [genPalette, setGenPalette] = useState(false);
    const [hexColors, setHexColors] = useState<any[]>({} as any[])
    //const [anValues, setAnValues] = useState<analysisType>({} as analysisType);

    const colorAnalysis = (songsInfo: any) => {
        //console.log(songsInfo, 'songsIngo')
        let analysisValues : any[] = [];
        console.log(analysisValues, 'alaysis starting values')
        console.log(songsInfo, 'song fearures in analysis')
        analysisValues = songsInfo.map((song : any) => generateHSB(song.energy, song.danceability, song.valence, song.tempo, song.mode))
        console.log(analysisValues, 'analysis Values')

        /* let paletteValues = analysisValues.map((val1, index) => (
            {
              'hex': val1,
              'songName': topFiveSongs[index]
            }
          )); */
        //console.log(paletteValues, 'palette values')
        setHexColors(analysisValues)
        setGenPalette(true);
        return analysisValues
    }

    const getTopSongs = () => {
        console.log('i work');
        spotifyApi.getMyTopTracks({
            limit: 5,
            offset: 0
        }).then(
            function (data: any) {
                console.log('top 5 songs', data);
                let trackIds = data.items.map(function(track: any){
                    return track.id
                })

                let trackNames = data.items.map(function(track: any){
                    return track.name
                })

                setTopFiveSongs(trackNames)

                console.log( trackNames)

                return trackIds
            },
              function (err : any) {
                console.error(err);
            }
        ).then(function(trackIds:any){
            console.log(trackIds, 'track ids')
            let trackString = trackIds.join(',');
            return trackString
        }).then(function(trackString: any){
            console.log(trackString, 'string of tracks')
            return spotifyApi.getAudioFeaturesForTracks(trackString)
        }).then(function(tracksFeatures: any){
            console.log(tracksFeatures, 'tracks analysis')
            console.log(typeof tracksFeatures)
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
            console.log(songFeaturesArray, 'song features array', typeof songFeaturesArray)
            setSongsFeatures(songFeaturesArray.song);
            //setGenPalette(true);

            console.log(songFeaturesArray, 'runnign genpalette code')
            colorAnalysis(songFeaturesArray);

            //setTimeO
        })
        //setAnValues(songFeaturesArray)
    }
    
    return(
        <div>
           {genPalette ? <PaletteBox genPalette={genPalette} songNames={topFiveSongs} songAnalysis={hexColors} /> :<div className='confirmTop10Tracks'>
                Lists out the User's Top 10 Spotify Tracks and asks to confirm palette generation
                <p>Brief explanation on how palette is generated</p>
                <button onClick={() => getTopSongs()}>Generate Palette</button> {/* will run the generateHSB function and display the component below to the DOM */}
            </div>}
        </div>
    )
}

export default TopTracks