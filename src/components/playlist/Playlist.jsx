import React, { useContext, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { playlist } from '../../utils/playlist'
import { PlayerContext } from '../../context/playerContext';

const Playlist = () => {

  // React state to track order of items
  const [itemList, setItemList] = useState(playlist);
  const { video, setVideo } = useContext(PlayerContext);

  const handleVideo = (source) => setVideo(source)

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    let updatedList = [...itemList];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setItemList(updatedList);
  };



  return (
    <div className="border-2  tracking-tight rounded-lg">
      <p className='text-xl tracking-tight text-gray-600 px-4 rounded-t-md py-2 w-full bg-slate-100'>Playlist 
        <span className="text-[14px] ml-2">(Drag & drop videos for reordering)</span>
      </p>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className='px-4 py-2 h-[67vh] overflow-y-scroll'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {itemList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <div onClick={() => handleVideo(item.source)} key={item.id} className={`p-4 my-2 space-x-2 cursor-pointer flex ${video === item.source ? "bg-slate-200" : "bg-slate-100"} rounded-md`}>
                        <img src={'/play.png'} className='w-6 h-6' />
                        <div>
                          <p className='text-sm'>
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Playlist