import styled from "styled-components";

export const StyledLoader = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: var(--white);
  box-sizing: border-box;
  animation: flipX 1s linear infinite;

  @keyframes flipX {
    0% {
      transform: perspective(200px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
    }
  }
`;
