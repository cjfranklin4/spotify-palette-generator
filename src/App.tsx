import Footer from './components/Footer';
import Header from './components/Header';
import HomePlaceholder from './components/HomePlaceholder';
import TopTracks from './components/TopTracks';
import SpotifyWebApi from 'spotify-web-api-js'
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import { getTokenFromUrl } from './util/spotify';

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
        <Route path='/top-tracks' element={<TopTracks spotifyApi={spotifyApi} />} />
      </Routes>)
      : <HomePlaceholder path='/' token={accToken} />}
      <Footer /> 
    </div>
  );
}

export default App;
