import Footer from './components/Footer';
import Header from './components/Header';
import HomePlaceholder from './components/HomePlaceholder';
import PaletteBox from './components/palette/PaletteBox';
import TopTracks from './components/TopTracks';
import {generateHSB} from './util/generateHSB';

function App() {
  let bgColor = generateHSB(0.5,0.4,0.33,0.9,0.66)
  return (
    <div className="App">
      <Header />
      <HomePlaceholder />
      <TopTracks />
      <PaletteBox bgColor={bgColor} />
      <Footer />
    </div>
  );
}

export default App;
