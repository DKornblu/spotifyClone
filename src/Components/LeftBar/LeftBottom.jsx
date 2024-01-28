import React from "react";

const LeftBottom = () => {
  return (
    <div>
      {/* //TODO: Make responsive */}
      <ul className="overflow-y-auto max-h-[300px] bg-divblack rounded-lg">
        {/* TODO: when we loop fix the margin it should be aroundd the div */}
        <li className="my-4 hover:bg-spotifylightblack">
          <div className="m-2 border border-green-300 flex flex-row">
            <img
              src="/photos/albumStock.png"
              alt="pic1"
              className="w-14 h-14 object-cover"
            />
            <div className="flex flex-col m-2">
              <h3 className="h3-title">Album Title</h3>
              <p>Playlist * Spotify</p>
            </div>
          </div>
        </li>
        <li className="my-4  hover:bg-spotifylightblack">
          <div className="m-2 flex flex-row">
            <img
              src="/photos/albumStock.png"
              alt="pic1"
              className="w-14 h-14 object-cover"
            />
            <div className="flex flex-col m-2">
              <h3 className="h3-title">Album Title</h3>
              <p>Playlist * Spotify</p>
            </div>
          </div>
        </li>
        <li className="my-4  hover:bg-spotifylightblack">
          <div className="m-2 flex flex-row">
            <img
              src="/photos/albumStock.png"
              alt="pic1"
              className="w-14 h-14 object-cover"
            />
            <div className="flex flex-col m-2">
              <h3 className="h3-title">Album Title</h3>
              <p>Playlist * Spotify</p>
            </div>
          </div>
        </li>
        <li className="my-4  hover:bg-spotifylightblack">
          <div className="m-2 flex flex-row">
            <img
              src="/photos/albumStock.png"
              alt="pic1"
              className="w-14 h-14 object-cover"
            />
            <div className="flex flex-col m-2">
              <h3 className="h3-title">Album Title</h3>
              <p>Playlist * Spotify</p>
            </div>
          </div>
        </li>
        <li className="my-4  hover:bg-spotifylightblack">
          <div className="m-2 flex flex-row">
            <img
              src="/photos/albumStock.png"
              alt="pic1"
              className="w-14 h-14 object-cover"
            />
            <div className="flex flex-col m-2">
              <h3 className="h3-title">Album Title</h3>
              <p>Playlist * Spotify</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftBottom;
