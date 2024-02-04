import React from "react";
import {
  sampleSong,
  sampleAlbum,
  sampleArtist,
  samplePlaylist,
} from "../Data/SampleData";

const RecommendedList = () => {
  return (
    <div className="flex-1  h-full">
      <div className="flex flex-row justify-between m-4">
        <div>
          <h1 className="flex-1 text-lg font-bold "> Today's Recommended </h1>
        </div>

        <div>
          <p className="flex-1 text-right font-medium text-sm">Show all</p>
        </div>
      </div>

      <ul
        className="flex-1  flex justify-center align-middle
       ">
        {samplePlaylist.map((playlist) => (
          <li
            key={playlist.id}
            className="flex-1 flex flex-col justify-center align-middle  
              rounded-lg m-4
              bg-divblack hover:bg-spotifylightblack">
            <div className="flex-1 justify-content align-middle text-left ">
              <div className="flex flex-col m-4 ">
                <img
                  className="rounded-lg h-1/2 items-center mt-2 shadow-lg"
                  src={playlist.imageUrl}
                  alt=""
                />
                <div className="h3-title mt-2">{playlist.title}</div>
                <div className="mt-2 text-xs">{playlist.description}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedList;
