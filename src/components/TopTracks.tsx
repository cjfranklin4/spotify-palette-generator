import {useState, useEffect} from 'react';
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
type analysisType = {
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
    //const [anValues, setAnValues] = useState<analysisType>({} as analysisType);

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

                //console.log(trackIds, trackNames)

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
            console.log(songFeaturesArray, 'song features array')
            setSongsFeatures(songFeaturesArray);
        })


        //setAnValues(songFeaturesArray)
    }
    return(
        <div className='confirmTop10Tracks'>
            Lists out the User's Top 10 Spotify Tracks and asks to confirm palette generation
            <p>Brief explanation on how palette is generated</p>
            <button onClick={() => getTopSongs()}>Generate Palette</button> {/* will run the generateHSB function and display the component below to the DOM */}
        </div>
    )
}

export default TopTracks