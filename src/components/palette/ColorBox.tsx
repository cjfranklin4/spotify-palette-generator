type ColorBoxProps = {
    bgColor: string,
    trackName: string
}

const ColorBox = ({bgColor, trackName}: ColorBoxProps) => {
    return(
        <div className="colorBox" style={{backgroundColor:bgColor, width:400, height: 400}}>
            {/* Track Name for this Color */}
            {/*HEX CODE */}
            {bgColor}
            {trackName}
        </div>
    )
}

export default ColorBox