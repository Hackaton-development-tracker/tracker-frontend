import { Box } from '@mui/material';

import LevelCards from '../../components/levelCards/levelCards';
import SkillsList from '../../components/skillsList/skillsList';

function SkillsProfile() {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '48px',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
          gap: '80px',
        }}
      >
        <LevelCards />
        <SkillsList />
        <Box>Рекомендуемые мини курсы</Box>
      </Box>
  );
}

export default SkillsProfile;
