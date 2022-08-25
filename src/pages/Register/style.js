import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  max-width: 90%;
  min-width: 80%;
  align-items: center;
  justify-content: center;
  align-content: center;
  background: gray;
  padding: 30px 15px;
  background: var(--grey-3);
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    align-content: center;

    label {
      color: var(--grey-0);
      font-size: 9px;
      margin-top: 12px;
      text-align: left;
      width: 100%;
    }

    h2 {
      color: var(--grey-0);
    }
    div {
      margin-top: 12px;
      width: 100%;

      div {
        width: 100%;
      }
    }
  }

  button {
    margin-top: 25px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    color: var(--grey-0);
    background: var(--primary-color);
    border: 2px solid var(--primary-color);
  }

  button:hover {
    cursor: pointer;
    background: var(--primary-negative-color);
    border: 2px solid var(--primary-negative-color);
  }

  span {
    margin-top: 15px;
  }

  a {
    margin-top: 15px;
    text-decoration: none;
    color: var(--grey-0);
    background: var(--grey-1);
    width: 100%;
    height: 35px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:visited {
    text-decoration: none;
    color: var(--grey-0);
  }

  a:hover {
    background: var(--grey-2);
    cursor: pointer;
  }

  input {
    height: 35px;
    width: 100%;
    border-radius: 4px;
    border: 2px solid var(--grey-2);
    padding-left: 5px;
  }

  div {
    color: var(--grey-0);
    font-size: 9px;
  }

  span {
    font-size: 9px;
    color: var(--grey-1);
  }

  input:hover {
    border: 2px solid var(--grey-1);
  }

  @media screen and (min-width: 540px) {
    max-width: 80%;
    min-width: 70%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 50%;
    min-width: 50%;

    span {
      font-size: 12px;
    }

    button {
      font-size: 16px;
    }
    select {
      option {
        font-size: 12px;
      }
    }

    form {
      label {
        font-size: 12px;
      }

      div {
        div {
          font-size: 12px;
        }
      }

      h2 {
        font-size: 18px;
      }
    }
  }
`;
