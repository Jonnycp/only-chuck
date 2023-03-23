import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper";

import "swiper/css";
import NavigationButton from "./NavigationButton";

const S_Swiper = styled(Swiper)`
  width: 100%;
  max-height: 70vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.normal};
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const S_SwiperSlide = styled(SwiperSlide)`
  padding: 0 35px;
`;

const Phrases = () => {
  const [frasi, setFrasi] = useState([
    "Carly Fiorina once crawled through the entire Waco, TX sewer system just to watch Chuck Norris take a shit in a Taco Bell restrooM.",
    "fra",
  ]);
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <>
      <S_Swiper modules={[Virtual]} virtual onSwiper={setSwiper} onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex+1)}>
        {frasi.map((frase, i) => (
          <S_SwiperSlide key={i} virtualIndex={i}>
            {frase}
          </S_SwiperSlide>
        ))}
      </S_Swiper>
      {currentSlide != 1 && (
        <NavigationButton left action={() => swiper.slidePrev()} />
      )}
      <NavigationButton action={() => swiper.slideNext()} />
    </>
  );
};

export default Phrases;
