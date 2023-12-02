import { styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';

export const SkillBox = styled(Box)((props) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '40px 24px',
  border: `1px solid ${props.borderColor || '#DDE0E4'}`,
  borderRadius: '6px',
  backgroundColor: '#FFF',
}));

export const SkillTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '16px',
  lineHeight: '20px',
  letterSpacing: 0,
});

export const LevelsGridContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 0,
  gap: '4px',
});

export const LevelGrid = styled(Grid)({
  height: '14px',
  width: '6px',
  borderRadius: '6px',
});