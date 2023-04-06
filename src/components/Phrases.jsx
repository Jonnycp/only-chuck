import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { getFrase } from "../utils/functions";
import { Icon } from "@iconify/react";

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

const Phrases = ({ category }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [frasi, setFrasi] = useState(["Scorri per iniziare"]);
  const [error, setError] = useState(false);

  /* Mi serviva un modo per avere 2 frasi al render iniziale, per far apparire le frecce:
     Ho provato a generare la seconda frase al primo movimento dello swiper, però bisognava usare un "tocco deciso" o cliccare 2 volte
     Il modo più semplice quindi è mettere "Scorri per iniziare" come prima frase e nella seconda slide la prima frase
     Verrà generata la frase successiva quando si vede quella precedente.
     Il loading fa flashare tutte le slide, quindi meglio eliminarlo...
  */

  let initialized = false;
  useEffect(() => {
    if (
      !initialized &&
      (currentSlide === frasi.length || currentSlide === 0) &&
      !error
    ) {
      initialized = true;
      getFrase(category)
        .then((res) => setFrasi([...frasi, res]))
        .catch((err) => setError(err));
    }
  }, [currentSlide]);

  return (
    <>
      <S_Swiper
        modules={[Virtual, Navigation]}
        virtual
        navigation
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        /*onSliderFirstMove={(swiper) => {
          if (swiper.isEnd && !firstMove) {
            setFirstMove(true);
          }
        }}*/
      >
        {frasi.length > 1
          ? frasi.map((frase, i) => (
              <S_SwiperSlide key={i} virtualIndex={i}>
                {i === 0 ? (
                  <p>
                    {frase}
                    <br />
                    <Icon icon={"line-md:chevron-small-triple-right"} width={70}/>
                  </p>
                ) : (
                  frase
                )}
              </S_SwiperSlide>
            ))
          : error && (
              <p>
                <Icon icon={"line-md:alert-circle"} width={50}/>
                <br />
                Error!
              </p>
            )}
      </S_Swiper>
    </>
  );
};

export default Phrases;
