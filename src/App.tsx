import Footer from './components/Footer';
import Header from './components/Header';
import HomePlaceholder from './components/HomePlaceholder';
import PaletteBox from './components/palette/PaletteBox';
import TopTracks from './components/TopTracks';
import SpotifyWebApi from 'spotify-web-api-js'
import { Routes, Route } from "react-router-dom";
import {useState, useEffect, createContext} from 'react'
import { getTokenFromUrl } from './util/spotify';

const AppContext = createContext(null);

function App() {
  const spotifyApi = new SpotifyWebApi();
  const [accToken, setAccToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    
    const accToken = hash.access_token
    if(accToken){
      setAccToken(accToken)

      spotifyApi.setAccessToken(accToken)
    } 
  }, [])
  return (
    <div className="App">
      <Header />
      {accToken ?
      ( <Routes>
        <Route path='/' element={<TopTracks spotifyApi={spotifyApi} />} />
        {/* <Route path='/color' element={<PaletteBox bgColor={bgColor} />} /> */}
      </Routes>)
      : <HomePlaceholder token={accToken} />}
      <Footer /> 
    </div>
  );
}

export default App;
