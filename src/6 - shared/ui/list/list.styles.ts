import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 8px;
`;

export const ListMarker = styled.div`
  margin-top: 9px;
  height: 6px;
  min-width: 6px;
  border-radius: 50%;
  background-color: #373d48;
`;
