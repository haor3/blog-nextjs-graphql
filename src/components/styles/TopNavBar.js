import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;

  h1 {
    margin-top: 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10%;
  }

  a {
    margin-right: 30px;
    font-size: 0.8em;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 0;

    div {
      width: unset;
    }

    a:last-child {
      margin-right: 0;
    }
  }
`;
