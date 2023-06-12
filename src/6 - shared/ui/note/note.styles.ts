import styled from 'styled-components';

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  font-size: 16px;
  color: #343434;
  text-decoration: none;
  width: min-content;

  &:hover {
    text-decoration: underline;
  }
`;
