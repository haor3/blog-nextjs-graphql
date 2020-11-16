import styled from 'styled-components';

export const Container = styled.div`
  text-align: right;
  bottom: 10px;
  right: 10px;
  position: fixed;

  .switch {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 36px;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 6px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 34px;
    width: 32px;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background-color: white;
    transition: 0.4s;
    border-radius: 6px;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(55px);
  }

  .slider:after {
    content: 'DARK';
    color: black;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 60%;
    font-size: 10px;
    font-family: Verdana, sans-serif;
  }
  input:checked + .slider:after {
    content: 'LIGHT';
    left: 0;
    right: 0;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
