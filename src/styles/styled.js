import styled from 'styled-components';

export const Cuadrado = styled.div`
  text-decoration:none;
  font-style: italic;
  padding: 1rem;

  &:hover {
      background-color: pink;
      text-decoration:underline;
  }

  &::before {
    content: "-";
  }
`;


export const Wrapper = styled.div`
  max-width: 320px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: whitesmoke;
  box-shadow:1px 1px 1px #33333333;
`;
