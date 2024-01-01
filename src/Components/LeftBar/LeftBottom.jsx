import React from "react";

const LeftBottom = () => {
  return (
    <div
      className=" rounded-md bg-spotifylightblack py-2
    "
    >
      <ul>
        <li className="m-2">
          <img
            src="/photos/albumStock.png"
            alt="pic1"
            className="w-14 h-14 object-cover"
          />
          <h3>Album Title</h3>
          <p>Playlist * Spotify</p>
        </li>
        <li className="m-2">
          <img
            src="/photos/albumStock.png"
            alt="pic1"
            className="w-14 h-14 object-cover"
          />
        </li>
        <li className="m-2">
          <img
            src="/photos/albumStock.png"
            alt="pic1"
            className="w-14 h-14 object-cover"
          />
        </li>
        <li className="m-2">
          <img
            src="/photos/albumStock.png"
            alt="pic1"
            className="w-14 h-14 object-cover"
          />
        </li>
        <li className="m-2">
          <img
            src="/photos/albumStock.png"
            alt="pic1"
            className="w-14 h-14 object-cover"
          />
        </li>
      </ul>
    </div>
  );
};

export default LeftBottom;
