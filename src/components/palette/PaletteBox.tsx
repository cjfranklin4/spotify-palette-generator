import ColorBox from "./ColorBox"

type PaletteBoxProps = {
    bgColor: string
}

const PaletteBox = ({bgColor}: PaletteBoxProps) => {
    return (
        <div className='paletteBox'>
            <div className='colorBox-container'>
            {/*
                ColorBox component is mapped 5 times (for each track)
             */}
            </div>
            <ColorBox bgColor={bgColor} />
            <div className="savePalette">
                Save Palette to your Local Storage
            </div>
        </div>
    )
}

export default PaletteBox