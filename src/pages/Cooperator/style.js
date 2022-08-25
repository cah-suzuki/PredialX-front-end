import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  min-width: 80%;

  span {
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);
  }

  aside {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    font-size: 16px;
    color: var(--grey-0);

    div {
      div {
        span {
          width: auto;
        }
      }
    }

    button {
      height: 32px;
      width: 32px;
      background: var(--grey-3);
      border: none;
      color: var(--grey-0);
      border-radius: 4px;
    }

    button:hover {
      background: var(--grey-2);
    }
  }

  @media screen and (min-width: 540px) {
    max-width: 80%;
    min-width: 70%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 50%;
    min-width: 50%;
  }
`;
