import React, { useState, useEffect } from "react";
import styled from "styled-components";
import faceStrip from "../img/faceStrip.png";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import useSound from "use-sound";
import copySFX from "../audio/copy.mp3";
import PropTypes from "prop-types";

const SFooter = styled.footer`
  width: 100%;
  flex-grow: 0.5;
  background: url(${faceStrip});
  background-repeat: repeat-x;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-position-y: bottom;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: 1.5rem;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    opacity: 0.5;
    cursor: not-allowed;
  }  
`;

const Footer = ({ frase, canCopyOverride=false}) => {
  const [canCopy, setCanCopy] = useState(canCopyOverride);
  const [play] = useSound(copySFX)

  if (!canCopy) {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        setCanCopy(true);
      }
    });
  }

  const copy = (text) => {
    if (!text) {
      toast.error("Non c'è niente da copiare");
    } else {
      navigator.clipboard.writeText(text).then(
        () => {
            toast.success("Copiato!");
            play();
            navigator.share( {
                title: "ONLYCHUCK - Solo le migliori frasi di Chuck Norris",
                text: text + "\n - Chuck Norris",
                url: window.location.href,
              })
        },
        () => {
          toast.error("Impossibile copiare");
        }
      );
    }
  };

  return (
    <SFooter>
      {canCopy && (
        <Button onClick={() => copy(frase)} disabled={!frase}>
          <Icon icon="material-symbols:content-copy-outline" />
          Copia la perla
        </Button>
      )}
    </SFooter>
  );
};

Footer.propTypes = {
    frase: PropTypes.string,
};
export default Footer;
