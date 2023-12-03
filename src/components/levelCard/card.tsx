import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';

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