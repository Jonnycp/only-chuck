import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useOutsideAlerter from "../utils/useClickOutside";
import { Icon } from "@iconify/react";
import {
  generateColors,
  generateSegments,
  getWinner,
} from "../utils/functions";
import Wheel from "./Wheel";
import ConfettiExplosion from "react-confetti-explosion";
import { device } from "../style/devices";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 15px;
  z-index: 12;
  position: relative;
  width: 90%;

  @media ${device.tablet} {
    width: initial;
  }
`;

const S_ConfettiExplosion = styled(ConfettiExplosion)`
  position: absolute;
  z-index: 100;
`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const CategoryModal = ({ setCategory, setOpen, category2Symbol }) => {
  const wrapperRef = useRef(null);
  const [winner, setWinner] = useState(null);
  useOutsideAlerter(wrapperRef, () => setOpen(false));

  useEffect(() => {
    if (winner) {
      setCategory(winner);
    }
  }, [winner]);

  return (
    <Background>
      {winner && (
        <S_ConfettiExplosion
          force={0.8}
          duration={2500}
          particleCount={250}
          width={1600}
          onComplete={() => setOpen(false)}
        />
      )}
      <Modal ref={wrapperRef}>
        <Close onClick={() => setOpen(false)}>
          <Icon icon="material-symbols:close-rounded" width={50}/>
        </Close>
        <Wheel
          segments={generateSegments(category2Symbol)}
          segColors={generateColors(Object.keys(category2Symbol).length)}
          onFinished={(winner) => {
            setWinner(getWinner(winner));
          }}
          primaryColor="#000"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={true}
          upDuration={100}
          downDuration={Math.floor(Math.random() * 900) + 150}
          fontFamily="Roboto Condensed"
          size={window.innerWidth <= 375 ? 160 : 200}
        />
      </Modal>
    </Background>
  );
};

export default CategoryModal;
