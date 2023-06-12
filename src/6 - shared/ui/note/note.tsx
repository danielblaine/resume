import { FC } from 'react';
import { Typography } from '../index';
import * as S from './note.styles';
import { NoteProps } from './note.types';

export const Note: FC<NoteProps> = ({ title, info, link }) => {
  return (
    <S.Note>
      <Typography bold>{title}</Typography>
      {link ? (
        <S.Link href={link} target="_blank">
          {info}
        </S.Link>
      ) : (
        <Typography>{info}</Typography>
      )}
    </S.Note>
  );
};
