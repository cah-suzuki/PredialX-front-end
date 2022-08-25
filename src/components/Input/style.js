import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: red;
    }
  }
`;

export const InputContainer = styled.div`
  background: #343b41;
  border-radius: 2px;
  color: #f8f9fa;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid red;
    `}

  input {
    background: transparent;
    color: #f8f9fa;

    &::placeholder {
      color: #868e96;
    }
  }

  @media screen and (min-width: 1024px) {
    input {
      font-size: 16px;
    }
    &::placeholder {
      font-size: 16px;
    }
  }
`;
