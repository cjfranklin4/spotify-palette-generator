type ColorBoxProps = {
    bgColor: string
}

const ColorBox = ({bgColor}: ColorBoxProps) => {
    return(
        <div className="colorBox" style={{backgroundColor:bgColor, width:400, height: 400}}>
            {/* Track Name for this Color */}
            {/*HEX CODE */}
            {bgColor}
        </div>
    )
}

export default ColorBox