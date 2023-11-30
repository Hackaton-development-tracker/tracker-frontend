import { Box, Paper } from '@mui/material';

import LevelCards from '../../components/levelCards/levelCards';

function SkillsProfile() {
  return (
    <div className="layout">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '55px 48px',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
          gap: '48px',
        }}
      >
        <LevelCards />

        <Box>
          <Paper
            elevation={0}
            sx={{
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: '#F9FAFB',
            }}
          >
            Рекомендуем улучшить
          </Paper>
        </Box>
        <Box>Рекомендуемые мини курсы</Box>
      </Box>
    </div>
  );
}

export default SkillsProfile;
