import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import vars from '../static/scss/export.module.scss';

export const PrimaryButton = styled(Button)({
  color: `${vars.colorWhite}`,
  fontFamily: ['YS Text Medium'],
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '20px',
  padding: '15px 24px',
  borderRadius: '4px',
  backgroundColor: `${vars.colorBlue}`,
  letterSpacing: 0,
  '&:hover': {
    backgroundColor: `${vars.colorBlueMain}`,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: `${vars.colorBlueMain}`,
  },
  '&:focus': {
    boxShadow: 'none',
  },
  '&.Mui-disabled': {
    backgroundColor: `${vars.colorBlack300}`,
    color: `${vars.colorWhite}`,
  },
});

export const SecondaryButton = styled(Button)({
  fontFamily: ['YS Text Medium'],
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  padding: '10px 20px',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  border: `1px solid ${vars.colorBlueMain}`,
  '&:hover': {
    backgroundColor: `${vars.colorBlueMain}`,
    color: '#fff',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: `${vars.colorBlueMain}`,
  },
  '&:focus': {
    boxShadow: 'none',
  },
  '&.Mui-disabled': {
    borderColor: `${vars.colorBlack300}`,
    color: `${vars.colorBlack300}`,
  },
});

export const TextButton = styled(Button)({
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  color: `${vars.colorBlueMain}`,
  outline: 'none',
  padding: 0,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

export const TextLinkButton = styled(Button) ({
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  color: `${vars.colorBlack900}`,
  textTransform: 'none',
  textUnderlineOffset: '4px',
  padding: 0,
  '&:hover': {
    boxShadow: 'none',
    color: `${vars.colorBlueMain}`,
    textDecoration: 'underline',
    backgroundColor: 'transparent',
  },
})

export const CloseButton = styled(Button)({
  width: '24px',
  minWidth: 'auto',
  height: '24px',
  padding: '0',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

export const TextExpandButton = styled(Button)({
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  color: `${vars.colorBlueMain}`,
  outline: 'none',
  padding: 0,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});
