import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import P01 from '../assets/localhost_5174_Memory-Game_16Cards.jpeg';
import P02 from '../assets/localhost_5174_Memory-Game_20Cards.jpeg';
import P03 from '../assets/localhost_5174_Memory-Game_24Cards.jpeg';
import Game from './Game';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const slides = [
  { gridType: '4x4', src: P01, alt: 'easy', label: 'EASY', card: '16 CARDS' },
  { gridType: '6x6', src: P02, alt: 'medium', label: 'MEDIUM', card: '20 CARDS' },
  { gridType: '8x8', src: P03, alt: 'hard', label: 'HARD', card: '24 CARDS' },
];

const Slider = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSlideClick = (gridType) => {
    setSelectedGame(gridType);
  };

  return (
    <div>
      {selectedGame === null ? (
        <div className="bg-[#E8DCCCff] p-5 xl:p-7 border-8 border-[#F6F8F9ff]">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: -75,
              depth: 200,
              modifier: 3.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.gridType} onClick={() => handleSlideClick(slide.gridType)}>
                <div className="flex flex-col gap-2 justify-center items-center text-center hover:scale-105 transition-transform">
                  <img src={slide.src} alt={slide.alt} className="max-md:w-28 max-md:h-28 w-[11.6rem] h-[11.6rem] object-cover border-8 border-[#F6F8F9ff]" />
                  <div className='flex items-center gap-2 md:font-bold'>
                    <span>{slide.label}</span>
                    <span className='text-xs min-w-max'>({slide.card})</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-14 mt-7">
            <div className="swiper-button-prev cursor-pointer hover:scale-110 transition-transform">
              <ArrowLeft size={40} />
            </div>
            <div className="swiper-button-next cursor-pointer hover:scale-110 transition-transform">
              <ArrowRight size={40} />
            </div>
          </div>
        </div>
      ) : (
        <Game gridType={selectedGame} />
      )}
    </div>
  );
};

export default Slider;
