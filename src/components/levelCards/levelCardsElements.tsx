import { styled } from '@mui/material/styles';
import { Paper, Typography, LinearProgress } from '@mui/material';

export const CardPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #DDE0E4',
  minWidth: '296px',
  maxWidth: '592px',
  width: '100%',
  minHeight: '166px',
});

export const CardTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0
});

export const AchievedLinearProgress = styled(LinearProgress)({
  backgroundColor: '#87CC9E',
  width: '100%',
  height: '12px',
  borderRadius: '12px',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#87CC9E', 
  },
});

export const RemainingLinearProgress = styled(LinearProgress)({
  backgroundColor: '#1d6bf3',
  width: '100%',
  height: '12px',
  borderRadius: '12px',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#1d6bf3',
  },
});