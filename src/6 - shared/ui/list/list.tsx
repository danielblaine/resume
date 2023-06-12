import { FC } from 'react';
import { Typography } from '../index';
import * as S from './list.styles';
import { ListProps } from './list.types';

export const List: FC<ListProps> = ({ items }) => {
  return (
    <S.List>
      {items.map((item) => (
        <S.ListItem key={item}>
          <S.ListMarker />
          <Typography>{item}</Typography>
        </S.ListItem>
      ))}
    </S.List>
  );
};
