import Footer from './components/Footer';
import Header from './components/Header';
import HomePlaceholder from './components/HomePlaceholder';
import TopTracks from './components/TopTracks';
import {generateHSB} from './util/generateHSB';

function App() {
  let bgColor = generateHSB(0.5,0.4,0.33,0.9,0.66)
  return (
    <div className="App">
      <Header />
      <HomePlaceholder />
      <TopTracks />

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

      <Footer />
    </div>
  );
}

export default App;
