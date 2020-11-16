import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) =>
    props.mode === 'dark' ? '#0d0d0d' : 'rgb(247, 241, 237)'};

  width: 100%;
  position: fixed;
  top: ${(props) => props.scrollY > 80 && 0};

  div {
    width: 700px;
    height: 50px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
  }
`;
