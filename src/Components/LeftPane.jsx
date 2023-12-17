import React from 'react';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { IoSearchOutline } from 'react-icons/io5';
import { VscLibrary } from "react-icons/vsc";
import { CgPentagonUp } from "react-icons/cg";

const LeftPane = () => {
  return (
    <section className="flex-1">
      <div>
        <GoHomeFill />
        Home
      </div>
      <div>
        <IoSearchOutline />
        Search
      </div>
      <div>
        <VscLibrary /> {/* Not an exact icon match to Spotify */}
        Your Library
      </div>
      <img src="" alt="pic1" />
      <img src="" alt="pic2" />
      <img src="" alt="pic3" />
      <img src="" alt="pic4" />
      <img src="" alt="pic5" />
      <img src="" alt="pic6" />
      <div>
        <CgPentagonUp /> {/* Not an exact icon match to Spotify, and only when window is minimized */}
      </div>
    </section>
  );
};

export default LeftPane;
