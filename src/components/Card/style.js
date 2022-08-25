import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
  display: flex;
  margin-bottom: 15px;
  background: var(--grey-4);
  color: var(--grey-1);
  width: 100%;
  height: 45px;

  align-items: center;
  padding: 10px;
  border-radius: 4px;

  span {
    width: auto;
  }

  h2 {
    color: var(--grey-0);
  }

  button {
    width: 22px;
    height: 22px;
    background: var(--grey-1);
    border: none;
    border-radius: 4px;
    color: var(--grey-0);
  }

  button:hover {
    background: var(--negative-color);
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;

    button {
      width: 25px;
      height: 25px;
    }
  }
`;
