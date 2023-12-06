import { FormControlLabel, styled } from '@mui/material';

export const FormControlLabelTap = styled(FormControlLabel)(() => ({
  '& .MuiFormControlLabel-label': {
    fontFamily: ['YS Text Regular'].join(','),
    fontSize: '14px',
    fontWeight: '400',
  },
}));
