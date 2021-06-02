import styled from 'styled-components';

export const Frase = styled.div`
  text-decoration:none;
  font-style: italic;
  padding: 1.5rem;

  &:hover {
      background-color: pink;
  }

  &::before {
    content: "-";
  }

  &::after {
    content: ".";
  }

`;


export const Wrapper = styled.div`
  max-width: 320px;
  margin: 2rem auto;
  padding-bottom: 3rem;
  background-color: whitesmoke;
  box-shadow:1px 1px 1rem #33333333;
`;
