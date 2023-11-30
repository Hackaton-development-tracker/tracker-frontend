import { Box, Paper } from '@mui/material';

import UserLevelCards from '../../components/levelCards/levelCards';

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
          gap: '48px',
        }}
      >
        <UserLevelCards />
        <Box>
          Рекомендуем улучшить
          <Paper
            elevation={0}
            sx={{
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: '#F9FAFB',
            }}
          >
            {/* Content goes here */}
          </Paper>
        </Box>
        <Box>Рекомендуемые мини курсы</Box>
      </Box>
    </div>
  );
}

export default SkillsProfile;
