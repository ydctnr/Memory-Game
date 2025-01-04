import React, { useState, useEffect } from 'react';
import Celebration from './Celebration';
import {
  easy1, easy2, easy3, easy4, easy5, easy6, easy7, easy8,
  medium1, medium2, medium3, medium4, medium5, medium6, medium7, medium8, medium9, medium10,
  hard1, hard2, hard3, hard4, hard5, hard6, hard7, hard8, hard9, hard10, hard11, hard12
} from '../assets';

const Game = ({ gridType }) => {
  const [gridColumns, setGridColumns] = useState(4);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(true);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const easyImages = [easy1, easy2, easy3, easy4, easy5, easy6, easy7, easy8];
  const mediumImages = [medium1, medium2, medium3, medium4, medium5, medium6, medium7, medium8, medium9, medium10];
  const hardImages = [hard1, hard2, hard3, hard4, hard5, hard6, hard7, hard8, hard9, hard10, hard11, hard12];

  useEffect(() => {
    switch (gridType) {
      case '4x4':
        setGridColumns(4);
        generateCards(easyImages);
        break;
      case '6x6':
        setGridColumns(5);
        generateCards(mediumImages);
        break;
      case '8x8':
        setGridColumns(6);
        generateCards(hardImages);
        break;
      default:
        setGridColumns(4);
        generateCards(easyImages);
    }
  }, [gridType]);

  const generateCards = (imageSet) => {
    const cardPairs = [...imageSet, ...imageSet];
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowCountdown(false);
    }
  }, [countdown]);

  useEffect(() => {
    if (!showCountdown) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showCountdown]);

  useEffect(() => {
    if (matchedCards.length === cards.length / 2 && cards.length > 0) {
      setIsGameFinished(true);
    }
  }, [matchedCards, cards]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    setMoves((prev) => prev + 1);
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, cards[firstIndex]]);
      }

      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  if (isGameFinished) {
    return <Celebration />;
  }

  return (
    <div className='flex flex-col gap-2'>
      {showCountdown ? (
        <div className="relative flex items-center justify-center">
          <div className="animate-spin bg-[#F6F8F9ff] p-16 rounded-2xl shadow-2xl shadow-gray-800"></div>
          <div className="absolute text-5xl">
            {countdown}
          </div>
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col gap-6 items-center text-center bg-[#5BA17Cff] py-7 px-10 max-md:px-7 border-8 border-[#F6F8F9ff]">
            <h1 className="tracking-wider text-xl underline mb-4">
              MEMORY GAME 
            </h1>
            <div
              className={`grid gap-3`}
              style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className="w-10 h-10 bg-[#A1D4C1ff] flex items-center justify-center rounded-lg shadow cursor-pointer"
                >
                  {flippedCards.includes(index) || matchedCards.includes(card) ? (
                    <img
                      src={card}
                      alt="dino"
                      className={`w-full h-full object-center rounded-lg ${
                        easyImages.includes(card) || hardImages.includes(card) ? 'p-[0.15rem]' : ''
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#D58D60ff] rounded-lg border-2 border-[#755B62ff]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-evenly items-center text-sm">
            <div className="flex flex-col gap-3 justify-center items-center text-center bg-[#5BA17Cff] border-8 border-[#F6F8F9ff] px-5 py-3">
              <h4 className="underline">MOVES</h4>
              <p style={{ minWidth: '4.5rem', textAlign: 'center' }}>{moves}</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-center bg-[#5BA17Cff] border-8 border-[#F6F8F9ff] px-5 py-3">
              <h4 className="underline">TIME</h4>
              <p style={{ minWidth: '4.5rem', textAlign: 'center' }}>
                {`${Math.floor(timer / 60).toString().padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;