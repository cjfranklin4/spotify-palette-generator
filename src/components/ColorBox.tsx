const ColorBox = (bgColor: string) => {
    return(
            <div className="colorBox" style={{backgroundColor:bgColor, width:400, height: 400}}> {/* will be its own repeated component */}
            {/* Track Name for this Color */}
            {/*HEX CODE */}
            {bgColor}
        </div>
    )
}

export default ColorBox