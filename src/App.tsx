import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify Palette Generator</h1>
        <button>Connect Spotify</button> {/* will go away if logged in to spotify */}
      </header>

      <div className='confirmTop10Tracks'>
        Lists out the User's Top 10 Spotify Tracks and asks to confirm palette generation
        <button>Generate Palette</button> {/* will run the generateHSB function and display the component below to the DOM */}
      </div>

      <div className='paletteBox'> {/* will be its own component */}
          <div className="colorBox" style={{backgroundColor:'HSLtoRBGColor'}}> {/* will be its own repeated component */}
            {/*HEX CODE */}
            {/* Track Name for this Color */}
          </div>
      </div>
      <div className="savePalette">
        Save Palette to your Local Storage
      </div>

      <footer>
        <div>Github</div>
      </footer>
    </div>
  );
}

export default App;
