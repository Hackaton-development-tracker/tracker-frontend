import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';
import vars from '../static/scss/export.module.scss';

export const CardPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const TitleTypography = styled(Typography)({
  fontFamily: ['YS Display Medium'],
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: 0,
});

export const TextTypography = styled(Typography)({
  fontFamily: ['YS Text Regular'],
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 0,
});

export const SmallTextTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
});

export const GreyTypography = styled(Typography)({
  fontFamily: ['YS Text Regular'],
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  color: `${vars.colorBlack500}`,
});

export const SourceTypography = styled(Typography)({
  fontFamily: ['YS Display Medium'],
  fontSize: '16px',
  lineHeight: '20px',
  letterSpacing: 0,
  maxWidth: '200px'
});

export const GradeTypography = styled(Typography)({
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: 0,
});

export const ProfessionTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '18px',
  lineHeight: '24px',
});

export const PercentTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '16px',
  lineHeight: '20px',
  color: vars.colorBlueMain,
  letterSpacing: 0,
});