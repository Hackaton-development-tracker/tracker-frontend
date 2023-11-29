import { Box, Paper } from '@mui/material';

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
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Paper elevation={0}
            sx={{
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #DDE0E4',
            }}
          >
            {/* Content goes here */}
          </Paper>
          <Paper elevation={0}
            sx={{
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #DDE0E4',
            }}
          >
            {/* Content goes here */}
          </Paper>
        </Box>
        <Box>
          Рекомендуем улучшить
          <Paper elevation={0}
            sx={{
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: '#DDE0E4',
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
