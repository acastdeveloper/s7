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
