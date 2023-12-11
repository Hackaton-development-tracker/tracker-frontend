import { Radio, styled } from '@mui/material';
import vars from '../static/scss/export.module.scss';

export const RadioTap = styled(Radio)(() => ({
  '&.MuiRadio-root': {
    padding: '4px',
    color: vars.colorBlack300,
  },
  '&.Mui-checked': {
    color: vars.colorBlueMain,
  },
}));