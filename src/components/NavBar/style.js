import styled, { css } from "styled-components";
import logo from "./predio.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  margin-bottom: 18px;
  max-width: 90%;
  min-width: 80%;
  align-items: center;

  ${(props) =>
    props.centered
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: space-between;
        `}

  div {
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    height: 60px;
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--grey-0);

    span {
      margin-left: 70px;
      font-weight: bold;
      font-size: 25px;
    }
  }

  button {
    height: 25px;
    width: 75px;
    background: var(--grey-3);
    border: 2px solid var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
  }

  button:hover {
    background: var(--grey-2);
    border: 2px solid var(--grey-2);
  }

  @media screen and (min-width: 540px) {
    max-width: 80%;
    min-width: 70%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 50%;
    min-width: 50%;

    div {
      span {
        font-size: 40px;
      }
    }

    button {
      height: 32px;
      font-size: 12px;
    }
  }
`;
