import React from "react";
import styled from "styled-components";
import logoIcon from "../../Asset/icons/logo_icon.svg";

// import { GlobalStyles } from "../../../styles/globalStyles";

const HoneyButton = ({ value, onClick, main }) => {
  return (
    <HButton onClick={onClick} main={main}>
      {value}
      {main && <img src={logoIcon.src} />}
    </HButton>
  );
};

HoneyButton.defaultProps = {
  value: "",
  onClick: () => {},
  main: false
};

const HButton = styled.button`
  width: 80%;
  height: 75px;
  background-color: #ffd86b;
  padding: 12px 0px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  ${({ main }) => main && `position:relative;`}
  img {
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  /* font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', Medium; */
  color: #3C3C3C;
`;

export default HoneyButton;
