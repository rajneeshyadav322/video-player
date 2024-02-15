import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { playlist } from '../../utils/playlist'
import PlaylistItem from "../playlist-item/PlaylistItem";

const Playlist = () => {

  const [itemList, setItemList] = useState(playlist);

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
                    <PlaylistItem provided={provided} data={item} />
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