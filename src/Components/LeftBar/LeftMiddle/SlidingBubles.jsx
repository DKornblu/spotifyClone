import { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const SlidingBubbles = () => {
  let bubblesArray = ['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'];

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
    // if going to last index, set nextBtn to false
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
    // if returning to first index, set prevBtn to false
    if (currentInd === 1) {
      setPrevBtn(false);
    }
  };

  return (
    <div className="flex overflow-x-hidden py-2 ">
      <button className="sliding-button left-0" onClick={handlePrev}>
        <GrPrevious size={18} />
      </button>
      <div className="flex">
        {bubblesArray.map((bubble, index) => (
          <div
            key={index}
            className={`bubble-array ${index === currentInd ? 'font-bold' : ''}`}
          >
            {bubble}
          </div>
        ))}
      </div>
      <button className="sliding-button right-0" onClick={handleNext}>
        <GrNext size={18}/>
      </button>
    </div>
  );
};

export default SlidingBubbles;
