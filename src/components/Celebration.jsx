import React, { useState } from 'react';
import Slider from './Slider';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const Celebration = ({ moves }) => {
  const { width, height } = useWindowSize();
  const [showSlider, setShowSlider] = useState(false);

  const handlePlayAgain = () => {
    setShowSlider(true);
  };

  return (
    <div>
      {!showSlider && (
        <>
          <Confetti width={width} height={height} />
          <div className='animate-scale-up'>
            <div className="bg-[#F6F8F9] flex flex-col py-10 px-20 max-md:px-12 justify-center items-center gap-8 animate-bounceSmall rounded-full">
              <h1 className="uppercase tracking-wider text-3xl max-md:text-lg">
              Congratulations !!!
              </h1>
              <div className="flex items-center gap-5">
                <img
                src="src/assets/confetti.png"
                alt="Confetti"
                className="w-10"
                />
                <p className="max-md:text-xs">You've finished the game.</p>
                <img
                src="src/assets/confetti.png"
                alt="Confetti rotated"
                className="w-10 rotate-[270deg]"
                />
              </div>
              <div
              className="flex md:mt-5 items-center cursor-pointer"
              onClick={handlePlayAgain}
              >
                <p className="text-xs uppercase">Play Again</p>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 hover:fill-[#444239ff] transition-colors duration-200"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
                </svg>
              </div>
            </div>
          </div>
          
        </>
      )}

      {showSlider && <Slider />}
    </div>
  );
};

export default Celebration;
