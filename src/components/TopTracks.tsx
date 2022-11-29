const TopTracks = () => {
    return(
        <div className='confirmTop10Tracks'>
            Lists out the User's Top 10 Spotify Tracks and asks to confirm palette generation
            <button>Generate Palette</button> {/* will run the generateHSB function and display the component below to the DOM */}
        </div>
    )
}

export default TopTracks