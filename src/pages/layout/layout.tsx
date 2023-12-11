import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '186px 1fr',
          gridTemplateRows: '1fr',
          height: '100vh',
        }}
      >
        <Navigation />
        <Outlet />
      </Box>
    </div>
  );
};
