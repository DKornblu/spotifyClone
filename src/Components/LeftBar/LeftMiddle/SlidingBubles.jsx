import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const SlidingBubles = () => {
  let bubblesArray = ['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'];

  //   TODO: add next and prv fucntionality
  const [currentInd, setCurrentInd] = useState(0);
  const [nextBtn, setNxtBtn] = useState(true);
  const [prevBtn, setPrevBtn] = useState(false);

  const handleNext = () => {
    // check if currently at end of list
    if (currentInd < bubblesArray.length - 1) {
      // move on to next index
      setCurrentInd((prevInd) => prevInd + 1);
      setPrevBtn(true);
    }
    if (currentInd === bubblesArray.length - 2) {
      setNxtBtn(false);
    }
  };

  const handlePrev = () => {
    // Check if currently at ind 0
    if (currentInd > 0) {
      // Move to previous index, make sure doesn't drop below 0
      setCurrentInd((prevInd) => prevInd - 1);
      setNxtBtn(true);
    }
    if (currentInd === 1) {
      setPrevBtn(false);
    }
  };

  return (
    <div className="flex overflow-x-auto py-2 ">
      <button className="sticky top-0 left-0 text-gray-400 bg-spotifylightblack rounded-full py-2 px-2 hover:bg-spotifydarkgrey duration-300 cursor-pointer hover:text-white
      ">
        <GrPrevious size={18} />
      </button>
      <div className="flex">
        {bubblesArray.map((bubble, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-spotifylightblack text-white py-2 px-3 rounded-full text-xs mx-1 whitespace-nowrap hover:bg-spotifydarkgrey duration-300 cursor-pointer"
          >
            {bubble}
          </div>
        ))}
      </div>
      <button className="sticky top-0 right-0 text-gray-400 bg-spotifylightblack rounded-full py-2 px-2 hover:bg-spotifydarkgrey duration-300 cursor-pointer hover:text-white
      ">
        <GrNext />
      </button>
    </div>
  );
};

export default SlidingBubles;
