import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 80%;
  justify-content: center;
  height: 130px;
  gap: 15px;

  h2 {
    font-size: 18px;
    color: var(--grey-0);
    font-weight: bold;
  }

  p {
    color: var(--grey-1);
    font-size: 12px;
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  button {
    height: 35px;
    width: 100px;
    background: var(--grey-3);
    border: 2px solid var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
  }

  button:hover {
    background: var(--grey-2);
    border: 2px solid var(--grey-2);
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
