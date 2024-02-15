import React from 'react'
import VideoPlayer from '../components/video-player/VideoPlayer'
import Playlist from '../components/playlist/Playlist'

const PlayerView = () => {
  return (
    <div className='p-4 md:flex md:space-x-8 md:p-8'>
      <div className='md:w-3/5 lg:w-2/3'>
        <VideoPlayer />
      </div>
      <div>
        <Playlist />
      </div>
    </div>
  )
}

export default PlayerView