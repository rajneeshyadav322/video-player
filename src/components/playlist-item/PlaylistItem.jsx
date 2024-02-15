import React, { useContext } from 'react'
import { PlayerContext } from '../../context/playerContext';
import playIcon from './../../assets/play.png'

const PlaylistItem = ({ provided, data }) => {

    const { id, title, source } = data
    const { video, setVideo } = useContext(PlayerContext);

    const handleVideo = (source) => setVideo(source)

    return (
        <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
        >
            <div onClick={() => handleVideo(source)} key={id} className={`p-4 my-2 space-x-2 cursor-pointer flex ${video === source ? "bg-slate-200" : "bg-slate-100"} rounded-md`}>
                <img src={playIcon} className='w-6 h-6' />
                <div>
                    <p className='text-sm'>
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItem