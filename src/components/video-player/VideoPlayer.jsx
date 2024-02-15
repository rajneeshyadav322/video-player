import React, { useContext } from 'react'
import { PlayerContext } from '../../context/playerContext';

const VideoPlayer = () => {

  const { video, setVideo } = useContext(PlayerContext);

  return (
    <div className='rounded-2xl overflow-hidden'>
      <video src={video} className='w-full' controls autoPlay >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer