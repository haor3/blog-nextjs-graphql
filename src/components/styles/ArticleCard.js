import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 5em;
  width: 520px;
  height: 520px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    margin: auto;
    padding: 0;
    height: 30%;
    width: 80%;

    img {
      width: 100%;
    }
  }
`;

export const ArticleContainer = styled.div`
  margin: 4em 2em 0;
  width: 50%;

  h2,
  a {
    font-weight: bold;
  }

  p {
    margin-bottom: 40px;
  }

  a {
    cursor: pointer;
    text-decoration: underline;
    font-size: 0.8em;
    color: unset;
  }

  @media (max-width: 768px) {
    margin: auto;
    padding: 0px;
    width: 80%;
    margin-top: 0;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  div {
    margin-right: 10px;
  }
`;
