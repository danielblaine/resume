import { FC } from 'react';
import { Resume } from '@pages/resume';
import { AppStyles } from './app.styles';

const App: FC = () => {
  return (
    <>
      <AppStyles />
      <Resume />
    </>
  );
};

export default App;
