import './App.css'
import { useState } from 'react';
import PlayerView from './views/PlayerView'
import { PlayerContext } from './context/playerContext';

function App() {

  const [video, setVideo] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")

  return (
    <>
      <PlayerContext.Provider value={{ video, setVideo }}>
        <PlayerView />
      </PlayerContext.Provider>
    </>
  )
}

export default App
