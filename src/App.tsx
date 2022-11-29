import React from 'react';
import {generateHSB} from './util/generateHSB';

function App() {
  let bgColor = generateHSB(0.5,0.4,0.33,0.9,0.66)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify Palette Generator</h1>
      </header>

      <div className='homePlaceholder'>
          <span>Placeholder text about the app</span>
          <button>Connect Spotify</button> {/* will go away if logged in to spotify */}
      </div>

      <div className='confirmTop10Tracks'>
        Lists out the User's Top 10 Spotify Tracks and asks to confirm palette generation
        <button>Generate Palette</button> {/* will run the generateHSB function and display the component below to the DOM */}
      </div>

      <div className='paletteBox'> {/* will be its own component */}
          <div className="colorBox" style={{backgroundColor:bgColor, width:400, height: 400}}> {/* will be its own repeated component */}
            {/* Track Name for this Color */}
            {/*HEX CODE */}
            {bgColor}
          </div>
      </div>
      <div className="savePalette">
        Save Palette to your Local Storage/Share to Email/website
      </div>

      <footer>
        <div>Github</div>
      </footer>
    </div>
  );
}

export default App;
